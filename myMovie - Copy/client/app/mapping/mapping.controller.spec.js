'use strict';

describe('Component: MappingComponent', function () {

  // load the controller's module
  beforeEach(module('myMovieApp'));

  var MappingComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    MappingComponent = $componentController('mapping', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
