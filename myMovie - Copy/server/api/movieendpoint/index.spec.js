'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var movieendpointCtrlStub = {
  index: 'movieendpointCtrl.index',
  show: 'movieendpointCtrl.show',
  create: 'movieendpointCtrl.create',
  update: 'movieendpointCtrl.update',
  destroy: 'movieendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var movieendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './movieendpoint.controller': movieendpointCtrlStub
});

describe('Movieendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(movieendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/movieendpoints', function() {

    it('should route to movieendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'movieendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/movieendpoints/:id', function() {

    it('should route to movieendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'movieendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/movieendpoints', function() {

    it('should route to movieendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'movieendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/movieendpoints/:id', function() {

    it('should route to movieendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'movieendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/movieendpoints/:id', function() {

    it('should route to movieendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'movieendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/movieendpoints/:id', function() {

    it('should route to movieendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'movieendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
