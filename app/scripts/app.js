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
        'ngTouch',
        'pascalprecht.translate',
        'tmh.dynamicLocale'
    ])
    .config(function($routeProvider, $locationProvider, $translateProvider, tmhDynamicLocaleProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $translateProvider.useMissingTranslationHandlerLog();
        $translateProvider.useStaticFilesLoader({
            prefix: 'resources/locale-', // path to translations files
            suffix: '.json' // suffix, currently- extension of the translations
        });
        $translateProvider.preferredLanguage('es_ES'); // is applied on first load
        $translateProvider.useLocalStorage(); // saves selected language to localStorage
        $translateProvider.useSanitizeValueStrategy('escape');
        tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
    });