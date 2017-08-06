angular.module('demoApp', 
			  ['ngRoute',
			  'ngAnimate',
			  'toaster',
			  'ngDialog'])
              .config(function($routeProvider,$locationProvider) {
                    $routeProvider
                        .when('/', {templateUrl : 'views/home.html',controller  : 'mainCtrl'})
                  		.when('/about', {templateUrl : 'views/about.html',controller  : 'aboutCtrl'})
                  		.when('/contact', {templateUrl : 'views/contact.html',controller  : 'contactCtrl'});


                      });
