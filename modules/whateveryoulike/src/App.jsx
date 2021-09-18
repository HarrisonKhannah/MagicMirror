import { hot } from "react-hot-loader/root";
import React from "react";
import Amplify, { DataStore } from "aws-amplify";
import Lottie from "react-lottie";

import awsconfig from "./aws-exports";
import { Calander, Event } from "./models";
import "./App.css";
import VideoChat from "./video-chat/VideoChat";

const App = () => {
  const [testV, setState] = React.useState([]);
  const [test, setT] = React.useState(false);
  const [room, setRoom] = React.useState(null);
  Amplify.configure(awsconfig);
  async function onQuery() {
    try {
      // await Amplify.DataStore.clear();

      // const cal = await DataStore.save(
      //   new Calander({
      //     uuid: "Harrison's Test Calander"
      //   })
      // );

      // await DataStore.save(
      //   new Event({
      //     name: "Event 1",
      //     room: "1",Yeah
      //     time: "1970-01-01T12:30:23.999Z",
      //     calanderID: cal.id
      //   })
      // );
      // await DataStore.save(
      //   new Event({
      //     name: "Event 2",
      //     room: "2",
      //     time: "1970-01-01T12:30:23.999Z",
      //     calanderID: cal.id
      //   })
      // );
      // await DataStore.save(
      //   new Event({
      //     name: "Event 3",
      //     room: "3",
      //     time: "1970-01-01T12:30:23.999Z",
      //     calanderID: cal.id
      //   })
      // );
      const models = await DataStore.query(Calander, (c) => c.uuid("eq", "Harrison's Test Calander"));
      const event = (await DataStore.query(Event)).filter((c) => c.calanderID === models[0].id);
      setState(event);
      console.log(event);
    } catch (error) {
      console.log("Error saving post", error);
    }
  }
  React.useEffect(() => {
    onQuery();
  }, []);
  return (
    <div className="App">
      <div className="lotties" style={{ display: "flex" }}>
        <div>
          {testV.map((v, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setRoom({
                    name: v.name,
                    room: v.room
                  });
                  setT(true);
                }}
              >
                {v.name}
              </div>
            );
          })}
          {test ? <VideoChat name={room.name.toString()} room={room.room} /> : <></>}
          <Lottie options={{ loop: true, path: "https://assets9.lottiefiles.com/packages/lf20_lgxl1acg.json" }} height={200} width={200} />
        </div>
        <div>
          <Lottie options={{ loop: true, path: "https://assets9.lottiefiles.com/packages/lf20_lgxl1acg.json" }} height={200} width={200} />
        </div>
        <div>
          <Lottie options={{ loop: true, path: "https://assets9.lottiefiles.com/packages/lf20_lgxl1acg.json" }} height={200} width={200} />
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="app">
  //     <main>
  //       <VideoChat />
  //     </main>
  //   </div>
  // );
};

export default hot(App);
