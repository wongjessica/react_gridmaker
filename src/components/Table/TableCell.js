function TableCell({ ri, ci, color, handleApplyColor }) {
  const setColor = () => handleApplyColor(ri, ci);
  // onClick triggers event handler passed down
  // backgroundColor is the passed color prop
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
