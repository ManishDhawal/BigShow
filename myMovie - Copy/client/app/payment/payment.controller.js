'use strict';

(function(){

class PaymentComponent {
  constructor($http, $scope, socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.$scope = $scope;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('paymentendpoint');
    });
  }

  addPaymentDetails(){
    this.$http.post('/api/paymentendpoints', {
      Name: this.Name,
      Contact: this.Contact,
      eMail: this.Email,
      MovieName:sessionStorage.getItem('MovieName'),
      Cinema: sessionStorage.getItem('Cinema'),
      CityName: sessionStorage.getItem('City'),
      Seats: JSON.parse(sessionStorage.getItem('JsonSeatNos')),
      SeatClass: sessionStorage.getItem('Class'),
      NoofTickets: sessionStorage.getItem('NoofSeats'),
      MovieDate: sessionStorage.getItem('Moviedate'),
      ShowTime: sessionStorage.getItem('ShowTime'),
      BookingDateTime: Date(),
      Email: this.Email,
      Contact: this.ContactNumber,
      PaidAmount: sessionStorage.getItem('Amt')
    });
}

}

angular.module('myMovieApp')
  .component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl'
  });

})();
