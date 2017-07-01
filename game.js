const values = [0, 1, 2, 3];

const board = Array(5).fill().map((el) => {
  return Array(5).fill().map((el) => values[Math.floor(4 * Math.random())]);
});

let score = 0;
const scoreSpan = document.querySelector('.score');

const rows = document.querySelectorAll('.grid .row');
rows.forEach((row, x) => {
  const cards = row.querySelectorAll('.card');
  cards.forEach((card, y) => {
    const value = board[x][y];
    card.querySelector('.back').innerHTML = value;
    card.querySelector('.front').addEventListener('click', (e) => {
      card.classList.add('flipped');
      if (score === 0) {
        score += value;
      } else {
        score *= value;
      }
      scoreSpan.innerHTML = score;
    });
  });
});
