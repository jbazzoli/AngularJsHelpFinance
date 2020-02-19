// CONTROLLERS

(function() {
	'use strict';

	angular.module("myApp")
            .controller("LoginController", loginController);
            loginController.inject = [ 'LoginService', '$location', '$rootScope' ];

    
   

    function loginController(LoginService,$location, $rootScope) {
        var vm = this;
        vm.user = LoginService.user;
        vm.isLoged = false;
        vm.loggedUser = undefined;
       /* $scope.$watch('user', function() {
            LoginService.user = $scope.user; 
        });*/
        vm.onLogin = function()
        {
           
          
           
            if(vm.user.length > 0 && vm.password.length >0){
                vm.isLoged = true;
                LoginService.clientLogin();
                $rootScope.loggedUser = vm.user;
            }
            else {
                vm.isLoged = false;
                LoginService.clientLogout();
                $rootScope.loggedUser = undefined;
            }
            if( vm.isLoged) {
               
                $location.path( "/home" );
            }
            else {
                vm.loginError = "Invalid user/pass.";
            }
        }

        vm.onLogOut = function(){
            vm.isLoged = false;
            LoginService.clientLogout();
             $rootScope.loggedUser = undefined;
             $location.path( "/login" );
            }
    }
    
})();
