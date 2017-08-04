'use strict';

(function(){

class TheatreComponent {
  constructor($http, $scope, socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.$scope = $scope;
    this.socket = socket;

    this.TheatreDetails = [];
    this.MovieDetails = [];
    this.MovieData = [];
    this.MovieMapping = [];
    this.MovieDates = [];
    this.checktheatres = [];
    this.myMovies = [];
    this.movDates = [];
    this.movieMap = [];
    this.editData = [];
    this.seltheatres = [];
    this.removeMapData = [];
    this.removecityfilter = [];
    this.removemoviefilter = [];
    this.EditMovieName = [];
    this.EditCityName = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('theatreendpoint');
    });

  }

  $onInit() {
    this.$http.get('/api/theatreendpoints').then(response => {
      this.TheatreDetails = response.data;
      this.socket.syncUpdates('theatreendpoint', this.TheatreDetails);
    });

    this.$http.get('/api/movieendpoints/').then(response => {
      this.MovieData = response.data;
      this.socket.syncUpdates('movieendpoint', this.MovieData);
    });

    this.$http.get('/api/mappingendpoints').then(response => {
        this.MovieMapping = response.data;
        this.socket.syncUpdates('mappingendpoint', this.MovieMapping);
      });
  }

  // adding and removal of theatre details

  addTheatre() {
    this.$http.post('/api/theatreendpoints', {
      TheatreName: this.Theatre,
      Locality: this.Locality,
      City: this.City
    });
  }

  removeTheatre(Theatre) {
    var x = window.confirm('Are you you want to delete this entry?');
    if(x) {
      this.$http.delete('/api/theatreendpoints/' + Theatre._id);
    }
  }
// end of theatre management
}

angular.module('myMovieApp')
  .component('theatre', {
    templateUrl: 'app/theatre/theatre.html',
    controller: TheatreComponent,
    controllerAs: 'theatreCtrl'
  });

})();
