(function() {
  "use strict"

  angular.module("app").controller("toDoCtrl", function($scope) {

    $scope.tasks = [];
    $scope.incomplete = 0;

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
      task.completed = !task.completed;
    }

    $scope.numberOfIncompleteTasks = function() {
      var count = 0;
      for(var i = 0; i < $scope.tasks.length; i++) {
        if(!$scope.tasks[i].completed) {
          count++;
        }
      }
      return count;
    }

    $scope.deleteCompletedTasks = function() {
      for(var i = 0; i < $scope.tasks.length; i++) {
        if($scope.tasks[i].completed) {
          $scope.tasks.splice(i, 1);
        }
      }
    }

    window.scope = $scope;
  });
}());