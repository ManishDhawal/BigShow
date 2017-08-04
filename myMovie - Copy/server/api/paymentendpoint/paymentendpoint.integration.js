'use strict';

var app = require('../..');
import request from 'supertest';

var newPaymentendpoint;

describe('Paymentendpoint API:', function() {

  describe('GET /api/paymentendpoints', function() {
    var paymentendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/paymentendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          paymentendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(paymentendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/paymentendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/paymentendpoints')
        .send({
          name: 'New Paymentendpoint',
          info: 'This is the brand new paymentendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPaymentendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created paymentendpoint', function() {
      expect(newPaymentendpoint.name).to.equal('New Paymentendpoint');
      expect(newPaymentendpoint.info).to.equal('This is the brand new paymentendpoint!!!');
    });

  });

  describe('GET /api/paymentendpoints/:id', function() {
    var paymentendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/paymentendpoints/' + newPaymentendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          paymentendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      paymentendpoint = {};
    });

    it('should respond with the requested paymentendpoint', function() {
      expect(paymentendpoint.name).to.equal('New Paymentendpoint');
      expect(paymentendpoint.info).to.equal('This is the brand new paymentendpoint!!!');
    });

  });

  describe('PUT /api/paymentendpoints/:id', function() {
    var updatedPaymentendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/paymentendpoints/' + newPaymentendpoint._id)
        .send({
          name: 'Updated Paymentendpoint',
          info: 'This is the updated paymentendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPaymentendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPaymentendpoint = {};
    });

    it('should respond with the updated paymentendpoint', function() {
      expect(updatedPaymentendpoint.name).to.equal('Updated Paymentendpoint');
      expect(updatedPaymentendpoint.info).to.equal('This is the updated paymentendpoint!!!');
    });

  });

  describe('DELETE /api/paymentendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/paymentendpoints/' + newPaymentendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when paymentendpoint does not exist', function(done) {
      request(app)
        .delete('/api/paymentendpoints/' + newPaymentendpoint._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
