module.exports = class Board {
  constructor(firstGeneration) {
    this.firstGeneration = firstGeneration;
    this.rows = firstGeneration.length;
    this.cols = firstGeneration[0].length;
  }

  getMatrix() {
    return this.firstGeneration;
  }

  getNeighbours(row, col) {
    return [
      [row - 1, col - 1],
      [row - 1, col],
      [row - 1, col + 1],
      [row, col - 1],
      [row, col + 1],
      [row + 1, col - 1],
      [row + 1, col],
      [row + 1, col + 1],
    ];
  }

  isValid(row, col) {
    const rowIsValid = row >= 0 && row < this.rows;
    const colIsValid = col >= 0 && col < this.cols;

    return rowIsValid && colIsValid;
  }

  getCell(row, col) {
    return this.firstGeneration[row][col];
  }

  countLiveNeighbours(row, col) {
    const liveNeighbours = this.getNeighbours(row, col);
    let neighboursCounter = 0;
    liveNeighbours.forEach((coord) => {
      const [x, y] = coord;
      if (this.isValid(x, y) && this.getMatrix()[x][y].isAlive()) {
        neighboursCounter += 1;
      }
    });

    return neighboursCounter;
  }
};
