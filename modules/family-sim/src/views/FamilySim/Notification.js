import React from "react";
import Amplify, { DataStore } from "aws-amplify";

import awsconfig from "../../aws-exports";
import { Event } from "../../models";
import VideoChat from "../../video-chat/VideoChat";
import { Alert, AlertDescription, AlertTitle, Box, Button, CloseButton, Flex, Text } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

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
		<div style={{ position: "absolute", left: "25vw", bottom: "40vh" }}>
			{events.map((e) => {
				if (events.length == 0) {
					setShow("0");
				}
				return (
					<>
						<Alert borderRadius={10} p={10} display={show ? "block" : "none"} status="info" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="200px">
							<BellIcon boxSize="40px" mr={0} />
							<AlertTitle mt={4} mb={1} fontSize="lg">
								{e.name}
							</AlertTitle>
							<AlertDescription fontSize="sm" maxWidth="sm">
								{new Date(e.time).toTimeString()}
							</AlertDescription>
							<CloseButton
								position="absolute"
								right="8px"
								top="8px"
								onClick={() => {
									setShow(0);
								}}
							/>
							<Button
								marginRight={1}
								w={"50%"}
								marginTop={5}
								variant="outline"
								onClick={() => {
									setShow("0");
									setView(
										<div>
											<VideoChat
												name={e.name}
												room={e.room}
												setRoom={setRoom}
												setView={setView}
												user={{
													name: "Notification"
												}}
											/>
										</div>
									);
								}}
							>
								Join
							</Button>
						</Alert>
					</>
				);
			})}
		</div>
	);
};
