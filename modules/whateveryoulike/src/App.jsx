import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.css";
import FamilySim from "./views/FamilySim/FamilySim";
import { FAMILY, cALL } from "./utils/view";

const App = () => {
  const [view, setView] = React.useState();
  const test = (v) => {
    setView(v);
  };
  React.useEffect(() => {
    test(<FamilySim setView={test} />);
  }, []);
  return <div className="App">{view}</div>;
};

export default hot(App);
