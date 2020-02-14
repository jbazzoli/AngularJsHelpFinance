// CONTROLLERS
myApp.controller('LoginController', ['$scope', 'cityService', function($scope, loginService) {
    
    $scope.user = cityService.user;
    
    $scope.$watch('user', function() {
       cityService.user = $scope.user; 
    });
    
}]);