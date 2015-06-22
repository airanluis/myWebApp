'use strict';

angular.module('menusApp')
    .service('LocaleService', function($translate, $rootScope, tmhDynamicLocale) {
        
        // STORING CURRENT LOCALE
        var currentLocale = $translate.proposedLanguage(); // because of async loading

        var setLocale = function(locale) {
            currentLocale = locale; // updating current locale

            // asking angular-translate to load and apply proper translations
            $translate.use(locale);
        };

        // EVENTS
        // on successful applying translations by angular-translate
        $rootScope.$on('$translateChangeSuccess', function(event, data) {
            document.documentElement.setAttribute('lang', data.language); // sets "lang" attribute to html

            // asking angular-dynamic-locale to load and apply proper AngularJS $locale setting
            tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));
        });

        return {
            setLocale: function(locale) {
                setLocale(locale)
            }
        };
    });