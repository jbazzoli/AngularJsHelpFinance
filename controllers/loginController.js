// CONTROLLERS

(function() {
	'use strict';

	angular.module("myApp")
            .controller("LoginController", loginController);
            loginController.inject = [ '$scope','LoginService', '$location', '$rootScope' ];

    
   

    function loginController(LoginService, $scope,$location, $rootScope) {
        $scope.user = LoginService.user;
        $scope.isLoged = false;
        $rootScope.loggedUser = undefined;
       /* $scope.$watch('user', function() {
            LoginService.user = $scope.user; 
        });*/
        $scope.onLogin = function()
        {
            console.log($scope.password);
            console.log($scope.user);
          
           
            if($scope.user.length > 0 || $scope.password.length >0){
                $scope.isLoged = true;
                $rootScope.loggedUser = $scope.user;
            }
            else {
                $scope.isLoged = false;
                $rootScope.loggedUser = undefined;
            }
            if( $scope.isLoged) {
               
                $location.path( "/home" );
            }
            else {
                $scope.loginError = "Invalid user/pass.";
            }
        }
    }
})();
