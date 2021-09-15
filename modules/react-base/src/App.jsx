import { hot } from "react-hot-loader/root";
import React, { useContext } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import Lottie from "react-lottie";
import test from "./lotties/test";
import test2 from "./lotties/test2";

import awsconfig from "./aws-exports";
import * as queries from "./graphql/queries";

import ModuleContext from "./contexts/module";

import "./App.css";
import VideoChat from "./video-chat/VideoChat";

const App = () => {
  const module = useContext(ModuleContext);
  const [testV, setState] = React.useState();
  // const test = () => {
  //   Amplify.configure(awsconfig);
  //   setTimeout(() => {
  //     const allTodos = API.graphql({ query: queries.listTodos }).then((val) => {
  //       setState(val.data.listTodos.items[0].id);
  //     });
  //   }, 2000);
  // };
  // result: { "data": { "listTodos": { "items": [/* ..... */] } } }
  // };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(test2),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="App">
      <div className="lotties" style={{ display: "flex" }}>
        <div>
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
  //     <header>
  //       <h1>Video Chat with Hooks</h1>
  //     </header>
  //     <main>
  //       <VideoChat />
  //     </main>
  //     <footer>
  //       <p>
  //         Made with{" "}
  //         <span role="img" aria-label="React">
  //           ⚛
  //         </span>{" "}
  //         by <a href="https://twitter.com/philnash">philnash</a>
  //       </p>
  //     </footer>
  //   </div>
  // );
};

export default hot(App);
