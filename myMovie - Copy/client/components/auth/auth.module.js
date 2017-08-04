'use strict';

angular.module('myMovieApp.auth', ['myMovieApp.constants', 'myMovieApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
