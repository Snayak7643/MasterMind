import { COLORS, constraints, MATCH, SELECTED_COLOR } from "../constants";

export const fillArrayWithGivenValue = (size: number, value: number) => {
  const array = Array(size).fill(value);
  return array;
};

export const fillArrayFromZeroToN = (size: number) => {
  const array: number[] = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
};

export const checkButtonVisibility = (input: number[]) => {
  if (
    input.findIndex((value: number) => {
      return value === SELECTED_COLOR.WHITE;
    }) !== -1
  ) {
    return false;
  }
  return true;
};

export const generateAnswer = (size: number) => {
  const answer: number[] = [];
  for (let i = 0; i < size; i++) {
    const no = Math.floor((Math.random() * 101) % constraints.NO_OF_COLORS);
    answer.push(no);
  }
  console.log("answer:", answer);
  return answer;
};

export const matchGuessWithAnswer = (input: number[], answer: number[]) => {
  let hints: number[] = fillArrayWithGivenValue(input.length, MATCH.NO);
  let i: number = 0;
  const frequencyOfColorMap = new Map();
  for (i = 0; i < answer.length; i++) {
    let f: any = 0;
    if (frequencyOfColorMap.get(answer[i]) !== undefined) {
      f = frequencyOfColorMap.get(answer[i]);
    }
    frequencyOfColorMap.set(answer[i], f + 1);
  }
  i = 0;

  input.forEach((colorIndex) => {
    if (
      frequencyOfColorMap.has(colorIndex) &&
      frequencyOfColorMap.get(colorIndex) > 0
    ) {
      frequencyOfColorMap.set(
        colorIndex,
        frequencyOfColorMap.get(colorIndex) - 1
      );
      hints[i] = MATCH.PARTIAL;
      i++;
    }
  });
  i = 0;
  input.forEach((colorIndex, index) => {
    if (colorIndex === answer[index]) {
      hints[i] = MATCH.FULL;
      i++;
    }
  });
  return hints;
};

export const checkWinnerOrOver = (output: number[], chance: number) => {
  let isWinner: boolean = true,
    isOver: boolean = false;
  output.forEach((element) => {
    if (element !== 1) {
      isWinner = false;
    }
  });
  if (isWinner !== true && chance === constraints.NO_OF_CHANCES - 1) {
    isOver = true;
  }
  return { isWinner, isOver };
};

export const fillMatrixWithStyleAndHints = (rows: number, columns: number) => {
  const matrix: { style: any[]; hint: number[] }[] = [];

  for (let i = 0; i < rows; i++) {
    const style: { backgroundColor: string }[] = [];
    const hint: number[] = [];
    for (let j = 0; j < columns; j++) {
      style.push({ backgroundColor: COLORS[SELECTED_COLOR.WHITE] });
      hint.push(MATCH.PARTIAL);
    }
    matrix.push({ style, hint });
  }

  return matrix;
};
