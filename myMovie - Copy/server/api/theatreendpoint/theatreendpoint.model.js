'use strict';

import mongoose from 'mongoose';

var TheatreendpointSchema = new mongoose.Schema({
  TheatreName: String,
  Locality: String,
  City: String
});

export default mongoose.model('Theatreendpoint', TheatreendpointSchema);
