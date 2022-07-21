(function () {
    'use strict';

    angular
        .module("GameApp")
        .factory('$hangmanService', HangmanService);

    HangmanService.$inject = ['$http'];
    function HangmanService($http) {

        var service = {
            createHangmanGame: createHangmanGame,
            updateHangmanGame: updateHangmanGame
        };

        var apiPath = "https://hangman-api.herokuapp.com";

        return service;

        //Issue3: Updated method from Get to Post for CreateHangmanGame
        function createHangmanGame() {
            return $http.post(`${apiPath}/hangman`)
                .then(function (res) {
                    return res;
                }).catch(function (err) {
                    console.log(err);
                });
        }

        function updateHangmanGame(token, letter) {
            return $http.put(`${apiPath}/hangman`,
                {
                    token: token,
                    letter: letter
                }
            )
                .then(function (res) {
                    return res;
                }).catch(function (err) {
                    console.log(err);
                });
        }
    }
})();