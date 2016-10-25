(function() {
  angular.module('intro') // getter syntax
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'TodoService']; // What tools the MainController function needs.

  function MainController($scope, TodoService) { // scope is our bridge to the DOM;
    console.log(TodoService.get());
    TodoService.create('make more tools');
    console.log(TodoService.get());
    TodoService.update(0, 'buy some ramen');
    console.log(TodoService.get());
    TodoService.delete(2);
    console.log(TodoService.get());
    console.log(TodoService.get());
  }
}());
