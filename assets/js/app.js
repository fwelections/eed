'use strict';


// Declare app level module which depends on filters, and services
angular.module('eedApp', [
    'ngRoute',
    'eedApp.filters',
    'eedApp.services',
    'eedApp.directives',
    'eedApp.controllers'
]).
config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/index.html' /*, controller: 'parController'*/
        });
        $routeProvider.when('/presidential2012', {
            redirectTo: '/presidential2012/round1'
        });
        $routeProvider.when('/presidential2012/round1', {
            templateUrl: 'partials/presidential12/round1.html',
            controller: 'presControllerRound1'
        });
        $routeProvider.when('/presidential2012/round1/:id', {
            templateUrl: 'partials/presidential12/rnd1details.html',
            controller: 'presControllerRound1details'
        });
        $routeProvider.when('/presidential2012/round2', {
            templateUrl: 'partials/presidential12/round2.html',
            controller: 'presControllerRound2'
        });
        $routeProvider.when('/presidential2012/round2/:id', {
            templateUrl: 'partials/presidential12/rnd2details.html',
            controller: 'presControllerRound2details'
        });
        $routeProvider.when('/referendum2012', {
            templateUrl: 'partials/referendum12.html',
            controller: 'refController'
        });
        $routeProvider.when('/referendum2012/:id', {
            templateUrl: 'partials/referendum12details.html',
            controller: 'refControllerdetails'
        });
        $routeProvider.when('/referendum2014', {
            templateUrl: 'partials/referendum14.html',
            controller: 'ref14Controller'
        });
        $routeProvider.when('/highlights', {
            templateUrl: 'partials/highlights.html',
            controller: 'HighlightsController'
        });
        $routeProvider.when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutController'
        });
        $routeProvider.when('/404', {
            templateUrl: 'partials/404.html',
            controller: 'ErrorController'
        });
        $routeProvider.otherwise({
            redirectTo: '/404'
        });
        $locationProvider.html5Mode(false);

    }
]);