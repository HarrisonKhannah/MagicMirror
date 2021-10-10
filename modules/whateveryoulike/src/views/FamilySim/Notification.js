import React from "react";
import Amplify, { DataStore } from "aws-amplify";

import awsconfig from "../../aws-exports";
import { Event } from "../../models";
import VideoChat from "../../video-chat/VideoChat";

export const Notification = ({ setView, setRoom }) => {
	const [show, setShow] = React.useState("1");
	const [events, setEvents] = React.useState([]);

	async function checkEvents() {
		Amplify.configure(awsconfig);

		const eventsS = await (await DataStore.query(Event)).filter((e) => new Date(e.time).toDateString() === new Date().toDateString());
		setEvents(eventsS);
	}

	React.useEffect(() => {
		checkEvents();
	}, []);

	setTimeout(() => {
		checkEvents();
	}, 30000);
	return (
		<div style={{ position: "absolute", left: "25%", bottom: "50vh" }}>
			{events.map((e) => {
				if (events.length == 0) {
					setShow("0");
				}
				return (
					<div
						style={{
							zIndex: "100",
							color: "black",
							width: "40vw",
							height: "10vw",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							background: "white",
							borderRadius: "10px",
							opacity: show
						}}
					>
						<p>
							{e.name} at {new Date(e.time).toTimeString()}
						</p>
						<button
							onClick={() => {
								setShow("0");
								setView(
									<div>
										<VideoChat name={e.name} room={e.room} setRoom={setRoom} setView={setView} />
									</div>
								);
							}}
						>
							Join
						</button>
					</div>
				);
			})}
			<button onClick={() => setShow("0")} style={{ opacity: show }}>
				{" "}
				Dismiss all{" "}
			</button>
		</div>
	);
};
