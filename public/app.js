var app = angular.module('onlineportfolio', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	
	.when('/', {
		templateUrl: 'views/main.html',
		// controller: 'mainCtrl'
	})
	  
	  .otherwise({
      redirectTo: '/'
    });

}) //End Config. OK