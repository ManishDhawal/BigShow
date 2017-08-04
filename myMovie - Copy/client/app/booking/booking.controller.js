'use strict';

(function(){

class BookingComponent {
  constructor($http, $scope, socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.$scope = $scope;
    this.socket = socket;

    this.$http.get('/api/mappingendpoints/Movie/'+sessionStorage.getItem('MovieName')+'/'+sessionStorage.getItem('City')+'/'+sessionStorage.getItem('Cinema')).then(response => {
        this.allDates = response.data[0].MovieDates;
        var j=0;
        for(var i=0;i<this.allDates.length;i++){
          var d = new Date(this.allDates[i]);
          if(d>=new Date()){
            this.movDates[j]=this.allDates[i];
            j++;
          }
        }
        this.socket.syncUpdates('mappingendpoints', this.movDates);
      });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('paymentendpoint');
      socket.unsyncUpdates('mappingendpoints');
  });

}

    $onInit() {
      this.$http.get('api/paymentendpoints/'+sessionStorage.getItem('MovieName')+'/'+sessionStorage.getItem('Cinema')+'/'+sessionStorage.getItem('City')+'/'+sessionStorage.getItem('Class')+'/'+sessionStorage.getItem('Moviedate')+'/'+sessionStorage.getItem('ShowTime')).then(response => {
        window.bookedSeats = response.data;
        this.socket.syncUpdates('paymentendpoint', window.bookedSeats);
        window.disableSeats();
      });

        this.$http.get('/api/movieendpoints/'+sessionStorage.getItem('MovieName')).then(response => {
          this.myMov = response.data;
          this.socket.syncUpdates('Movies', this.myMov);
          sessionStorage.setItem('MoviePoster',this.myMov[0].Poster);
          sessionStorage.setItem('MovieLang',this.myMov[0].Language);
        });

  }
}

angular.module('myMovieApp')
  .component('booking', {
    templateUrl: 'app/booking/booking.html',
    controller: BookingComponent,
    controllerAs: 'bookingCtrl'
  });

})();
