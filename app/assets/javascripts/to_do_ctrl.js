(function() {
  "use strict"

  angular.module("app").controller("toDoCtrl", function($scope) {

    $scope.tasks = [];
    $scope.incompletes = [];

    $scope.addTask = function(task) {
      var createTask = {
        task: task,
        completed: false
      }

      if(createTask.task) {
        $scope.tasks.push(createTask);
        $scope.newTask = null;
      }
    };

    $scope.toggleCompleted = function(task) {
      if(task.completed) {
        task.completed = false;
      } else {
        task.completed = true;
      }
    }

    $scope.checkIncomplete = function(tasks) {
      if (tasks.completed) {
        $scope.incompletes.push(1); 
      } else {
        $scope.incompletes.pop();
      }
    }

    window.scope = $scope;
  });
}());