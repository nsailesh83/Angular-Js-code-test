(function () {
    "use strict";

    var app = angular.module('GameApp', []);

    app.controller('GameController', GameController);

    GameController.$inject = ['$scope', '$hangmanService'];
    function GameController($scope, $hangmanService) {
        var vm = this;

        // Issue1 : commented the below code as vm.startGame is initialized ,this need to loaded on demand i.e on click of Start and hence not required
        //vm.startGame = _startGame();


        initialize();

        function initialize() {
            vm.$scope = $scope;
            vm.$hangmanService = $hangmanService;
            vm.isGameComplete = false;
        }

        //Issue2 : //hangman is property of data i.e added as part of gamedata
        vm.startGame = function _startGame() {
            $hangmanService.createHangmanGame().then(function (gameData) {
                vm.game = gameData.data; //hangman is property of data i.e corrected
                vm.token = gameData.data.token;
            });
        }

        vm.guessLetter = function () {
            $hangmanService.updateHangmanGame(vm.token, vm.letter).then(function (gameData) {
                vm.game = gameData.data; 
            }); }

        //function _resetGame() { }

        //function _guessLetter() { }

        //function _showSolution() { }
    };
})();