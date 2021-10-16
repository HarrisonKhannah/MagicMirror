import React from "react";
import { hot } from "react-hot-loader/root";
import Lobby from "./Lobby";
import Room from "./Room";
import FamilySim from "../views/FamilySim/FamilySim";
const VideoChat = ({ room, name, setView, setRoom }) => {
	const [username, setUsername] = React.useState(name);
	const [roomName, setRoomName] = React.useState(room);
	const [token, setToken] = React.useState(null);
	const handleUsernameChange = React.useCallback((event) => {
		setUsername(event.target.value);
	}, []);
	const handleRoomNameChange = React.useCallback((event) => {
		setRoomName(event.target.value);
	}, []);
	const handleSubmit = React.useCallback(
		async (event) => {
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
		setView(<h1>Call ended</h1>);

		setTimeout(() => {}, [1000]);
		setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />);
	}, []);

	React.useEffect(() => {
		handleSubmit();
	}, []);

	let render;
	if (token) {
		render = <Room roomName={roomName} token={token} handleLogout={handleLogout} />;
	} else {
		render = <Lobby username={username} roomName={roomName} handleUsernameChange={handleUsernameChange} handleRoomNameChange={handleRoomNameChange} handleSubmit={handleSubmit} />;
	}
	return render;
};

export default hot(VideoChat);
