import React from "react";
import { hot } from "react-hot-loader/root";
import { EndedScreen } from "./Ended";
import Room from "./Room";

const VideoChat = ({ room, name, setView, setRoom, user }) => {
	const [username, setUsername] = React.useState(name);
	const [roomName, setRoomName] = React.useState(room);
	const [token, setToken] = React.useState(null);
	const handleSubmit = React.useCallback(
		async (event) => {
			const data = await fetch("http://localhost:3001/video/token", {
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
	React.useEffect(() => {
		handleSubmit();
	}, []);
	const handleLogout = React.useCallback((event) => {
		setView(<EndedScreen room={room} setView={setView} setRoom={setRoom} user={user} />);
		setToken(null);
	}, []);
	let render;
	if (token) {
		render = <Room roomName={roomName} token={token} handleLogout={handleLogout} />;
	} else {
		render = <div>An error has occured</div>;
	}
	return render;
};

export default hot(VideoChat);
