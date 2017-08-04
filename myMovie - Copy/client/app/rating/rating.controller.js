'use strict';

(function(){

class RatingComponent {
  constructor($http, $scope, socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.$scope = $scope;
    this.socket = socket;

    this.myMovie = [];
    this.movieMap = [];
  }
  $onInit() {

    this.$http.get('/api/mappingendpoints/').then(response => {
        this.movieMap = response.data;
        this.socket.syncUpdates('mappingendpoint', this.movieMap);
      });

      this.$http.get('/api/movieendpoints/').then(response => {
        this.myMovies = response.data;
        this.socket.syncUpdates('movieendpoint', this.myMovies);
      });
  }

  
}

angular.module('myMovieApp')
  .component('rating', {
    templateUrl: 'app/rating/rating.html',
    controller: RatingComponent,
    controllerAs: 'ratingCtrl'
  });

})();
