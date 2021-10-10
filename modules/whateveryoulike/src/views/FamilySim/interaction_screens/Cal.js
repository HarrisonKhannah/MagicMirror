import React from "react";
import Amplify, { DataStore } from "aws-amplify";
import Lottie from "react-lottie";
import awsconfig from "../../../aws-exports";
import { Calander, Event } from "../../../models";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import VideoChat from "../../../video-chat/VideoChat";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

function formatDate(date) {
	var d = new Date(date),
		month = "" + (d.getMonth() + 1),
		day = "" + d.getDate(),
		year = d.getFullYear(),
		time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
	d.setHours;
	if (month.length < 2) month = "0" + month;
	if (day.length < 2) day = "0" + day;

	return [year, month, day].join("-") + " at " + time;
}

const Cal = ({ setView, user, setRoom, room }) => {
	console.log(user);
	const [e, setE] = React.useState([]);
	const [calEvent, addCallEvent] = React.useState(<> </>);
	async function getCal() {
		if (user != "MIRROR") {
			const cal = (await DataStore.query(Calander)).filter((c) => c.userID === user.id);
			const eventsS = (await DataStore.query(Event)).filter((e) => e.calanderID === cal[0].id);
			setE(eventsS);
		} else {
			const eventsS = await DataStore.query(Event);
			setE(eventsS);
		}
	}

	const AddCal = ({ e, user }) => {
		const [date, setDate] = React.useState(e.date);
		return (
			<div style={{ color: "white" }}>
				<p>
					Add {formatDate(date)} with {user[0].name}?
				</p>
				<input
					type="time"
					step="1"
					value={e.date.getTime()}
					className="form-control"
					placeholder="Time"
					onChange={(ev) => {
						let t = ev.target.value.split(":");
						let v = new Date(date);
						v.setHours(t[0]);
						v.setMinutes(t[1]);
						v.setSeconds(t[2]);
						setDate(v);
					}}
				/>
				<button
					onClick={async () => {
						const cal = (await DataStore.query(Calander)).filter((c) => c.userID === user[0].id);
						await DataStore.save(
							new Event({
								name: `Meeting with Mirror and ${user[0].name}`,
								room: "2",
								time: date.toISOString(),
								calanderID: cal[0].id
							})
						);
						getCal();
						addCallEvent(<> </>);
					}}
				>
					Confirm
				</button>
			</div>
		);
	};

	React.useEffect(() => {
		getCal();
	}, []);

	return (
		<>
			<div>{calEvent}</div>
			<div style={{ backgroundColor: "white", height: "70vh", padding: "10px", borderRadius: "10px" }}>
				<FullCalendar
					height={"90%"}
					plugins={[dayGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					weekends={true}
					events={e.map((event) => {
						return {
							title: event.name,
							date: event.time,
							id: event.room
						};
					})}
					dateClick={(e) => {
						if (user != "MIRROR") {
							addCallEvent(<AddCal e={e} user={user} />);
						}
					}}
					eventClick={(e) => {
						setView(
							<div>
								<VideoChat name={e.event.title} room={e.event.id} setRoom={setRoom} setView={setView} />
							</div>
						);
					}}
				/>
			</div>
		</>
	);
};
export default Cal;
