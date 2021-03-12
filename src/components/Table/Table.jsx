import React from "react";
import TableRow from "./TableRow";

const Table = ({ numRows, numCols, handleApplyColor }) => {
  return (
    <table id="grid">
      {[...Array(numRows)].map((val, index) => (
        <TableRow
          key={index}
          numCols={numCols}
          handleApplyColor={handleApplyColor}
        />
      ))}
    </table>
  );
};

export default Table;
