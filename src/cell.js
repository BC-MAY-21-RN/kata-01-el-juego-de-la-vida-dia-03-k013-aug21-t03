module.exports = class Cell {
  states = {
    LIVE: "*",
    DEAD: ".",
  };

  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  kill() {
    this.setState(this.states.DEAD);
  }

  newLife() {
    this.setState(this.states.LIVE);
  }

  isAlive() {
    return this.state === this.states.LIVE;
  }

  setState(state) {
    this.state = state;
  }
};
