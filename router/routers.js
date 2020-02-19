(function(){
	'use strict';
	
	angular.module('myApp')
	.config(configure)
	.run(runCallback);
    function configure ($routeProvider) {
        
        $routeProvider
        
        .when('/login', {
            templateUrl: 'view/login.html',
            controller: 'LoginController',
            controllerAs:"vm"
        })
        
        .when('/home', {
            templateUrl: 'view/welcome.html',
            controller: 'WelcomeController'
        })
        .when('/insertCredit', {
            templateUrl: 'view/credit.html',
            controller: 'CreditController',
            controllerAs:"vm"
        })
        .when('/insertDebit', {
            templateUrl: 'view/debit.html',
            controller: 'DebitController'
        })
        .when('/register', {
            templateUrl: 'view/register.html',
            controller: 'RegisterController'
        })
        .when('/settings', {
            templateUrl: 'view/settings.html',
            controller: 'SettingsController'
        })
        .when('/report', {
            templateUrl: 'view/report.html',
            controller: 'ReportController'
        })
        .otherwise({
            redirectTo: '/login'
        });
        
        
    }
   function runCallback($rootScope, $location, LoginService){
		$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
			var logged = LoginService.isLogin();
	        var appTo = (currRoute.$$route?currRoute.$$route.originalPath.indexOf('login') === -1 && currRoute.$$route.originalPath.indexOf('register') === -1 :false);
            var loggout = (currRoute.$$route?currRoute.$$route.originalPath.indexOf('logout') ===-1 : false);
            if(!loggout){
                LoginService.clientLogout();
                $rootScope.loggedUser = undefined;
                $location.path('/login');
            }
            else if(appTo && !logged) {
	            event.preventDefault();
	            LoginService.clientLogout();
	        }else if(!appTo && logged){
	        	$location.path('/home');
	        }
	    });
	}
 })(); 
