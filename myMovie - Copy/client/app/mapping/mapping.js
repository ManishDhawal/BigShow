'use strict';

angular.module('myMovieApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mapping', {
        template: '<mapping></mapping>',
        authenticate: 'admin'
      });
  });
