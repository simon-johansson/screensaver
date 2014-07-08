'use strict';

angular.module('codesaverApp')
    .directive('addCode', function($compile, DirectiveService) {
        return {
            restrict: 'E',
            // scope:{},
            controller: function($scope) {
            	// var parent = angular.element($('.container'));

             //    DirectiveService.subscribe(function(code) {
             //       	$scope.code = code;
             //        var el = $compile('<div hljs auto-writer></div>')($scope);
             //        parent.append(el);
             //    });
            }
            // link: function postLink(scope, element, attrs) {
            //     DirectiveService.subscribe(function(code) {
            //     	console.log(code);
            //     	scope.code = code;
            //     	var el = $compile('<div hljs auto-writer source="" gist="code"></div>')(scope);
            //     	var parent = angular.element($('.container'));
            //     	parent.append(el);
            //     });
            // }
        };
    });
