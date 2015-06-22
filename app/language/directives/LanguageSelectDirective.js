angular.module('menusApp')
    .directive('ngTranslateLanguageSelect', function (LocaleService) {

        return {
            restrict: 'A',
            replace: true,
            template: ''+
            '<div class="btn-group dropdown language-select">'+
                '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" id="menu1">'+
                    '<a href="" id="lang_selected" class="lang-sm lang-lbl" lang="es" locale="es_ES" ng-click="changeLanguage($event)"></a> <span class="caret"></span>'+
                '</button>'+
                '<ul class="dropdown-menu" role="menu" aria-labelledby="menu1">'+
                    '<li role="presentation"><span><a href="" role="menuitem" tabindex="-1" class="lang-sm lang-lbl" lang="en" locale="en_US" ng-click="changeLanguage($event)"></a></span></li>'+
                '</ul>'+
            '</div>',
            controller: function ($scope) {
                 LocaleService.setLocale("es_ES");
    
                $scope.changeLanguage = function ($event) {

                    var new_locale = $($event.currentTarget).attr('locale');
                    var new_lang = $($event.currentTarget).attr('lang');
                    var current_locale = $("#lang_selected").attr('locale');
                    var current_lang = $("#lang_selected").attr('lang');
                    $("#lang_selected").attr('lang', new_lang);
                    $("#lang_selected").attr('locale', new_locale);
                    $($event.currentTarget).attr('locale', current_locale);
                    $($event.currentTarget).attr('lang', current_lang);
                    LocaleService.setLocale(new_locale);
                };
            }
        };
    });