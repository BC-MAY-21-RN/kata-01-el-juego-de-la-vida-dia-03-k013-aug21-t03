const Cell = require("../src/cell");

describe("Cell", () => {
  test("new cell deade instance", () => {
    const cell = new Cell(".");
    expect(cell.getState()).toBe(".");
  });

  test("kill a cell", () => {
    const cell = new Cell("*");
    cell.kill();
    expect(cell.getState()).toBe(".");
  });

  test("New Life a cell", () => {
    const cell = new Cell(".");
    cell.newLife();
    expect(cell.getState()).toBe("*");
  });
  
  test("is cell alive", () => {
    const cell = new Cell("*");
    expect(cell.isAlive()).toBe(true);
  })

  test("is cell dead", () => {
    const cell = new Cell(".");
    expect(cell.isAlive()).toBe(false);
  })
});
