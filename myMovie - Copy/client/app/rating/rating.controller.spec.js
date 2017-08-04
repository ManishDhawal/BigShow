'use strict';

describe('Component: RatingComponent', function () {

  // load the controller's module
  beforeEach(module('myMovieApp'));

  var RatingComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    RatingComponent = $componentController('rating', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
