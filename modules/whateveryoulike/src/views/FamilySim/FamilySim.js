import React from "react";
import Amplify, { DataStore } from "aws-amplify";
import Lottie from "react-lottie";
import awsconfig from "../../aws-exports";
import { User } from "../../models";
import { CALL } from "../../utils/view";

const UserMenu = ({ setView }) => {
	return (
		<div>
			<div
				onClick={() => {
					setView(
						<div
							onClick={() => {
								setView(<FamilySim setView={setView} />);
							}}
						>
							Hello
						</div>
					);
				}}
			>
				Call
			</div>
			<div>Calander</div>
			<div>Message</div>
		</div>
	);
};

const UserComp = ({ setView }) => {
	const [show, setShow] = React.useState(false);
	return (
		<div>
			{show ? <UserMenu setView={setView} /> : null}
			<div
				onClick={() => {
					setShow(!show);
				}}
			>
				<Lottie options={{ loop: true, path: "https://assets9.lottiefiles.com/packages/lf20_lgxl1acg.json" }} height={200} width={200} />
			</div>
		</div>
	);
};

const FamilySim = ({ setView }) => {
	const [users, setUsers] = React.useState([]);
	async function getUsers() {
		Amplify.configure(awsconfig);
		const user = await DataStore.query(User);
		setUsers((oldArray) => [...oldArray, user]);
		console.log(users);
	}
	React.useEffect(() => {
		getUsers();
	}, []);
	return (
		<div className="lotties" style={{ display: "flex" }}>
			{users.map((user) => {
				return (
					<div>
						<UserComp setView={setView} />
					</div>
				);
			})}
		</div>
	);
};

export default FamilySim;
