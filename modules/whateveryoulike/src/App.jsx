import { hot } from "react-hot-loader/root";
import React from "react";
import Amplify, { DataStore } from "aws-amplify";

import awsconfig from "./aws-exports";
import { Calander, Event, User } from "./models";
import "./App.css";
import VideoChat from "./video-chat/VideoChat";

async function test() {
  Amplify.configure(awsconfig);
  // await DataStore.clear();
  // let user = await DataStore.save(
  //   new User({
  //     uuid: "Harrison",
  //     name: "Harrison",
  //     happiness: 1020
  //   })
  // );
  // let cal = await DataStore.save(
  //   new Calander({
  //     uuid: "Found!",
  //     userID: user.id
  //   })
  // );

  const user = await DataStore.query(User);
  // console.log("USER H", user);
  const cal = (await DataStore.query(Calander)).filter((c) => c.userID === user[0].id);

  console.log("USER ", cal, user);
}

const App = () => {
  const [view, setView] = React.useState(1);
  React.useEffect(() => {
    test();
  });
  let center;

  // switch (view) {
  //   case 1:
  //     center = <FamilySims setView={setView} />;
  // }
  return <div className="App">{center}</div>;
};

export default hot(App);
