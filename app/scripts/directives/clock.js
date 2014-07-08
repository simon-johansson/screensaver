'use strict';

angular.module('codesaverApp')
    .directive('clock', function($interval, dateFilter) {
        return {
            template: '<div></div>',
            restrict: 'E',
            replace: true,
            link: function postLink(scope, element, attrs) {
            	if (!element.hasClass('clock')) {
            		element.addClass('clock')
            	};
                var format = attrs.format;
                $interval(function() {
                    element.text(dateFilter(new Date(), format));
                }, 1000);
            }
        };
    });
