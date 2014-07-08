'use strict';

angular.module('codesaverApp')
    .controller('MainCtrl', function($scope, $timeout, $compile, gist, DirectiveService) {

    	$scope.newCode = {
    		gist: "",
    	};
    	// $scope.code = "";


        // DirectiveService.subscribe(function(msg) {
        // 	console.log(msg);
        // 	gist.loadGist()
        // 	    .then(function(gistContent) {
        // 	    	$scope.newCode.gist = gistContent;

        // 	    	var el = $compile('<div hljs auto-writer source="code" gist="'+gistContent+'"></div>')($scope);
        // 	    	parent.append(el);
        // 	    });
        // });

        var parent = angular.element($('.container'));

        gist.loadGists()
            .then(gist.loadGist)
            .then(function(gistContent) {
            	$scope.newCode.gist = gistContent.content;
            	var el = $compile('<div hljs auto-writer source="model.'+1231241213+'" gist="newCode.gist"></div>')($scope);
            	parent.append(el);
            	$timeout(function() {
            		var el = $compile('<div hljs auto-writer source="model.'+345346345234+'" gist="newCode.gist"></div>')($scope);
            		parent.append(el);
            	}, 1000);
            });

    });
