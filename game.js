function generateBoardValues() {
  const values = [0, 1, 2, 3];
  return Array(5).fill().map((el) => {
    return Array(5).fill().map((el) => values[Math.floor(4 * Math.random())]);
  });
}

function generateBoard() {
  let score = 0;
  const scoreSpan = document.querySelector('.score');
  const resultOverlay = document.querySelector('.result-overlay');
  resultOverlay.classList.add('hidden');

  const flippedCards = document.querySelectorAll('.card.flipped');
  flippedCards.forEach((card) => card.classList.remove('flipped'));

  const boardValues = generateBoardValues();
  const boardTotals = Array(10);

  boardValues.forEach((row, i) => {
    boardTotals[i] = [
      row.reduce((sum, value) => sum + value, 0),
      row.filter((value) => !value).length
    ];
  });

  const rows = document.querySelectorAll('.grid .row');
  rows.forEach((row, x) => {
    const cards = row.querySelectorAll('.card');
    cards.forEach((card, y) => {
      const value = boardValues[x][y];
      card.querySelector('.back').innerHTML = value;
      card.querySelector('.front').addEventListener('click', (e) => {
        card.classList.add('flipped');
        if (value == 0) {
          score == 0;
          resultOverlay.classList.remove('hidden');
        } else {
          if (score === 0) {
            score += value;
          } else {
            score *= value;
          }
        }
        scoreSpan.innerHTML = score;
      });
    });
  });
}

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', generateBoard);
generateBoard();
