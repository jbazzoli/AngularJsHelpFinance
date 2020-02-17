

(function () {
  'use strict';

  angular.module("myApp")
    .controller("WelcomeController", welcomeController);
  welcomeController.inject = ['$scope', '$rootScope'];




  function welcomeController($scope, $rootScope) {
    $scope.user = $rootScope.loggedUser;
    $scope.debit = [
      {
        description: 'transport',
        value: 55.2
     }, 
     {
       description: 'home',
        value: 4555.2
    }];
     $scope.credit = [
      {
        description: 'my Work',
        value: 652.2
     }, 
     {
       description: 'my Work Second',
        value: 4555.2
    }

     ];
     $scope.balance = [
      {
        description: 'January',
        value: 4555.2
     }, 
     {
       description: 'February',
        value: 4555.2
    },
    {
      description: 'April',
      value: 6562.2
   }, 
   {
     description: 'May',
      value: -4555.2
  }
  
  ];
    

  }
})();
