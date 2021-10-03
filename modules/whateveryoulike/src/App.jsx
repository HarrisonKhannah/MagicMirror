import { hot } from "react-hot-loader/root";
import React from "react";
import Amplify, { DataStore } from "aws-amplify";
import Lottie from "react-lottie";

import awsconfig from "./aws-exports";
import { Calander, Event } from "./models";
import "./App.css";
import VideoChat from "./video-chat/VideoChat";

const App = () => {
  return (
    <div className="App">
      <div className="lotties" style={{ display: "flex" }}>
        <div>
          <div
            onClick={() => {
              console.log("hello");
            }}
          >
            <Lottie options={{ loop: true, path: "https://assets9.lottiefiles.com/packages/lf20_lgxl1acg.json" }} height={200} width={200} />
          </div>
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
};

export default hot(App);
