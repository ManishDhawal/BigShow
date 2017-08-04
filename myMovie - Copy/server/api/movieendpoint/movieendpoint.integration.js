'use strict';

var app = require('../..');
import request from 'supertest';

var newMovieendpoint;

describe('Movieendpoint API:', function() {

  describe('GET /api/movieendpoints', function() {
    var movieendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/movieendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          movieendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(movieendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/movieendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/movieendpoints')
        .send({
          name: 'New Movieendpoint',
          info: 'This is the brand new movieendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMovieendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created movieendpoint', function() {
      expect(newMovieendpoint.name).to.equal('New Movieendpoint');
      expect(newMovieendpoint.info).to.equal('This is the brand new movieendpoint!!!');
    });

  });

  describe('GET /api/movieendpoints/:id', function() {
    var movieendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/movieendpoints/' + newMovieendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          movieendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      movieendpoint = {};
    });

    it('should respond with the requested movieendpoint', function() {
      expect(movieendpoint.name).to.equal('New Movieendpoint');
      expect(movieendpoint.info).to.equal('This is the brand new movieendpoint!!!');
    });

  });

  describe('PUT /api/movieendpoints/:id', function() {
    var updatedMovieendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/movieendpoints/' + newMovieendpoint._id)
        .send({
          name: 'Updated Movieendpoint',
          info: 'This is the updated movieendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMovieendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMovieendpoint = {};
    });

    it('should respond with the updated movieendpoint', function() {
      expect(updatedMovieendpoint.name).to.equal('Updated Movieendpoint');
      expect(updatedMovieendpoint.info).to.equal('This is the updated movieendpoint!!!');
    });

  });

  describe('DELETE /api/movieendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/movieendpoints/' + newMovieendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when movieendpoint does not exist', function(done) {
      request(app)
        .delete('/api/movieendpoints/' + newMovieendpoint._id)
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
