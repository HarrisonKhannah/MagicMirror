import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.css";
import FamilySim, { MirrorComp } from "./views/FamilySim/FamilySim";
import { Notification } from "./views/FamilySim/Notification";
import VideoChat from "./video-chat/VideoChat";
const App = () => {
  const [view, setView] = React.useState();
  const [room, setRoom] = React.useState(null);
  const test = (v) => {
    setView(v);
  };

  const setRoomTest = (v) => {
    setRoom(v);
  };
  React.useEffect(() => {
    test(<FamilySim setView={test} setRoom={setRoomTest} room={room} />);
  }, []);
  return (
    <div className="App">
      <div style={{ marginBottom: "100px", width: "80vw", height: "100%" }}>
        <VideoChat name="hello" room="hello" setRoom={setRoomTest} setView={test} />
      </div>
      <div
        style={{
          position: "absolute",
          left: "100%",
          bottom: "40%"
        }}
      >
        <MirrorComp setView={setView} user={"MIRROR"} setRoom={setRoom} room={room} />
      </div>

      {/* <Notification setView={setView} setRoom={setRoom} /> */}
    </div>
  );
};

export default hot(App);
