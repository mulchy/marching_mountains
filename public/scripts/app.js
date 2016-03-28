var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'angAccordion']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'SchoolSearchController',
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
      controller: 'SchoolSearchController',
    })
    .when('/contact', {
      templateUrl: '/views/templates/contact.html',
    })
    .when('/band-directors', {
      templateUrl: '/views/templates/band-directors.html',
    })
    .when('/school-info', {
        templateUrl: '/views/templates/school-info.html',
        controller: 'SchoolInfoController'
    })
    .when('/login', {
      templateUrl: '/views/login.html',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
    })
    .otherwise({
      redirectTo: '/home'
    });

}]);
