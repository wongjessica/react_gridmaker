import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";

const App = () => {
  const [color, setColor] = useState("red");
  const [grid, setGrid] = useState([["white"]]);

  const addRow = () => {
    setGrid(prevGrid => {
      if (prevGrid.length === 0) return [["white"]];
      const newGrid = prevGrid.map(row => [...row]);
      const newRow = prevGrid[0].map(row => "white");
      newGrid.push(newRow);
      return newGrid;
    });
  };
  const addCol = () => {
    setGrid(prevGrid => {
      if (prevGrid.length === 0) return [["white"]];
      const newGrid = prevGrid.map(row => [...row, "white"]);
      return newGrid;
    });
  };

  const removeRow = () => {
    setGrid(prevGrid => {
      if (prevGrid.length <= 1) return [];
      const newGrid = prevGrid.map(row => [...row]);
      newGrid.pop();
      return newGrid;
    });
  };
  const removeCol = () => {
    setGrid(prevGrid => {
      if (prevGrid.length <= 1 || prevGrid[0].length <= 1) return [];
      const newGrid = prevGrid.map(row => {
        const newRow = [...row];
        newRow.pop();
        return newRow;
      });
      return newGrid;
    });
  };

  const colorSelect = e => setColor(e.target.value);
  const handleApplyColor = (r, c) => {
    setGrid(prevGrid =>
      prevGrid.map((row, ri) =>
        row.map((cellColor, ci) => {
          if (r === ri && c === ci) {
            return color;
          }
          return cellColor;
        })
      )
    );
  };

  const uncoloredFill = () => {};
  const fill = () => {
      setGrid(prevGrid =>
      prevGrid.map((row, ri) =>
        row.map((cellColor, ci) => (color))
      )
    );
  };
  const clearAll = () => {
    setGrid(prevGrid =>
      prevGrid.map((row, ri) =>
        row.map((cellColor, ci) => {
          if (cellColor !== "white") {
            return "white";
          }
          return cellColor;
        })
      )
    );
  };

  return (
    <>
      <h1>Grid Maker Reactified</h1>
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
      <Table grid={grid} handleApplyColor={handleApplyColor}></Table>
    </>
  );
};

export default App;
