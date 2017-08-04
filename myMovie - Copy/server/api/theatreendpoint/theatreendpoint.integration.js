'use strict';

var app = require('../..');
import request from 'supertest';

var newTheatreendpoint;

describe('Theatreendpoint API:', function() {

  describe('GET /api/theatreendpoints', function() {
    var theatreendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/theatreendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          theatreendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(theatreendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/theatreendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/theatreendpoints')
        .send({
          name: 'New Theatreendpoint',
          info: 'This is the brand new theatreendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTheatreendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created theatreendpoint', function() {
      expect(newTheatreendpoint.name).to.equal('New Theatreendpoint');
      expect(newTheatreendpoint.info).to.equal('This is the brand new theatreendpoint!!!');
    });

  });

  describe('GET /api/theatreendpoints/:id', function() {
    var theatreendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/theatreendpoints/' + newTheatreendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          theatreendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      theatreendpoint = {};
    });

    it('should respond with the requested theatreendpoint', function() {
      expect(theatreendpoint.name).to.equal('New Theatreendpoint');
      expect(theatreendpoint.info).to.equal('This is the brand new theatreendpoint!!!');
    });

  });

  describe('PUT /api/theatreendpoints/:id', function() {
    var updatedTheatreendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/theatreendpoints/' + newTheatreendpoint._id)
        .send({
          name: 'Updated Theatreendpoint',
          info: 'This is the updated theatreendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTheatreendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTheatreendpoint = {};
    });

    it('should respond with the updated theatreendpoint', function() {
      expect(updatedTheatreendpoint.name).to.equal('Updated Theatreendpoint');
      expect(updatedTheatreendpoint.info).to.equal('This is the updated theatreendpoint!!!');
    });

  });

  describe('DELETE /api/theatreendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/theatreendpoints/' + newTheatreendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when theatreendpoint does not exist', function(done) {
      request(app)
        .delete('/api/theatreendpoints/' + newTheatreendpoint._id)
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
