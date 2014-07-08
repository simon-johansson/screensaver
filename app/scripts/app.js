'use strict';

angular
    .module('codesaverApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'hljs'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainCtrl',
                // resolve: {
                //     initGist: ['Gist',
                //         function(Gist) {
                //             return Gist.fetchGist();
                //         }
                //     ]
                // },
                templateUrl: 'views/main.html',
            })
            .otherwise({
                redirectTo: '/'
            });
    });
