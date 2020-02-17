(function () {
    'use strict';
  
    angular.module("myApp")
      .controller("DebitController", debitController);
      debitController.inject = ['$scope', '$rootScope'];
  
  
  
  
    function debitController($scope, $rootScope) {
      $scope.user = $rootScope.loggedUser;
      $scope.title = 'Debit';
    }
  })();