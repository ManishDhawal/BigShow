'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var bookingendpointCtrlStub = {
  index: 'bookingendpointCtrl.index',
  show: 'bookingendpointCtrl.show',
  create: 'bookingendpointCtrl.create',
  update: 'bookingendpointCtrl.update',
  destroy: 'bookingendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var bookingendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './bookingendpoint.controller': bookingendpointCtrlStub
});

describe('Bookingendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(bookingendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/bookingendpoints', function() {

    it('should route to bookingendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'bookingendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/bookingendpoints/:id', function() {

    it('should route to bookingendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'bookingendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/bookingendpoints', function() {

    it('should route to bookingendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'bookingendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/bookingendpoints/:id', function() {

    it('should route to bookingendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'bookingendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/bookingendpoints/:id', function() {

    it('should route to bookingendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'bookingendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/bookingendpoints/:id', function() {

    it('should route to bookingendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'bookingendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
