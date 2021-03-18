function TableCell({ ri, ci, color, handleApplyColor }) {
  const setColor = () => handleApplyColor(ri, ci);

  return (
    <td
      style={{
        backgroundColor: color
      }}
      onClick={setColor}
    ></td>
  );
}

export default TableCell;
