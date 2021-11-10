import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.css";
import FamilySim from "./views/FamilySim/FamilySim";
import { Notification } from "./views/FamilySim/Notification";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";
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
    // On load show FamilySim as the entry component
    test(<FamilySim setView={test} setRoom={setRoomTest} room={room} />);
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
        {/* Shown conditionally based on if there is an event on current date */}
        <Notification setView={setView} setRoom={setRoom} />
      </div>
    </ChakraProvider>
  );
};

export default hot(App);
