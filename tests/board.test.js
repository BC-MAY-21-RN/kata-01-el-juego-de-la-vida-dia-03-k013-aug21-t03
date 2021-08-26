const Board = require("../src/board");
const Cell = require("../src/cell");

let firstGeneration = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "*", ".", ".", "."],
  [".", ".", ".", "*", "*", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
];

const matrix = () => {
  firstGeneration.forEach((row, x) => {
    row.forEach((col, y) => {
      firstGeneration[x][y] = new Cell(col);
    });
  });
};

describe("Cell", () => {
  test("Matrix size", () => {
    matrix();
    const board = new Board(firstGeneration);
    const boardRows = board.getMatrix().length;
    const boardCols = board.getMatrix()[0].length;
    expect(boardRows).toBe(4);
    expect(boardCols).toBe(8);
  });

  test("validate cell position", () => {
    matrix();
    const board = new Board(firstGeneration);
    let isValid = board.isValid(1, 5);
    let isNotValid = board.isValid(-1, 0);
    expect(isValid).toBe(true);
    expect(isNotValid).toBe(false);
  });

  test("get neighbours", () => {
    matrix();
    const board = new Board(firstGeneration);
    const row = 1;
    const col = 4;
    const expectedNeighbours = [
      [row - 1, col - 1],
      [row - 1, col],
      [row - 1, col + 1],
      [row, col - 1],
      [row, col + 1],
      [row + 1, col - 1],
      [row + 1, col],
      [row + 1, col + 1],
    ];
    expect(board.getNeighbours(row, col)).toStrictEqual(expectedNeighbours);
  });

  test("count neighbours", () => {
    matrix();
    const board = new Board(firstGeneration);
    expect(board.countLiveNeighbours(1, 4)).toBe(2);
  })
});
