'use strict';

angular.module('myMovieApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/movie', {
        template: '<movie></movie>',
        authenticate: 'admin'
      });
  });
