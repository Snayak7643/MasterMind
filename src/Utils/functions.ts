export const generateOneToN = (size: number) => {
  const array: number[] = [];
  for (var i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
};

export const generateStyles = (rows: number, columns: number) => {
  const styles: { backgroundColor: string }[][] = [];

  for (var i = 0; i < rows; i++) {
    const style: { backgroundColor: string }[] = [];
    for (var j = 0; j < columns; j++) {
      style.push({ backgroundColor: "white" });
    }
    styles.push(style);
  }

  return styles;
};

export const generateOutput = (
  rows: number,
  columns: number,
  value: number
) => {
  const output: number[][] = [];
  for (var i = 0; i < rows; i++) {
    const output_row: number[] = [];
    for (var j = 0; j < columns; j++) {
      output_row.push(value);
    }
    output.push(output_row);
  }
  return output;
};
