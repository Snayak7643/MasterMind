import { constraints } from "../constants";

export const generateN = (size: number, value: number) => {
  const array = Array(size).fill(value);
  return array;
};

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

export const check = (input: number[]) => {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === 7) {
      return false;
    }
  }
  return true;
};

export const generateAnswer = (size: number) => {
  const answer: number[] = [];
  for (var i = 0; i < size; i++) {
    const no = Math.floor((Math.random() * 101) % constraints.NO_OF_COLORS);
    answer.push(no);
  }
  console.log("answer:", answer);
  return answer;
};

export const getOutput = (input: number[], answer: number[]) => {
  let output: number[] = generateN(input.length, -1);
  let i: number = 0;
  const answerMap = new Map();
  for (i = 0; i < answer.length; i++) {
    let f: any = 0;
    if (answerMap.get(answer[i]) !== undefined) {
      f = answerMap.get(answer[i]);
    }
    answerMap.set(answer[i], f + 1);
  }
  i = 0;

  input.forEach((colorIndex) => {
    if (answerMap.has(colorIndex) && answerMap.get(colorIndex) > 0) {
      answerMap.set(colorIndex, answerMap.get(colorIndex) - 1);
      output[i] = 0;
      i++;
    }
  });
  i = 0;
  input.forEach((colorIndex, index) => {
    if (colorIndex === answer[index]) {
      output[i] = 1;
      i++;
    }
  });
  console.log(output);
  return output;
};