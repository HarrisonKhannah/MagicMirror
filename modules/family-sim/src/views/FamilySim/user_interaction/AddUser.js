import React from "react";
import Amplify, { DataStore } from "aws-amplify";
import Lottie from "react-lottie";
import awsconfig from "../../../aws-exports";
import { User, Calander } from "../../../models";
import FamilySim from "../FamilySim";
import { Box, Flex, IconButton, Button, FormControl, FormLabel, Input, Divider, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export const AddUser = ({ setView, user, setRoom, room }) => {
	const [name, setName] = React.useState("");
	async function submit() {
		let user = await DataStore.save(
			new User({
				uuid: name,
				name: name,
				happiness: 100
			})
		);

		await DataStore.save(
			new Calander({
				uuid: name,
				userID: user.id
			})
		);

		setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />);
	}
	return (
		<Box background="gray.800" borderRadius={10} h="100%">
			<IconButton position="relative" left="40vw" colorScheme="red" size="sm" aria-label="Search database" icon={<CloseIcon />} onClick={() => setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />)} />

			<Flex h={"60vh"} p={2} flexDirection={"column"} width="100%" alignItems="start">
				<Text fontWeight="bold">Settings</Text>
				<Flex justifyContent={"space-between"} align="center" width="100%" p={2}>
					<Text>Add user</Text>
				</Flex>
				<Divider />
				<FormControl>
					<FormLabel>
						Enter the user's name:
						<Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
					</FormLabel>
					<Button
						type="submit"
						onClick={async (e) => {
							e.preventDefault();
							await submit();
							setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />);
						}}
					>
						Add User
					</Button>
				</FormControl>
			</Flex>
		</Box>
	);
};
