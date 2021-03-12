import React from "react";
import "./App.css";
import Controls from "./components/Controls";
import Table from "./components/Table";

const App = () => {
  return (
    <>
      <h1>Grid Maker Reactified</h1>
      <Controls />
      <br />
      <Table />
    </>
  );
};

export default App;
