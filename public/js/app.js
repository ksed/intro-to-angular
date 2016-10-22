(function() {
  angular.module('intro', [])
         .controller('MainController', MainController);

  MainController.$inject = ['$scope']; // What tools the MainController function needs.

  function MainController($scope) { // scope is our bridge to the DOM
    console.log("Now main is controlling...");
    $scope.person = "Bob";
    $scope.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  }
}());
