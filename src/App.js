import React, { useEffect, Fragment } from "react";
import SerachBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <SerachBar />
      <div className="container">
        <AddBtn />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
