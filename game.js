const values = [0, 1, 2, 3];

const board = Array(5).fill().map((el) => {
  return Array(5).fill().map((el) => values[Math.floor(4 * Math.random())]);
});