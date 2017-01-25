angular.module('tictactoe', [])

.factory('Board', () => {
  let createBoard = () => {
    return [
      [{val: ' '}, {val: ' '}, {val: ' '}],
      [{val: ' '}, {val: ' '}, {val: ' '}],
      [{val: ' '}, {val: ' '}, {val: ' '}]
    ]
  }
  return {
    createBoard,
  }
})

.controller('game', ($scope, Board) => {
  $scope.data = {};
  $scope.player = 'X';
  $scope.win = false;
  $scope.board = Board.createBoard();

  $scope.validSpace = (spot) => {
    return spot.val === ' ';
  }

  $scope.playerMove = (spot) => {
    if($scope.validSpace(spot)){
      spot.val = $scope.player;
      $scope.player = $scope.player === 'X' ? 'O' : 'X';
    }
  }

  $scope.boardReset = () => {
    $scope.board = Board.createBoard();
    $scope.player = 'X';
    $scope.win = false;
  }

})
