import React from "react";
import Amplify, { DataStore } from "aws-amplify";

import awsconfig from "../../aws-exports";
import { Event, User } from "../../models";
import FamilySim from "./FamilySim";
import { AddUser } from "./user_interaction/AddUser";

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
		<div>
			<div
				onClick={() => {
					setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />);
				}}
			>
				X
			</div>
			<div>Settings</div>

			<div> Neighbourhood</div>
			{users.map((user) => {
				return <div>{user.name}</div>;
			})}
			<br />
			<div
				onClick={() => {
					setView(<AddUser setView={setView} setRoom={setRoom} room={room} />);
				}}
			>
				Add User
			</div>
		</div>
	);
};
