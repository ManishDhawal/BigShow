/**
 * Movieendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Movieendpoint from './movieendpoint.model';
var MovieendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MovieendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Movieendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MovieendpointEvents.emit(event + ':' + doc._id, doc);
    MovieendpointEvents.emit(event, doc);
  }
}

export default MovieendpointEvents;
