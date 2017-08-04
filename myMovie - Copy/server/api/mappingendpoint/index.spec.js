'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var mappingendpointCtrlStub = {
  index: 'mappingendpointCtrl.index',
  show: 'mappingendpointCtrl.show',
  create: 'mappingendpointCtrl.create',
  update: 'mappingendpointCtrl.update',
  destroy: 'mappingendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var mappingendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './mappingendpoint.controller': mappingendpointCtrlStub
});

describe('Mappingendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(mappingendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/mappingendpoints', function() {

    it('should route to mappingendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'mappingendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/mappingendpoints/:id', function() {

    it('should route to mappingendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'mappingendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/mappingendpoints', function() {

    it('should route to mappingendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'mappingendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/mappingendpoints/:id', function() {

    it('should route to mappingendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'mappingendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/mappingendpoints/:id', function() {

    it('should route to mappingendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'mappingendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/mappingendpoints/:id', function() {

    it('should route to mappingendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'mappingendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
