
(function() {
	'use strict';
	
	angular.module("myApp")
		.service("LoginService", loginService);
	
        loginService.inject = [];
	
	function loginService() {
		
        var self = this;
        self.user = "logado";
    }
})();