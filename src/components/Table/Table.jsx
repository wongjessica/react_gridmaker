import React from "react";
import TableRow from "./TableRow";

const Table = ({ grid, handleApplyColor }) => {
  return (
    <table id="grid">
      <tbody>
        {grid.map((row, ri) => (
          // each row is associated with a row index and a row from grid is passed as a prop
          // color change event handler is passed down to apply on each cell
          <TableRow
            key={ri}
            row={row}
            ri={ri}
            handleApplyColor={handleApplyColor}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
