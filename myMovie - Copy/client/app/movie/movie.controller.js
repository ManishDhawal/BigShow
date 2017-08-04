'use strict';

(function(){

class MovieComponent {
  constructor($http, $scope, socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.$scope = $scope;
    this.socket = socket;
    this.MovieDetails = [];
    this.MovieData = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('movieendpoint');
      });
  }

  $onInit() {
  this.$http.get('/api/movieendpoints').then(response => {
    this.MovieDetails = response.data;
    this.socket.syncUpdates('movieendpoint', this.MovieDetails);
  });
}

SearchMovie() {
  this.$http.get('https://moviesapi.com/m.php?t='+this.MovieName+'&y='+this.Year+'&type=movie&r=json').then( (response, err) => {
    var MovieID=response.data[0].id;
    this.$http.get('https://moviesapi.com/m.php?i='+MovieID+'&type=movie&r=json').then((response, err) =>{
      this.MovieDetails = response.data;
      console.log('movie searched');
      console.log(response.data);
    });
  });
}

addMovie() {
  this.$http.post(' /api/movieendpoints', {
    Title: this.MovieDetails.title,
    Poster: this.MovieDetails.cov,
    Actors: this.MovieDetails.cast,
    Duration: this.MovieDetails.dur,
    Genre: this.MovieDetails.gen,
    Director: this.MovieDetails.director,
    Status: false
  });

  console.log('Movie saved to database');
}

removeMovie(Movie) {
  var x = confirm('Are you sure you want to delete tihs entry?');
  if(x){
    this.$http.delete('/api/movieendpoints/'+Movie._id);
    console.log('Entry has been removed');
  }
}
}

angular.module('myMovieApp')
  .component('movie', {
    templateUrl: 'app/movie/movie.html',
    controller: MovieComponent,
    controllerAs: 'movieCtrl'
  });

})();
