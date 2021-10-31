import React from "react";
import Amplify, { DataStore } from "aws-amplify";

import awsconfig from "../../aws-exports";
import { Event, User } from "../../models";
import FamilySim from "./FamilySim";
import { AddUser } from "./user_interaction/AddUser";
import { Box, Button, CloseButton, Divider, Flex, IconButton, Select, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { UserEdit } from "./UserEdit";

export const Settings = ({ setView, user, setRoom, room }) => {
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

			<Flex h={"60vh"} p={2} flexDirection={"column"} width="100%" alignItems="start">
				<Text fontWeight="bold">Settings</Text>
				<Flex justifyContent={"space-between"} align="center" width="100%" p={2}>
					<Text>My avatar</Text>
					<Button size="xs" background="gray.900">
						Edit
					</Button>
				</Flex>
				<Divider />
				<Flex justifyContent={"space-between"} align="center" width="100%" p={2}>
					<Text>Bluetooth devices</Text>
					<Button size="xs" background="gray.900">
						Add device
					</Button>
				</Flex>
				<Divider />
				<Flex justifyContent={"space-between"} align="center" width="100%" p={2}>
					<Text>Call prompts</Text>
					<Button size="xs" background="gray.900">
						Edit
					</Button>
				</Flex>
				<Box>
					{" "}
					<Text fontWeight="bold"> Privacy </Text>
				</Box>
				<Flex justifyContent={"space-between"} align="center" width="100%" p={2}>
					<Text>Events are visible to</Text>
					<Box>
						<Select size="xs" placeholder="Select option">
							<option value="option1">Everyone</option>
							<option value="option2">No one</option>
						</Select>
					</Box>
				</Flex>
				<Flex justifyContent={"space-between"} align="center" width="100%" p={2}>
					<Text>Messages are automatically deleted:</Text>
					<Box>
						<Select size="xs" placeholder="Select option">
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</Select>
					</Box>
				</Flex>
				<Box>
					{" "}
					<Text fontWeight="bold"> Neighbourhood </Text>
				</Box>

				{users.map((user) => {
					return (
						<Flex justifyContent={"space-between"} align="center" width="100%" p={2}>
							<Text>{user.name}</Text>
							<Button
								size="xs"
								background="gray.900"
								onClick={() => {
									setView(<UserEdit setView={setView} setRoom={setRoom} room={room} userEdit={user} />);
								}}
							>
								Edit
							</Button>
						</Flex>
					);
				})}
				<Button
					onClick={() => {
						setView(<AddUser setView={setView} setRoom={setRoom} room={room} />);
					}}
				>
					Add User
				</Button>
			</Flex>
		</Box>
	);
};
