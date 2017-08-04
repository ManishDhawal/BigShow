'use strict';

angular.module('myMovieApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/booking', {
        template: '<booking></booking>'
      });
  });
