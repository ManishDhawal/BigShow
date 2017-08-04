'use strict';

angular.module('myMovieApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/rating', {
        template: '<rating></rating>',
        authenticate: true
      });
  });
