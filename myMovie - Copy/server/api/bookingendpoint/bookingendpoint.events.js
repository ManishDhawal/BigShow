/**
 * Bookingendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Bookingendpoint from './bookingendpoint.model';
var BookingendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
BookingendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Bookingendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    BookingendpointEvents.emit(event + ':' + doc._id, doc);
    BookingendpointEvents.emit(event, doc);
  }
}

export default BookingendpointEvents;
