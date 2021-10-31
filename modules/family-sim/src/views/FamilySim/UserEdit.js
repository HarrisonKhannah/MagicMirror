import React from "react";
import Amplify, { DataStore } from "aws-amplify";

import awsconfig from "../../aws-exports";
import { Event, User } from "../../models";
import FamilySim from "./FamilySim";
import { AddUser } from "./user_interaction/AddUser";
import { Box, Button, CloseButton, Divider, Flex, IconButton, Select, Switch, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import Lottie from "react-lottie";

export const UserEdit = ({ setView, user, setRoom, room, userEdit }) => {
	const [users, setUsers] = React.useState([]);
	async function getUsers() {
		const user = await DataStore.query(User);
		setUsers(user);
	}
	React.useEffect(() => {
		getUsers();
	}, []);

	return (
		<Box background="gray.800" borderRadius={10} h="100%">
			<IconButton position="relative" left="40vw" colorScheme="red" size="sm" aria-label="Search database" icon={<CloseIcon />} onClick={() => setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />)} />

			<Flex h={"60vh"} p={10} flexDirection={"column"} width="100%" alignItems="start">
				<Text fontWeight="bold">{userEdit.name} settings</Text>
				<Box p={2}>
					<Flex justifyContent={"space-between"} align="center" width="100%" p={2}>
						<Text>Name: {userEdit.name}</Text>
					</Flex>
					<Flex justifyContent={"start"} align="center" width="100%" p={2}>
						<Text>Avatar: </Text> <Lottie options={{ loop: true, path: "https://assets9.lottiefiles.com/packages/lf20_lgxl1acg.json" }} style={{ margin: 0 }} height={100} width={100} />
					</Flex>
					<Box textAlign="left">
						{" "}
						<Text fontWeight="bold"> Privacy </Text>
						<Text fontSize="xs">(This will override the main menu privacy settings)</Text>
					</Box>
					<Flex justifyContent={"space-between"} align="center" width="100%" p={2}>
						<Text>Can see your events:</Text>
						<Switch />
					</Flex>
					<Flex justifyContent={"space-between"} align="center" width="100%" p={2}>
						<Text marginRight="10">Messages are automatically deleted:</Text>
						<Box>
							<Select size="xs" placeholder="Select option">
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</Select>
						</Box>
					</Flex>
					<Flex justifyContent={"space-between"} align="center" width="100%" p={2} textAlign="left">
						<Text>
							Incognito Mode: <br /> <Text fontSize="xs">(All messages and calls to this person will not be saved)</Text>
						</Text>
						<Switch />
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};
