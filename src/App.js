import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";

const App = () => {
  const [rows, setRow] = useState(1);
  const [cols, setCol] = useState(1);
  const [color, setColor] = useState("red");

  const addRow = () => {
    if (rows === 0) {
      setRow(1);
      setCol(1);
    } else {
      setRow(rows => rows + 1);
    }
  };
  const addCol = () => {
    if (cols === 0) {
      setRow(1);
      setCol(1);
    } else {
      setCol(cols => cols + 1);
    }
  };

  const removeRow = () => {
    if (rows === 0) return;
    if (rows === 1) {
      setRow(0);
      setCol(0);
    } else {
      setRow(rows => rows - 1);
    }
  };
  const removeCol = () => {
    if (cols === 0) return;
    if (cols === 1) {
      setCol(0);
      setRow(0);
    } else {
      setCol(cols => cols - 1);
    }
  };

  const colorSelect = e => setColor(e.target.value);
  const handleApplyColor = e => (e.target.style.backgroundColor = color);

  const uncoloredFill = () => {};
  const fill = () => {};
  const clearAll = () => {};

  return (
    <>
      <h1>Grid Maker Reactified</h1>
      {rows} {cols}
      <form>
        <select id="color_choose" onChange={colorSelect}>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="white">White</option>
          <option value="#cdcdcd">Gray</option>
          <option value="#F781F3">Pink</option>
          <option value="#2EFEF7">Toothpaste</option>
          <option value="#00FF00">Lime</option>
          <option value="#2E9AFE">Light Blue</option>
        </select>
      </form>
      <button onClick={addRow}>ADD ROW</button>
      <button onClick={addCol}>ADD COL</button>
      <button onClick={removeRow}>REMOVE ROW</button>
      <button onClick={removeCol}>REMOVE COL</button>
      <button onClick={uncoloredFill}>FILL UNCOLORED</button>
      <button onClick={fill}>FILL ALL</button>
      <button onClick={clearAll}>CLEAR ALL</button>
      <br />
      <Table numRows={rows} numCols={cols} handleApplyColor={handleApplyColor} />
    </>
  );
};

export default App;
