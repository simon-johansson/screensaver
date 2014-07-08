'use strict';

angular.module('codesaverApp')
    .factory('githubApi', function() {
    	var clientId = "8c45fe4247e55dce75ec";
    	var clientSecret = "1db5aea067836188b0b1326d5a43a2d60b8bcdb4";
    	var queryString = "client_id="+ clientId +"&client_secret="+ clientSecret;
        return {
            clientId: clientId,
            clientSecret: clientSecret,
            queryString: queryString
        };
    });
