(function() {
  angular.module('intro') // getter syntax
    .controller('MainController', MainController);

  MainController.$inject = ['$scope']; // What tools the MainController function needs.

  function MainController($scope) { // scope is our bridge to the DOM;
    console.log("Now main is controlling...");
    $scope.person = "Bob";
    $scope.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    $scope.saySurprise = saySurprise;

    function saySurprise(person) {
      alert('Hey ' + person + '... There is a clown behind you!');
    }
  }
}());
