'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];

      this.myMovies = [];
      this.movDates = [];
      this.theatres = [];
      this.movieMap = [];

      for(var i=0;i<6;i++){
      var date = new Date();
      date.setDate(date.getDate() + i);
      this.movDates[i] = date;
    }

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.$http.get('/api/things').then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });

        this.$http.get('/api/movieendpoints/').then(response => {
          this.myMovies = response.data;
          this.socket.syncUpdates('movieendpoint', this.myMovies);
        });

        this.$http.get('/api/theatreendpoints/').then(response => {
            this.theatres = response.data;
            this.socket.syncUpdates('theatreendpoint', this.theatres);
          });
          
        this.$http.get('/api/mappingendpoints/').then(response => {
            this.movieMap = response.data;
            this.socket.syncUpdates('mappingendpoint', this.movieMap);
          });

          var d=new Date();
          var date,month,year;
          var da=d.getDate()+'';
          if(da.length==1){
            date='0'+da;
          }
          var m=d.getMonth()+1;
          switch(m){
            case 1:month='Jan'; break;
            case 2:month='Feb'; break;
            case 3:month='Mar'; break;
            case 4:month='Apr'; break;
            case 5:month='May'; break;
            case 6:month='Jun'; break;
            case 7:month='Jul'; break;
            case 8:month='Aug'; break;
            case 9:month='Sep'; break;
            case 10:month='Oct'; break;
            case 11:month='Nov'; break;
            case 12:month='Dec'; break;
          }
          var y = d.getFullYear()+'';
          year = y.substring(2,4);
          var fulldate = date+' '+month+' '+year;
          sessionStorage.setItem("Moviedate",fulldate);
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('myMovieApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
