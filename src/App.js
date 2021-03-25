import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";

const App = () => {
  const [color, setColor] = useState("red"); //selected color state
  const [grid, setGrid] = useState([["white"]]); //grid state stores string values of colors

  // ADD ROW -------------------------
  const addRow = () => {
    setGrid(prevGrid => {
      if (prevGrid.length === 0) return [["white"]];

      //utilizing the previous grid state to append a new row with the same number of columns 
      const newGrid = prevGrid.map(row => [...row]);
      const newRow = prevGrid[0].map(row => "white");
      newGrid.push(newRow);
      return newGrid;
    });
  };
  // ADD COLUMN -------------------------
  const addCol = () => {
    setGrid(prevGrid => {
      if (prevGrid.length === 0) return [["white"]];
      //utilizing the previous grid state's rows and appending a new column with a value "white" to each 
      const newGrid = prevGrid.map(row => [...row, "white"]);
      return newGrid;
    });
  };

  // REMOVE ROW -------------------------
  const removeRow = () => {
    setGrid(prevGrid => {
      //empty grid if previous grid had a length <= 1
      if (prevGrid.length <= 1) return [];

      //utilizing the previous grid's state and popping the last element/row of the grid
      const newGrid = prevGrid.map(row => [...row]);
      newGrid.pop();
      return newGrid;
    });
  };
  // REMOVE COLUMN -------------------------
  const removeCol = () => {
    setGrid(prevGrid => {
      //empty grid if previous grid had a length <= 1 or columns had a length <= 1
      if (prevGrid.length <= 1 || prevGrid[0].length <= 1) return [];

      //construction of new grid using the previous grid state and popping the last cell of each row
      const newGrid = prevGrid.map(row => {
        const newRow = [...row];
        newRow.pop();
        return newRow;
      });
      return newGrid;
    });
  };

  // COLOR SELECTOR -----------------------
  const colorSelect = e => setColor(e.target.value);
  // SELECTOR -----------------------------
  const handleApplyColor = (r, c) => {
    setGrid(prevGrid =>
      prevGrid.map((row, ri) =>
        row.map((cellColor, ci) => {
          // modify the color of the cell to the selected color if cell equates to the event cell's row and column
          if (r === ri && c === ci) {
            return color;
          }
          // don't change the color if there is no match
          return cellColor;
        })
      )
    );
  };

  // FILL UNCOLORED ------------------------
  const uncoloredFill = () => {
    setGrid(prevGrid =>
      prevGrid.map((row, ri) =>
        row.map((cellColor, ci) => {
          // modify all cells that are white/uncolored
          if (cellColor === "white") {
            return color;
          }
          // don't modify the color if it's not white
          return cellColor;
        })
      )
    );
  };
  // FILL ALL ------------------------------
  const fill = () => {
      setGrid(prevGrid =>
      prevGrid.map((row, ri) =>
        // fill all cells with color state value
        row.map((cellColor, ci) => (color))
      )
    );
  };
  // CLEAR ALL -----------------------------
  const clearAll = () => {
    setGrid(prevGrid =>
      prevGrid.map((row, ri) =>
        row.map((cellColor, ci) => {
          // modify cell to store white if not white
          if (cellColor !== "white") {
            return "white";
          }
          // don't modify if already white
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
      {{/*passes grid state and color event handler to Table to map each row and cell of each row*/}}
      <Table grid={grid} handleApplyColor={handleApplyColor}></Table>
    </>
  );
};

export default App;
