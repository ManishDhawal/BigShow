/**
 * Paymentendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Paymentendpoint from './paymentendpoint.model';
var PaymentendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PaymentendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Paymentendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PaymentendpointEvents.emit(event + ':' + doc._id, doc);
    PaymentendpointEvents.emit(event, doc);
  }
}

export default PaymentendpointEvents;
