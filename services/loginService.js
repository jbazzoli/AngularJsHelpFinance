
(function() {
	'use strict';
	
	angular.module("myApp")
		.service("LoginService", loginService);
	
        loginService.inject = [];
	
	function loginService() {
		
        var vm = this;
        vm.isloginVar = false;
        vm.user = "logado";
        vm.isLogin = function (){
            return  vm.isloginVar;
        }
        vm.clientLogout = function () {
            vm.isloginVar = false;
        }
        vm.clientLogin = function (){
            vm.isloginVar = true;
        }
    }
})();