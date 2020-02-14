
myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'view/login.html',
        controller: 'loginController'
    })
    
    .when('/home', {
        templateUrl: 'view/index.html'
        
    })
    
    
});
