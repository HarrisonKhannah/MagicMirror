import React from "react";
import Amplify, { DataStore } from "aws-amplify";
import Lottie from "react-lottie";
import awsconfig from "../../aws-exports";
import { User } from "../../models";
import Cal from "./interaction_screens/Cal";
import img from "../../assets/Vector.png";
import { Settings } from "./Settings";
const UserMenu = ({ setView, user, setRoom, room }) => {
	return (
		<div>
			<div
				onClick={() => {
					setView(<Cal setView={setView} user={user} setRoom={setRoom} room={room} />);
				}}
			>
				Calander
			</div>
			<div>Call</div>
			<div>Message</div>
		</div>
	);
};

const MirrorSettings = ({ setView, user, setRoom, room }) => {
	return (
		<div>
			<div
				onClick={() => {
					setView(<Cal setView={setView} user={user} setRoom={setRoom} room={room} />);
				}}
			>
				Calander
			</div>
			<div>Mailbox</div>
			<div
				onClick={() => {
					setView(<Settings setView={setView} user={user} setRoom={setRoom} room={room} />);
				}}
			>
				Settings
			</div>
		</div>
	);
};
const UserComp = ({ setView, user, setRoom, room }) => {
	const [show, setShow] = React.useState(false);
	return (
		<div>
			{show ? <UserMenu setView={setView} user={user} setRoom={setRoom} room={room} /> : null}
			<div
				onClick={() => {
					setShow(!show);
				}}
			>
				<Lottie options={{ loop: true, path: "https://assets9.lottiefiles.com/packages/lf20_lgxl1acg.json" }} height={100} width={100} />
			</div>
		</div>
	);
};

export const MirrorComp = ({ setView, user, setRoom, room }) => {
	const [show, setShow] = React.useState(false);
	return (
		<div>
			{show ? <MirrorSettings room={room} setRoom={setRoom} setView={setView} user={"MIRROR"} /> : null}
			<div
				onClick={() => {
					setShow(!show);
				}}
			>
				<img src={img} height={50} width={50} />
			</div>
		</div>
	);
};

const FamilySim = ({ setView, setRoom, room }) => {
	const [users, setUsers] = React.useState([]);
	async function getUsers() {
		Amplify.configure(awsconfig);
		const user = await DataStore.query(User);
		setUsers(user);
	}
	React.useEffect(() => {
		getUsers();
	}, []);
	return (
		<div style={{ display: "flex", justifyContent: "space-between" }}>
			<div className="lotties" style={{ display: "flex" }}>
				{users.map((user) => {
					return (
						<div>
							<UserComp setView={setView} user={user} setRoom={setRoom} room={room} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FamilySim;
