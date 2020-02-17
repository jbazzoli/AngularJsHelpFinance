
(function () {
    'use strict';
  
    angular.module("myApp")
      .controller("SettingsController", settingsController);
      settingsController.inject = ['$scope', '$rootScope'];
  
  
  
  
    function settingsController($scope, $rootScope) {
      $scope.user = $rootScope.loggedUser;
      $scope.title = 'Setting' 
        
    }
})();
