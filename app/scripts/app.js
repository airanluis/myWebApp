'use strict';

/**
 * @ngdoc overview
 * @name airanAppApp
 * @description
 * # airanAppApp
 *
 * Main module of the application.
 */
angular
  .module('airanAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
