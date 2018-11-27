/*
Minimum Requirements
  -the first move always starts with player X
  -the app detects a win or tie and displays an appropriate message
  -a button resets the game for a new round of gameplay
  -It's a single page app, meaning once the page loads, no user-generated actions on the page may cause the entire page to reload.
    - One way this rule could be broken in your implementation is that you might consider resetting the game state by refreshing the page.
      This technique is not permitted for this exercise.
  -For the initial version of this game, you may only use native DOM methods to listen for events and update the DOM as gameplay progresses.
    This means: no jQuery, React or any other libraries or frameworks. All your code should live in one file, app.js, and all your HTML should live in index.html.
*/
// document.getElementById("x").addEventListener('click', function(event) {
//   console.log('You clicked x!');
// });

//Design ascii square, and repeat that square 9 times to create the tic-tac-toe board.
  //In each square, insert a div tag so we can add click event handlers later

// Default, 3 x 3 board, later you can design more complicated boards
// var makeSquarez = function(id) {
//   makeBorderz(id);
//   makeGridz(id);
//   document.getElementById(id).appendChild(document.createElement('br'));
//   makeBorderz(id);
//   // let rowz = document.createTextNode(accRow.join(''));
//   // let columnz = document.createTextNode(accColumn.join('\n'));
//   // let element = document.getElementById("test");
//   // element.appendChild(rowz);
//   // element.appendChild(columnz);
// };

// var makeBorderz = function(id) {
//   for (var i = 0; i <= 18; i++) {
//     let asciiz = document.createTextNode('#');
//     document.getElementById(id).appendChild(asciiz);
//   }
// };

// var makeGridz = function(id) {
//   for (var i = 0; i <= 8; i++) {
//     let asciiz = document.createTextNode('#~~~~~~~~~~~~~~~~#');
//     document.getElementById(id).appendChild(document.createElement('br'));
//     document.getElementById(id).appendChild(asciiz);
//   }
// };

// makeSquarez('A1');
// makeSquarez('B1');

document.getElementById('A1').addEventListener('click', function(event) {
  console.log('You clicked here!');
  let xPiece = document.createElement('img');
  xPiece.src = 'tic-tac-toe-X.png';
  xPiece.setAttribute('id', 'x');
  xPiece.setAttribute('alt', 'tic-tac-toe-X');
  xPiece.setAttribute('width', '100');
  xPiece.setAttribute('height', '100');
  document.getElementById('A1').appendChild(xPiece);
  //debugger;
});


