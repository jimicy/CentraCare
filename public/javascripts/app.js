var app = angular.module('dementiaApp', ['ngRoute']);

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
    .when('/profile', {
      controller: 'ProfileController',
      templateUrl: 'views/profile.html'
    })
    .when('/socialPersonal', {
      controller: 'SPController',
      templateUrl: 'views/socialPersonal.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});