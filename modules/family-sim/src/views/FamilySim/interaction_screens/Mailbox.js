import React from "react";
import FamilySim from "../FamilySim";
import { Box, Flex, Image, Text, IconButton, Divider } from "@chakra-ui/react";
import msgClosed from "../../../assets/email_1.png";
import msgOpen from "../../../assets/envelope_1.png";
import { CloseIcon } from "@chakra-ui/icons";
let msgs = `[
	{ "id": "1f0098b6-4f43-484a-bffd-7532bc40754c", "from": "Harold", "read": false, "msg": "Hello", "userID": null, "_version": 1, "_lastChangedAt": 1634115183802, "_deleted": null },
	{ "id": "32f251f4-7079-4ed8-b196-617e6b1d123e", "from": "Harold", "read": false, "msg": "aaaa", "userID": "9fb5183d-8455-4aad-a3f5-f8d7dd25356e", "_version": 1, "_lastChangedAt": 1634115296158, "_deleted": null },
	{ "id": "c642caf1-40b8-49d7-a904-d32673166d6c", "from": "Lily", "read": false, "msg": "Hello", "userID": null, "_version": 1, "_lastChangedAt": 1634115262906, "_deleted": null },
	{ "id": "23bfb894-93b8-40d8-bf93-b892eac33c36", "from": "Harold", "read": false, "msg": "Hello", "userID": null, "_version": 1, "_lastChangedAt": 1634109766123, "_deleted": null },
	{ "id": "1d5d9548-e9b2-4e1b-90e7-b4445f69c6ac", "from": "Harold", "read": false, "msg": "I miss you!", "userID": null, "_version": 1, "_lastChangedAt": 1634700528116, "_deleted": null },
	{ "id": "91313630-bd8d-469b-a692-2da35dfa5aab", "from": "Lily", "read": false, "msg": "We should chat", "userID": null, "_version": 1, "_lastChangedAt": 1634700528432, "_deleted": null },
	{ "id": "86edf227-7a60-4ad7-8f1a-4db9ba0098c7", "from": "Phil", "read": true, "msg": "Hey there!", "userID": null, "_version": 1, "_lastChangedAt": 1634700528840, "_deleted": null }
	
]`;

export const Mailbox = ({ setView, user, setRoom, room }) => {
	let [msg, setMsg] = React.useState(JSON.parse(msgs));
	return (
		<Box>
			<IconButton position="relative" left="40vw" top="2vh" colorScheme="red" size="sm" aria-label="Search database" icon={<CloseIcon />} onClick={() => setView(<FamilySim setView={setView} setRoom={setRoom} room={room} />)} />

			<Flex h={"70vh"} p={100} flexDirection={"column"} background="gray.800" alignItems="start" borderRadius={10}>
				<Text fontWeight="bold" fontSize="2xl">
					My Mailbox
				</Text>
				<Flex marginTop={5} borderRadius="10" shadow alignItems="center" p={2} background="gray.900" w="100%" h="100%" justifyContent="center" direction="column">
					{msg.map((m, i) => {
						return (
							<Box
								h="100%"
								w="100%"
								onClick={() => {
									let mutate = msg;
									mutate[i].read = true;
									setMsg([...mutate]);
								}}
							>
								<Flex alignItems="center" h="100%" w="100%">
									<Box w="10%" h="100%" marginRight="10px">
										<Image w="50%" src={m.read ? msgOpen : msgClosed} />
									</Box>
									<Text>
										{m.msg} from: {m.from}
									</Text>
								</Flex>
								<Divider />
							</Box>
						);
					})}
				</Flex>
			</Flex>
		</Box>
	);
};
