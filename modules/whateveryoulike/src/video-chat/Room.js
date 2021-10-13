import React, { useState, useEffect } from "react";
import Video from "twilio-video";
import Participant from "./Participant";

const Room = ({ roomName, token, handleLogout }) => {
	const [room, setRoom] = React.useState(null);
	const [participants, setParticipants] = React.useState([]);
	const remoteParticipants = participants.map((participant) => <p key={participant.sid}>{participant.identity}</p>);
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
			<button onClick={handleLogout}>Log out</button>
			<div style={{}}>{remoteParticipants}</div>
			<div className="local-participant">{room ? <Participant key={room.localParticipant.sid} participant={room.localParticipant} /> : ""}</div>
		</div>
	);
};

export default Room;
