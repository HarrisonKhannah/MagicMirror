import React from "react";
import Amplify, { DataStore, Storage } from "aws-amplify";
import Lottie from "react-lottie";
import awsconfig from "../../../aws-exports";
import { Message, User } from "../../../models";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import VideoChat from "../../../video-chat/VideoChat";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import FamilySim from "../FamilySim";

const MessageAudio = ({ setView, user, setRoom, room }) => {
	const [record, setRecord] = React.useState(RecordState.STOP);
	const [source, setSource] = React.useState(null);
	const audioRef = React.useRef();
	const uploadFile = async () => {
		try {
			await Storage.put("hello.wav", source, {
				contentType: "audio/wav"
			});
			console.log("uploaded!");
		} catch (error) {
			console.log("Error uploading file: ", error);
		}
	};
	return (
		<div>
			<AudioReactRecorder
				state={record}
				type={"wav"}
				onStop={(value) => {
					setSource(value);
					if (audioRef.current) {
						audioRef.current.pause();
						audioRef.current.load();
					}
				}}
			/>
			<audio controls ref={audioRef}>
				{source != null ? <source src={source.url} type="audio/wav" /> : null}
			</audio>
			<button
				onClick={() => {
					setRecord(RecordState.START);
				}}
			>
				Start
			</button>
			<button
				onClick={() => {
					setRecord(RecordState.STOP);
				}}
			>
				Stop
			</button>
			<button
				onClick={() => {
					uploadFile();
				}}
			>
				Upload
			</button>
		</div>
	);
};

const MessageText = ({ setView, user, setRoom, room }) => {
	const [users, setUsers] = React.useState([]);
	const [recp, setRecp] = React.useState(null);
	const [msg2, setMsg] = React.useState("");
	async function getUsers() {
		const user = await DataStore.query(User);
		setUsers(user);
		setRecp(user[0]);
	}
	React.useEffect(() => {
		getUsers();
		console.log(users);
	}, []);
	async function saveMessage() {
		try {
			let msg = await DataStore.save(
				new Message({
					from: user.name,
					read: false,
					msg: msg2,
					userID: recp.id
				})
			);
			setView(<h1>Message sent!</h1>);
			setTimeout(() => {
				setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />);
			}, [1000]);
		} catch (e) {
			console.log(e);
		}
	}
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				saveMessage();
			}}
		>
			<label>
				Recipicant
				<select
					onChange={(val) => {
						setRecp(val);
					}}
				>
					{users.map((user) => {
						return <option value={user}>{user.name}</option>;
					})}
				</select>
			</label>
			<label>
				Message:
				<input
					type="text"
					name="msg"
					onChange={(v) => {
						setMsg(v.target.value);
					}}
				/>
			</label>

			<input type="submit" value="Submit" />
		</form>
	);
};

const MessageComp = ({ setView, user, setRoom, room }) => {
	return (
		<div>
			<div
				onClick={() => {
					setView(<MessageAudio setView={setView} user={user} setRoom={setRoom} room={room} />);
				}}
			>
				Audio
			</div>
			<div
				onClick={() => {
					setView(<MessageText setView={setView} user={user} setRoom={setRoom} room={room} />);
				}}
			>
				Text
			</div>
		</div>
	);
};

export default MessageComp;
