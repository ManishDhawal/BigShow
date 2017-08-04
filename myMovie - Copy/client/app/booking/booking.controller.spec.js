'use strict';

describe('Component: BookingComponent', function () {

  // load the controller's module
  beforeEach(module('myMovieApp'));

  var BookingComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    BookingComponent = $componentController('booking', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
