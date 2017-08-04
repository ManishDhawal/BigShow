'use strict';

var app = require('../..');
import request from 'supertest';

var newBookingendpoint;

describe('Bookingendpoint API:', function() {

  describe('GET /api/bookingendpoints', function() {
    var bookingendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/bookingendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          bookingendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(bookingendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/bookingendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/bookingendpoints')
        .send({
          name: 'New Bookingendpoint',
          info: 'This is the brand new bookingendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newBookingendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created bookingendpoint', function() {
      expect(newBookingendpoint.name).to.equal('New Bookingendpoint');
      expect(newBookingendpoint.info).to.equal('This is the brand new bookingendpoint!!!');
    });

  });

  describe('GET /api/bookingendpoints/:id', function() {
    var bookingendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/bookingendpoints/' + newBookingendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          bookingendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      bookingendpoint = {};
    });

    it('should respond with the requested bookingendpoint', function() {
      expect(bookingendpoint.name).to.equal('New Bookingendpoint');
      expect(bookingendpoint.info).to.equal('This is the brand new bookingendpoint!!!');
    });

  });

  describe('PUT /api/bookingendpoints/:id', function() {
    var updatedBookingendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/bookingendpoints/' + newBookingendpoint._id)
        .send({
          name: 'Updated Bookingendpoint',
          info: 'This is the updated bookingendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedBookingendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedBookingendpoint = {};
    });

    it('should respond with the updated bookingendpoint', function() {
      expect(updatedBookingendpoint.name).to.equal('Updated Bookingendpoint');
      expect(updatedBookingendpoint.info).to.equal('This is the updated bookingendpoint!!!');
    });

  });

  describe('DELETE /api/bookingendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/bookingendpoints/' + newBookingendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when bookingendpoint does not exist', function(done) {
      request(app)
        .delete('/api/bookingendpoints/' + newBookingendpoint._id)
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
