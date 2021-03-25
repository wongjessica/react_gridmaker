import TableCell from "./TableCell";

function TableRow({ row, ri, handleApplyColor }) {
  return (
    <tr>
      {row.map((color, ci) => (
        // each cell is associated with a row index, column index, and stored color
        // color change event handler is passed down to apply on each TableCell
        <TableCell
          key={ci}
          ri={ri}
          ci={ci}
          color={color}
          handleApplyColor={handleApplyColor}
        />
      ))}
    </tr>
  );
}

export default TableRow;
