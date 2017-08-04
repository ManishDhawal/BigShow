'use strict';

import mongoose from 'mongoose';

var PaymentendpointSchema = new mongoose.Schema({
  Name: String,
  Contact: String,
  eMail: String,
  MovieName: String,
  Cinema: String,
  CityName: String,
  Seats: Array,
  SeatClass: String,
  NoofTickets: Number,
  MovieDate: String,
  ShowTime: String,
  BookingDateTime: String,
  Email: String,
  Contact: String,
  PaidAmount: Number
});

export default mongoose.model('Payments', PaymentendpointSchema);
