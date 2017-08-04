/**
 * Mappingendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Mappingendpoint from './mappingendpoint.model';
var MappingendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MappingendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Mappingendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MappingendpointEvents.emit(event + ':' + doc._id, doc);
    MappingendpointEvents.emit(event, doc);
  }
}

export default MappingendpointEvents;
