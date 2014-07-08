'use strict';

angular.module('codesaverApp')
    .factory('gist', function($q, $http, githubApi) {

        var gistIds = [];

        function parseGists(gists, callback) {
            gists.forEach(function(el, i) {
                Object.keys(el.files).forEach(function(key) {
                    var type = el.files[key].type;
                    if (type !== "text/plain") {
                        gistIds.push(el);
                    }
                });
            });
            callback(gistIds);
        }

        var fetchGists = function() {
            var deferrd = $q.defer();
            $http({
                method: 'GET',
                url: 'https://api.github.com/gists?' + githubApi.queryString
            }).success(function(data, status, headers, config) {
                deferrd.resolve(data);
            }).error(function(data, status, headers, config) {
                console.log(status);
                deferrd.reject("Could not fetch gists!")
            });

            return deferrd.promise;
        };

        var fetchGist = function(gistId) {
            var deferrd = $q.defer();
            $http({
                method: 'GET',
                // url: 'https://api.github.com/gists/' + gistId.id + '?' + githubApi.queryString
                url: 'https://api.github.com/gists/' + '6f314a87663085bfb23d' + '?' + githubApi.queryString
            }).success(function(data, status, headers, config) {
                deferrd.resolve(data);
            }).error(function(data, status, headers, config) {
                console.log(status);
                deferrd.reject("Could not fetch gist:" + gistId.id);
            });
            return deferrd.promise;
        };

        var loadGists = function() {
            return fetchGists()
                .then(function(gists) {
                    parseGists(gists, function(parsedGists) {
                    	return parsedGists;
                    });
                });
        };

        var loadGist = function() {
            if (gistIds.length > 0) {
                return fetchGist(gistIds[0])
                    .then(function(gist) {
                        gistIds.splice(0, 1);
                        var obj = {
                        	content: "",
                        	fileName: ""
                        };
                        console.log(gist);
                        Object.keys(gist.files).forEach(function(key, i) {
                            // Go throught all the files
                            obj.content = gist.files[key].content;
                            obj.id = gist.id;
                        });
                        return obj;
                    });
            }
        };

        return {
            loadGists: loadGists,
            loadGist: loadGist
        };
    });
