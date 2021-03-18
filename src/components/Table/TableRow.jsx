import TableCell from "./TableCell";

function TableRow({ row, ri, handleApplyColor }) {
  return (
    <tr>
      {row.map((color, ci) => (
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
