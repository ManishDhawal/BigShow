'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var theatreendpointCtrlStub = {
  index: 'theatreendpointCtrl.index',
  show: 'theatreendpointCtrl.show',
  create: 'theatreendpointCtrl.create',
  update: 'theatreendpointCtrl.update',
  destroy: 'theatreendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var theatreendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './theatreendpoint.controller': theatreendpointCtrlStub
});

describe('Theatreendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(theatreendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/theatreendpoints', function() {

    it('should route to theatreendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'theatreendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/theatreendpoints/:id', function() {

    it('should route to theatreendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'theatreendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/theatreendpoints', function() {

    it('should route to theatreendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'theatreendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/theatreendpoints/:id', function() {

    it('should route to theatreendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'theatreendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/theatreendpoints/:id', function() {

    it('should route to theatreendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'theatreendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/theatreendpoints/:id', function() {

    it('should route to theatreendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'theatreendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
