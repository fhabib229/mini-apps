const boardState = {
  active: 'X',
  turnCounter: 0,
  O: {
    className: 'playerO',
    classNames: {}
  },
  X: {
    className: 'playerX',
    classNames: {}
  }
};


const turnDisplayHighlight = (className) => {
  let currentPlayer = document.getElementsByClassName(className);
  currentPlayer[0].setAttribute(
    'style',
    'color: orange; display: inline;'
  );
};

const turnDisplayCancel = (className) => {
  let currentPlayer = document.getElementsByClassName(className);
  currentPlayer[0].setAttribute('style', 'display: inline; margin: 5em;');
};

const changePlayerTurn = (currentPlayer) => {
  if (currentPlayer === 'X') {
    boardState.active = 'O';
  } else if (currentPlayer === 'O') {
    boardState.active = 'X';
  }
  const nextPlayer = boardState.active;
  turnDisplayHighlight(boardState[nextPlayer].className);
  turnDisplayCancel(boardState[currentPlayer].className);
  changeMessage(nextPlayer);
};

const changeMessage = (string) => {
  const message = document.getElementsByClassName('messages');
  if (string.length === 1) {
    message[0].innerHTML = `Player ${string}'s turn`;
  } else if (string === 'Piece Exists') {
    message[0].innerHTML = `A piece already exists on this spot.`;
  } else {
    message[0].innerHTML = string;
  }
};

const placePiece = (eventObj) => {
  const boardTileSelector = eventObj.target.className;
  const boardTile = document.getElementsByClassName(boardTileSelector);
  const openTile = boardTile[0].innerHTML.length === 0;
  if (openTile) {
    boardState.turnCounter++;
    const piece = boardState.active;
    boardTile[0].innerHTML = piece;
    manageState(boardTile[0].classList, piece);
    changePlayerTurn(piece);
    winCalculator();
  } else {
    changeMessage('Piece Exists');
  }
};

const manageState = (array, piece) => {
  array.forEach(className => {
    const obj = boardState[piece].classNames;
    if (obj[className]) {
      obj[className]++;
    } else {
      obj[className] = 1;
    }
  });
};

const winCalculator = () => {
  let hasWinner = false;
  for (let key in boardState) {
    for (let position in boardState[key].classNames) {
      if (boardState[key].classNames[position] === 3) {
        hasAWinner = true;
        handleWinner(key);
      }
    }
  }
  if (!hasWinner && boardState.turnCounter === 9) {
    handleWinner('Tie');
  }
};

const handleWinner = (winner) => {
  turnDisplayCancel(boardState.O.className);
  turnDisplayCancel(boardState.X.className);

  const board = document.getElementById('board');
  board.removeEventListener('click', placePiece);

  if (winner === 'Tie') {
    changeMessage('Tie Game!');
  } else {
    changeMessage(`Player ${winner} wins!`);
  }

  createButton();
};

const refreshBoard = () => {
  let tiles = document.getElementsByTagName('td');
  Array.prototype.forEach.call(tiles, boardTile => {
    if (boardTile.innerHTML.length) {
      boardTile.innerHTML = '';
    }
  });
  init();
};

const createButton = () => {
  const btn = document.createElement('button');
  btn.innerHTML = 'Restart Game';
  const refreshBtn = document.getElementsByClassName('refresh')[0];
  refreshBtn.appendChild(btn);

  const refresh = document.getElementById('refresh');
  refresh.addEventListener('click', refreshBoard);
};


const init = () => {
  const refreshBtn = document.getElementsByTagName('button')[0];
  if (refreshBtn) {
    refreshBtn.remove();
  }

  boardState.turnCounter = 0;
  boardState.active = 'X';
  boardState.X.classNames = {};
  boardState.O.classNames = {};

  const board = document.getElementById('board');
  board.addEventListener('click', placePiece);
  turnDisplayHighlight(boardState.X.className);
  changeMessage(boardState.active);
};

init();