import { hot } from "react-hot-loader/root";
import React, { useContext } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import Lottie from "react-lottie";
import test from "./lotties/test";
import test2 from "./lotties/test2";

import awsconfig from "./aws-exports";
import * as queries from "./graphql/queries";

import ModuleContext from "./contexts/module";

const App = () => {
  // const module = useContext(ModuleContext);
  // const [testV, setState] = React.useState();
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
      <div className="lotties">
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
          <Lottie options={defaultOptions} direction="2" height={400} width={400} />
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default hot(App);
