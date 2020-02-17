
(function () {
    'use strict';
  
    angular.module("myApp")
      .controller("RegisterController", registerController);
      registerController.inject = ['$scope', '$rootScope'];
  
  
  
  
    function registerController($scope, $rootScope) {
        $scope.title = 'Register';
    }
})();