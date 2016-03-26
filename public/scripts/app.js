var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
    })
    .when('/about', {
      templateUrl: '/views/templates/about.html',
    })
    .when('/faq', {
      templateUrl: '/views/templates/faq.html',
    })
    .when('/donate-instrument', {
      templateUrl: '/views/templates/donate-instrument.html',
    })
    .when('/school-search', {
      templateUrl: '/views/templates/school-search.html',
      controller: 'SearchSchoolController',
    })
    .when('/contact', {
      templateUrl: '/views/templates/contact.html',
    })
    .when('/band-directors', {
      templateUrl: '/views/templates/band-directors.html',
    })
    .when('/login', {
      templateUrl: '/views/templates/login.html',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
