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
      if(task.completed) {
        task.completed = false;
      } else {
        task.completed = true;
      }
    }

    $scope.numberOfIncompleteTasks = function() {
      var count = 0;
      for(var i = 0; i < $scope.tasks.length; i++) {
        if(!$scope.tasks[i].completed) {
          count++;
        }
      }
      return count;
      // for (var i = 0; i < incomplete.length; i++) {
      //   if (tasks[i].completed) {
      //     $scope.incomplete++;
      //   } else {
      //     $scope.incomplete--;
      //   }
      // }
    }

    window.scope = $scope;
  });
}());