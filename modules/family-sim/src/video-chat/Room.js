import { Box, Circle, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Video from "twilio-video";
import Participant from "./Participant";
import img1 from "../assets/Group9.png";
import img2 from "../assets/Group10.png";
import img3 from "../assets/Vector1.png";
import img4 from "../assets/Vector2.png";

const Waiting = () => {
	return (
		<Flex flexDirection="column" justifyContent="center" alignItems="center" w="85%">
			<Spinner size="xl" marginBottom={2} />
			<Text>Waiting for other user to join</Text>
		</Flex>
	);
};

const Room = ({ roomName, token, handleLogout }) => {
	const [room, setRoom] = React.useState(null);
	const [participants, setParticipants] = React.useState([]);
	const remoteParticipants = participants.map((participant) => <Participant key={participant.sid} participant={participant} local={false} />);
	React.useEffect(() => {
		const participantConnected = (participant) => {
			setParticipants((prevParticipants) => [...prevParticipants, participant]);
		};
		const participantDisconnected = (participant) => {
			setParticipants((prevParticipants) => prevParticipants.filter((p) => p !== participant));
		};
		Video.connect(token, {
			name: roomName
		}).then((room) => {
			setRoom(room);
			room.on("participantConnected", participantConnected);
			room.on("participantDisconnected", participantDisconnected);
			room.participants.forEach(participantConnected);
		});
		return () => {
			setRoom((currentRoom) => {
				if (currentRoom && currentRoom.localParticipant.state === "connected") {
					currentRoom.localParticipant.tracks.forEach(function (trackPublication) {
						trackPublication.track.stop();
					});
					currentRoom.disconnect();
					return null;
				} else {
					return currentRoom;
				}
			});
		};
	}, [roomName, token]);

	return (
		<div className="room">
			<div className="remote-participants">{remoteParticipants.length == 0 ? <Waiting /> : remoteParticipants}</div>
			<div className="local-participant">{room ? <Participant key={room.localParticipant.sid} participant={room.localParticipant} local={true} /> : ""}</div>

			<div className="menu-bar">
				<Box backgroundColor="gray.800" w="40%" borderRadius="50" shadow h="100%">
					<Flex justifyContent="space-around" p={3} h="100%">
						<Circle backgroundColor="gray.900" h="6vh" p={3.5} borderRadius="40">
							<Image src={img1} h="100%" />
						</Circle>
						<Circle backgroundColor="gray.900" h="6vh" p={3.5} borderRadius="40">
							<Image src={img2} h="100%" />
						</Circle>
						<Circle backgroundColor="gray.900" h="6vh" p={3.5} borderRadius="40">
							<Image src={img3} h="100%" />
						</Circle>
						<Circle onClick={handleLogout} h="6vh" backgroundColor="red.500" p={3.5} borderRadius="40">
							<Image src={img4} h="100%" />
						</Circle>
					</Flex>
				</Box>
			</div>
		</div>
	);
};

export default Room;
