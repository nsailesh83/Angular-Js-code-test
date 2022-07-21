# Angular-Js-code-test
Angular js code test 


Please find the below changes made with respect to existing Application

GameController.js - > Scripts\app\modules\game\controllers
****
Change 1:

 // Issue1 : commented the below code as vm.startGame is initialized ,this need to loaded on demand i.e on click of Start and hence  below code is not required
 //vm.startGame = _startGame();
 
 Change 2:
  //Issue2 : //hangman is property of data hence updated the code accordingly
        vm.startGame = function _startGame() {
            $hangmanService.createHangmanGame().then(function (gameData) {
                vm.game = gameData.data; //hangman is property of data
                vm.token = gameData.data.token;
            });
     }
     
  hangman.service.js -> Scripts\app\services\hangman.service.js
     
  Change 3:
  
   //Issue3: Updated method from Get to Post for CreateHangmanGame
   function createHangmanGame() {
            return $http.post(`${apiPath}/hangman`)
                .then(function (res) {
                    return res;
                }).catch(function (err) {
                    console.log(err);
                });
     }
     
     Change 4:
     //Issue 4 : Added controller and service as part of Bundle
       bundles.Add(new ScriptBundle("~/bundles/angularapp")
                .Include("~/Scripts/app/modules/game/controllers/game.controller.js")
                .Include("~/Scripts/app/services/hangman.service.js"));
                
                
     Other observation which can also be done
     
     Sanitize Input text box by using $ngSanitize to avoid XSS
  
