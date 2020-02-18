(function(){
	'use strict';
	
	angular.module('myApp')
	.config(configure)
	//.run(runCallback);
    function configure ($routeProvider) {
        
        $routeProvider
        
        .when('/login', {
            templateUrl: 'view/login.html',
            controller: 'LoginController'
        })
        
        .when('/home', {
            templateUrl: 'view/welcome.html',
            controller: 'WelcomeController'
        })
        .when('/isertCredit', {
            templateUrl: 'view/credit.html',
            controller: 'CreditController',
            controllerAs:"vm",
        })
        .when('/isertDebit', {
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
 })(); 
