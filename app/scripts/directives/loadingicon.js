'use strict';

angular.module('codesaverApp')
    .directive('loadingIcon', function($rootScope) {
        return {
            // template: '<div></div>',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                element.addClass('hide');

                $rootScope.$on('$routeChangeStart', function() {
                    element.removeClass('hide');
                });

                $rootScope.$on('$routeChangeSuccess', function() {
                    element.addClass('hide');
                });
            }
        };
    });
