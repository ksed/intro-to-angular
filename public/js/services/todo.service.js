(function() {
  angular.module('intro')
    .factory('TodoService', TodoService);

  TodoService.$inject = [];

  function TodoService() {
    var data = [
      {desc: 'take a nap'},
      {desc: 'take another nap'},
      {desc: 'get some milk'},
      {desc: 'win the lotto'}
    ];

    return {
      get: get,
      create: create,
      update: update,
      delete: remove
    };

    function get() {
      return data;
    }
    function create(description) {
      data.push({desc: description});
    }
    function update(index, newDescription) {
      data.splice(index, 1, {desc: newDescription});
    }
    function remove(index) {
      data.splice(index, 1);
    }
  }
}());
