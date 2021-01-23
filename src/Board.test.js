// Square is a "default" export from Square.js, so we don't need
// curly braces around it like we do for render
import Square from './Square';
import Board from './Board';

test('should check buttons in the board', () => {
  const board = [['O', 'X', 'O'], [null, null, null], ['X', 'X', null]];
  const arr = board.queryAllByRole('board-row');
  print(arr);
});