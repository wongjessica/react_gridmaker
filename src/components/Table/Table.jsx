import React from "react";
import TableRow from "./TableRow";

const Table = ({ grid, handleApplyColor }) => {
  return (
    <table id="grid">
      <tbody>
        {grid.map((row, ri) => (
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
