'use strict';

import mongoose from 'mongoose';

var BookingendpointSchema = new mongoose.Schema({
  MovieName: String,
  TheatreName: String,
  Timing: Array,
  Tickets: String,
  SeatNo: String,
  Amount: String
});

export default mongoose.model('Bookings', BookingendpointSchema);
