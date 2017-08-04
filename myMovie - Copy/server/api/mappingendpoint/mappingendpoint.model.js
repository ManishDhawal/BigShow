'use strict';

import mongoose from 'mongoose';

var MappingendpointSchema = new mongoose.Schema({
  MovieName: String,
  TheatreName: String,
  City: String,
  MovieDates: Array,
  ShowTimings: Array,
  Status: Boolean
});

export default mongoose.model('Mappings', MappingendpointSchema);
