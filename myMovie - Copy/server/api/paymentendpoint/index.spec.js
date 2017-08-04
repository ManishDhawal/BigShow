'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var paymentendpointCtrlStub = {
  index: 'paymentendpointCtrl.index',
  show: 'paymentendpointCtrl.show',
  create: 'paymentendpointCtrl.create',
  update: 'paymentendpointCtrl.update',
  destroy: 'paymentendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var paymentendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './paymentendpoint.controller': paymentendpointCtrlStub
});

describe('Paymentendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(paymentendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/paymentendpoints', function() {

    it('should route to paymentendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'paymentendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/paymentendpoints/:id', function() {

    it('should route to paymentendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'paymentendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/paymentendpoints', function() {

    it('should route to paymentendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'paymentendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/paymentendpoints/:id', function() {

    it('should route to paymentendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'paymentendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/paymentendpoints/:id', function() {

    it('should route to paymentendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'paymentendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/paymentendpoints/:id', function() {

    it('should route to paymentendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'paymentendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
