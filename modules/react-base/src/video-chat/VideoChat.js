import React from "react";
import { hot } from "react-hot-loader/root";
import Lobby from "./Lobby";
import Room from "./Room";

const VideoChat = () => {
	const [username, setUsername] = React.useState("");
	const [roomName, setRoomName] = React.useState("");
	const [token, setToken] = React.useState(null);
	const handleUsernameChange = React.useCallback((event) => {
		setUsername(event.target.value);
	}, []);
	const handleRoomNameChange = React.useCallback((event) => {
		setRoomName(event.target.value);
	}, []);
	const handleSubmit = React.useCallback(
		async (event) => {
			event.preventDefault();
			const data = await fetch("http://192.168.1.103:3001/video/token", {
				method: "POST",
				body: JSON.stringify({
					identity: username,
					room: roomName
				}),
				headers: {
					"Content-Type": "application/json"
				}
			}).then((res) => res.json());
			setToken(data.token);
		},
		[username, roomName]
	);
	const handleLogout = React.useCallback((event) => {
		setToken(null);
	}, []);
	let render;
	if (token) {
		render = <Room roomName={roomName} token={token} handleLogout={handleLogout} />;
	} else {
		render = <Lobby username={username} roomName={roomName} handleUsernameChange={handleUsernameChange} handleRoomNameChange={handleRoomNameChange} handleSubmit={handleSubmit} />;
	}
	return render;
	// return <div>Hello</div>;
};

export default hot(VideoChat);
