var app = angular.module('dementiaApp', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/home', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    })
  	.when('/current', {
    	controller: 'CurUserController',
    	templateUrl: 'views/current.html'
  	})
    .when('/adduser', {
      controller: 'AddUserController',
      templateUrl: 'views/adduser.html'
    })
    .when('/export', {
      controller: 'ExportController',
      templateUrl: 'views/export.html'
    })
    .otherwise({ 
      redirectTo: '/home' 
    }); 
});