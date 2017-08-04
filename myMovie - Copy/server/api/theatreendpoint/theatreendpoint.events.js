/**
 * Theatreendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Theatreendpoint from './theatreendpoint.model';
var TheatreendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TheatreendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Theatreendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TheatreendpointEvents.emit(event + ':' + doc._id, doc);
    TheatreendpointEvents.emit(event, doc);
  }
}

export default TheatreendpointEvents;
