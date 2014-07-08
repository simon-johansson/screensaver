'use strict';

angular.module('codesaverApp')
    .directive('autoWriter', function($timeout, $compile, DirectiveService) {
        return {
            restrict: 'A',
            // require: "^addCode",
            scope: {
            	gist: '=',
            	source: '='
            },
            link: function postLink(scope, element, attrs, ctrl) {


            	// scope.source = angular.copy(scope.gist);
            	var code = angular.copy(scope.gist);
            	writeCode(code);

            	function typingTime() {
            		// return (Math.random() * 300) + 10;
            		return 100;
            	}

                function writeCode(code){
                	if (angular.isDefined(code) && angular.isDefined(code[0])) {
                		scope.source += code[0];
                		console.log(scope.source);
	                    code = code.slice(1, code.length);
	                    $timeout(function() {
	                    	writeCode(code);
	                    }, typingTime());
                	} else {
                		// DirectiveService.publish("No more code");
                	}
                }

            }
        };
    });
