'use strict';

/**
 * @ngdoc function
 * @name airanAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the airanAppApp
 */
angular.module('airanAppApp')
  .controller('MainCtrl', function ($scope) {
  	$(window).bind('scroll', function() {
    var navHeight = $("#main_overlay").height();
    var windscroll = $(window).scrollTop();
     if (windscroll >= navHeight) {
        $('#sticky_nav').addClass('goToTop')
        $('.wrapper').each(function(i) {
            if ($(this).position().top <= windscroll+80) {
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            }
        });

    } else {
       $('#sticky_nav').removeClass('goToTop')
       $('nav a.active').removeClass('active');
       $('nav a:first').addClass('active');
    }    
  });
  });
