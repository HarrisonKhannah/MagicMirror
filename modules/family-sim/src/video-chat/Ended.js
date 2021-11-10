import { Box, Circle, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import img1 from "../assets/angry.png";
import img2 from "../assets/crying.png";
import img3 from "../assets/surprise.png";
import img4 from "../assets/Group11.png";
import img5 from "../assets/Group.png";
import FamilySim from "../views/FamilySim/FamilySim";
import { User } from "../models";
import { DataStore } from "aws-amplify";

export const EndedScreen = ({ setView, setRoom, room, user }) => {
	React.useEffect(() => {
		setTimeout(() => {
			setView(<RateYourCall user={user} setRoom={setRoom} setView={setView} room={room} />);
		}, 1000);
	}, []);
	return (
		<Flex background="gray.800" borderRadius={10} h="70vh" justifyContent="center" alignItems="center">
			<Box>
				<Text fontSize="3xl" fontWeight="light">
					{" "}
					Call ended with {user.name}
				</Text>
			</Box>
		</Flex>
	);
};

export const RateYourCall = ({ setView, setRoom, room, user }) => {
	async function handleSubmit(num) {
		await DataStore.save(
			User.copyOf(user, (item) => {
				item.happiness += num;
			})
		);
	}
	return (
		<Flex background="gray.800" flexDirection={"column"} borderRadius={10} h="70vh" justifyContent="center" alignItems="center">
			<Box marginBottom={2}>
				<Text fontSize="xl" fontWeight="light">
					Rate your call
				</Text>
			</Box>
			<Box background="gray.900" p={5} borderRadius={50}>
				<Flex
					onClick={() => {
						setView(<FamilySim room={room} setView={setView} setRoom={setRoom} />);
					}}
					justifyContent="space-around"
					p={3}
					h="90%"
				>
					{/* Modify users happiness index subsequently with the emotion chosen. */}
					<Box h="100%" p={3.5} borderRadius="40" onClick={() => handleSubmit(-30)}>
						<Image src={img1} h="100%" />
					</Box>
					<Box h="100%" p={3.5} borderRadius="40" onClick={() => handleSubmit(-20)}>
						<Image src={img5} h="100%" />
					</Box>
					<Box h="100%" p={3.5} borderRadius="40" onClick={() => handleSubmit(0)}>
						<Image src={img2} h="100%" />
					</Box>
					<Box h="100%" p={3.5} borderRadius="40" onClick={() => handleSubmit(20)}>
						<Image src={img3} h="100%" />
					</Box>
					<Box h="100%" p={3.5} borderRadius="40" onClick={() => handleSubmit(30)}>
						<Image src={img4} h="100%" />
					</Box>
				</Flex>
			</Box>
		</Flex>
	);
};
