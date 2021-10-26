import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.css";
import FamilySim, { MirrorComp } from "./views/FamilySim/FamilySim";
import { Notification } from "./views/FamilySim/Notification";
import VideoChat from "./video-chat/VideoChat";
import Lobby from "./video-chat/Lobby";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";
import { EndedScreen } from "./video-chat/Ended";
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
    test(<VideoChat room="room" name={Math.random().toString()} setView={setView} setRoom={setRoom} />);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <div style={{ marginBottom: "100px", width: "80vw", height: "100%" }}>{view}</div>
        <div
          style={{
            position: "absolute",
            left: "100%",
            bottom: "4%"
          }}
        ></div>

        <Notification setView={setView} setRoom={setRoom} />
      </div>
    </ChakraProvider>
  );
};

export default hot(App);
