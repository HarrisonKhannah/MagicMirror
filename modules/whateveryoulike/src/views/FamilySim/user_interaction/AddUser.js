import React from "react";
import Amplify, { DataStore } from "aws-amplify";
import Lottie from "react-lottie";
import awsconfig from "../../../aws-exports";
import { User, Calander } from "../../../models";
import FamilySim from "../FamilySim";

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
		<div>
			<div>New user</div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					submit();
					setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />);
				}}
			>
				<label>
					Enter the user's name:
					<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				</label>
				<input type="submit" />
			</form>
		</div>
	);
};
