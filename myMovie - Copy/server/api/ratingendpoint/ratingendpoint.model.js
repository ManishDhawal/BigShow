'use strict';

import mongoose from 'mongoose';

var RatingendpointSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Ratingendpoint', RatingendpointSchema);
