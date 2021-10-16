import React from "react";
import Amplify, { DataStore } from "aws-amplify";
import Lottie from "react-lottie";
import awsconfig from "../../aws-exports";
import { User } from "../../models";
import Cal from "./interaction_screens/Cal";
import img from "../../assets/Vector.png";
import { Settings } from "./Settings";
import MessageComp from "./interaction_screens/Message";
import { Avatar, Box, CircularProgress, CircularProgressLabel, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import phone from "../../assets/Group_42.png";
import cal from "../../assets/Group_43.png";
import msg from "../../assets/Group_44.png";
import games from "../../assets/Group_45.png";
import mail from "../../assets/Group_46.png";
import settings from "../../assets/Group_47.png";
const UserMenu = ({ setView, user, setRoom, room }) => {
	return (
		<Box pos={"absolute"} left={"30vw"} bottom={"50vh"} bg="gray.800" p={5} borderRadius={10} shadow={1}>
			<Text marginLeft={5} textAlign="start" color="gray.500">
				{user.name}
			</Text>
			<Flex>
				<Box
					padding={5}
					onClick={() => {
						setView(<Cal setView={setView} user={user} setRoom={setRoom} room={room} />);
					}}
				>
					<Avatar background={"transparent"} name="Calander" src={cal} />
					<Box>Calander</Box>
				</Box>
				<Box p={5}>
					<Avatar background={"transparent"} name="Phone" src={phone} />
					<Box>Call</Box>
				</Box>
				<Box
					p={5}
					onClick={() => {
						setView(<MessageComp setView={setView} user={user} setRoom={setRoom} room={room} />);
					}}
				>
					<Avatar background={"transparent"} name="Message" src={msg} />
					<Box>Message</Box>
				</Box>
				<Box p={5}>
					<Avatar background={"transparent"} name="Games" src={games} />
					<Box>Games</Box>
				</Box>
			</Flex>
		</Box>
	);
};

const MirrorSettings = ({ setView, user, setRoom, room, setShow }) => {
	return (
		<Flex pos="absolute" bottom="40vh" right="160vh" bg="gray.800" borderRadius={10} p={5}>
			<Box
				padding={5}
				onClick={() => {
					setShow(false);
					setView(<Cal setView={setView} user={user} setRoom={setRoom} room={room} />);
				}}
			>
				<Avatar background={"transparent"} name="Calander" src={cal} />
				<Box>Calander</Box>
			</Box>

			<Box
				p={5}
				onClick={() => {
					setShow(false);
					setView(<MessageComp setView={setView} user={user} setRoom={setRoom} room={room} />);
				}}
			>
				<Avatar background={"transparent"} name="Mail" src={mail} />
				<Box>Mailbox</Box>
			</Box>
			<Box p={5}>
				<Avatar background={"transparent"} name="Settings" src={settings} />
				<Box>Settings</Box>
			</Box>
		</Flex>
	);
};
const UserComp = ({ setView, user, setRoom, room }) => {
	const [show, setShow] = React.useState(false);
	return (
		<div>
			<div
				onClick={() => {
					setShow(!show);
				}}
			>
				<Box>
					<div style={{ opacity: show ? 1 : 0 }}>
						<UserMenu setView={setView} user={user} setRoom={setRoom} room={room} />
					</div>
					<div>
						<Lottie options={{ loop: true, path: "https://assets9.lottiefiles.com/packages/lf20_lgxl1acg.json" }} height={100} width={100} />
					</div>
				</Box>
			</div>
		</div>
	);
};

export const MirrorComp = ({ setView, user, setRoom, room }) => {
	const [show, setShow] = React.useState(false);
	return (
		<Box width={"100%"}>
			{show ? <MirrorSettings room={room} setRoom={setRoom} setView={setView} user={"MIRROR"} setShow={setShow} /> : null}
			<Box
				width="50vw"
				onClick={() => {
					setShow(!show);
				}}
			>
				<Image src={img} height={50} width={50} />
			</Box>
		</Box>
	);
};

const FamilySim = ({ setView, setRoom, room }) => {
	const [users, setUsers] = React.useState([]);
	async function getUsers() {
		Amplify.configure(awsconfig);
		// setView(<CircularProgress isIndeterminate color="green.300" />);
		const user = await DataStore.query(User);
		setUsers(user);
	}
	React.useEffect(() => {
		getUsers();
	}, []);
	return (
		<div>
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
