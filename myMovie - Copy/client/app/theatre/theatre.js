'use strict';

angular.module('myMovieApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/theatre', {
        template: '<theatre></theatre>',
        authenticate: 'admin'
      });
  });
