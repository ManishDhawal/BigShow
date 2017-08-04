'use strict';

import mongoose from 'mongoose';

var MovieendpointSchema = new mongoose.Schema({
  Title: String,
  Poster: String,
  Actors: String,
  Duration: String,
  Genre: String,
  Director: String,
  Status: Boolean
});

export default mongoose.model('Movies', MovieendpointSchema);
