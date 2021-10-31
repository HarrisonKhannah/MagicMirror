import { Box, Circle, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import img1 from "../assets/angry.png";
import img2 from "../assets/crying.png";
import img3 from "../assets/surprise.png";
import img4 from "../assets/Group11.png";
import img5 from "../assets/Group.png";
import FamilySim from "../views/FamilySim/FamilySim";

export const EndedScreen = ({ setView, setRoom, room }) => {
	React.useEffect(() => {
		setTimeout(() => {
			setView(<RateYourCall setRoom={setRoom} setView={setView} room={room} />);
		}, 1000);
	}, []);
	return (
		<Flex background="gray.800" borderRadius={10} h="70vh" justifyContent="center" alignItems="center">
			<Box>
				<Text fontSize="3xl" fontWeight="light">
					{" "}
					Call ended
				</Text>
			</Box>
		</Flex>
	);
};

export const RateYourCall = ({ setView, setRoom, room }) => {
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
					<Box h="100%" p={3.5} borderRadius="40">
						<Image src={img1} h="100%" />
					</Box>
					<Box h="100%" p={3.5} borderRadius="40">
						<Image src={img5} h="100%" />
					</Box>
					<Box h="100%" p={3.5} borderRadius="40">
						<Image src={img2} h="100%" />
					</Box>
					<Box h="100%" p={3.5} borderRadius="40">
						<Image src={img3} h="100%" />
					</Box>
					<Box h="100%" p={3.5} borderRadius="40">
						<Image src={img4} h="100%" />
					</Box>
				</Flex>
			</Box>
		</Flex>
	);
};
