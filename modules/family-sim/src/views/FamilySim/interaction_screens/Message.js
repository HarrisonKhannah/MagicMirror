import React from "react";
import Amplify, { DataStore, Storage } from "aws-amplify";
import { Message, User } from "../../../models";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import FamilySim from "../FamilySim";
import { Box, Flex, Image, Text, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Button, IconButton, CloseButton } from "@chakra-ui/react";
import pencil from "../../../assets/pencil_5.png";
import mic from "../../../assets/Group_48.png";
import send from "../../../assets/send_1.png";
import send2 from "../../../assets/send_2.png";
import { CloseIcon } from "@chakra-ui/icons";

const MessageSent = ({ setView, user, setRoom, room }) => {
	setTimeout(() => {
		setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />);
	}, [2000]);
	return (
		<Box>
			<IconButton position="relative" left="40vw" top="2vh" colorScheme="red" size="sm" aria-label="Search database" icon={<CloseIcon />} onClick={() => setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />)} />

			<Flex h={"70vh"} flexDirection={"row"} background="gray.800" justifyContent={"center"} borderRadius={10} alignItems="center">
				<Flex
					marginTop={5}
					borderRadius="100"
					onClick={() => {
						uploadFile;
						setTimeout(() => {
							setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />);
						}, [2000]);
					}}
					shadow
					justifyContent={"center"}
					alignItems="center"
					p={2}
				>
					<Image src={send2} />
				</Flex>
				<Text marginTop={5} fontSize="xl">
					Message sent!
				</Text>
			</Flex>
		</Box>
	);
};

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
								setView(<MessageSent setView={setView} setRoom={setRoom} room={room} user={user} />);
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
		<Box>
			<IconButton position="relative" left="40vw" top="2vh" colorScheme="red" size="sm" aria-label="Search database" icon={<CloseIcon />} onClick={() => setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />)} />

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
				</Flex>
			</Flex>
		</Box>
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
			await DataStore.save(
				new Message({
					from: user.name,
					read: false,
					msg: msg2,
					userID: recp.id
				})
			);
			setView(<MessageSent user={user} setView={setView} setRoom={setRoom} room={room} />);
		} catch (e) {
			console.log(e);
		}
	}
	return (
		<Box>
			<IconButton position="relative" left="40vw" top="2vh" colorScheme="red" size="sm" aria-label="Search database" icon={<CloseIcon />} onClick={() => setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />)} />

			<Flex h={"70vh"} flexDirection={"column"} background="gray.800" justifyContent={"center"} borderRadius={10}>
				<Text fontWeight="bold" fontSize="2xl">
					Text message to {user.name}
				</Text>
				<Text>Type a message or choose some of the sample prompts below:</Text>
				<Flex flexDirection={"column"} alignItems={"center"} margin={100} p={10} background="gray.800">
					<FormControl
						onSubmit={(e) => {
							console.log("hello");
							e.preventDefault();
							saveMessage();
						}}
					>
						<FormLabel>
							<Input
								background="white"
								isReadOnly
								type="text"
								name="msg"
								value="Thinking of you!"
								onClick={(v) => {
									setMsg(v.target.value);
								}}
							/>
							<Input
								isReadOnly
								type="text"
								name="msg"
								value="Call me!"
								onClick={(v) => {
									setMsg(v.target.value);
								}}
							/>
							<Input
								isReadOnly
								type="text"
								name="msg"
								marginBottom={10}
								value="I love you <3"
								onClick={(v) => {
									setMsg(v.target.value);
								}}
							/>
							Input your own:
							<Input
								type="text"
								name="msg"
								onChange={(v) => {
									setMsg(v.target.value);
								}}
							/>
						</FormLabel>

						<Button mt={4} colorScheme="teal" type="submit">
							Submit
						</Button>
					</FormControl>
				</Flex>
			</Flex>
		</Box>
	);
};

const MessageComp = ({ setView, user, setRoom, room }) => {
	return (
		<Box>
			<IconButton position="relative" left="40vw" top="2vh" colorScheme="red" size="sm" aria-label="Search database" icon={<CloseIcon />} onClick={() => setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />)} />

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
		</Box>
	);
};

export default MessageComp;
