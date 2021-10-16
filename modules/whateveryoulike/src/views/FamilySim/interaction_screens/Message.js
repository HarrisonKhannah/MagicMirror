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
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import pencil from "../../../assets/pencil_5.png";
import mic from "../../../assets/Group_48.png";
import send from "../../../assets/send_1.png";

const MessageAudio = ({ setView, user, setRoom, room }) => {
	const [record, setRecord] = React.useState(RecordState.PAUSE);
	const [source, setSource] = React.useState(null);
	const [view, setViewMic] = React.useState(
		<Box>
			<Box
				marginTop={5}
				borderRadius="100"
				backgroundColor="red.500"
				onClick={() => {
					setRecord(RecordState.START);
				}}
				shadow
				p={5}
			>
				<Image src={mic} h={5} />
			</Box>
			Press to record{" "}
		</Box>
	);
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
	React.useEffect(() => {
		console.log();
		if (record == RecordState.PAUSE) {
			setViewMic(
				<Box marginRight={5} w={120}>
					<Flex
						marginTop={5}
						borderRadius="100"
						backgroundColor="red.500"
						onClick={() => {
							setRecord(RecordState.START);
						}}
						shadow
						p={5}
						justifyContent={"center"}
					>
						<Image src={mic} h={5} />
					</Flex>
					Start recording
				</Box>
			);
		} else if (record == RecordState.START) {
			setViewMic(
				<Box marginRight={5} w={120}>
					<Flex
						marginTop={5}
						borderRadius="100"
						backgroundColor="red.500"
						onClick={() => {
							setRecord(RecordState.STOP);
						}}
						shadow
						p={5}
						justifyContent={"center"}
					>
						<Box h={5} w={5} background="white" />
					</Flex>
					Stop recording
				</Box>
			);
		} else if (record == RecordState.STOP) {
			setViewMic(
				<Flex>
					<Box marginRight={5} w={120}>
						<Flex
							marginTop={5}
							borderRadius="100"
							backgroundColor="red.500"
							onClick={() => {
								setRecord(RecordState.START);
							}}
							shadow
							p={5}
							justifyContent={"center"}
						>
							<Image src={mic} h={5} />
						</Flex>
						Redo recording
					</Box>
					<Box w={120}>
						<Flex
							marginTop={5}
							borderRadius="100"
							backgroundColor="green.500"
							onClick={() => {
								uploadFile;
							}}
							shadow
							p={5}
							justifyContent={"center"}
						>
							<Image src={send} h={5} />
						</Flex>
						Upload file
					</Box>
				</Flex>
			);
		}
	}, [record]);
	return (
		<Flex h={"70vh"} flexDirection={"column"} background="gray.800" justifyContent={"center"} borderRadius={10}>
			<Text fontWeight="bold" fontSize="2xl">
				Send message to {user.name}
			</Text>
			<Text>Choose one of the two options below:</Text>
			<Flex flexDirection={"column"} alignItems={"center"} marginTop={10}>
				<Box w={"19vh"} borderRadius="100" overflow={"hidden"} marginBottom={10} background={"purple.300"} h={"19vh"}>
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
				</Box>
				<audio controls ref={audioRef}>
					{source != null ? <source src={source.url} type="audio/wav" /> : null}
				</audio>
				{view}
				{/* <Box
					marginTop={5}
					borderRadius="100"
					backgroundColor="red.500"
					onClick={() => {
						setRecord(RecordState.START);
					}}
					shadow
					p={5}
				>
					<Image src={mic} h={5} />
				</Box>
				Press to record
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
				</button> */}
			</Flex>
		</Flex>
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
		<Flex h={"50vh"} flexDirection={"column"} background="gray.800" justifyContent={"center"} borderRadius={10} marginBottom="20vh">
			<Text fontWeight="bold" fontSize="2xl">
				Send message to {user.name}
			</Text>
			<Text>Choose one of the two options below:</Text>
			<Flex flexDirection={"row"} justifyContent={"space-around"} marginTop={10}>
				<Flex
					alignItems="center"
					justifyContent={"center"}
					flexDirection={"column"}
					onClick={() => {
						setView(<MessageAudio setView={setView} user={user} setRoom={setRoom} room={room} />);
					}}
					background="gray.900"
					maxW="sm"
					borderWidth="1px"
					borderColor="white"
					borderRadius="lg"
					overflow="hidden"
					p={5}
					w={"15vw"}
				>
					Audio
					<Box w={50} m={2}>
						<Image src={mic} />
					</Box>
					Send
				</Flex>
				<Flex
					justifyContent={"center"}
					flexDirection={"column"}
					background="gray.900"
					maxW="sm"
					borderWidth="1px"
					borderColor="white"
					borderRadius="lg"
					overflow="hidden"
					w={"15vw"}
					alignItems="center"
					p={5}
					onClick={() => {
						setView(<MessageText setView={setView} user={user} setRoom={setRoom} room={room} />);
					}}
				>
					Text
					<Box w={50} m={2}>
						<Image src={pencil} />
					</Box>
					Send
				</Flex>
			</Flex>
		</Flex>
	);
};

export default MessageComp;
