'use strict';

var app = require('../..');
import request from 'supertest';

var newMappingendpoint;

describe('Mappingendpoint API:', function() {

  describe('GET /api/mappingendpoints', function() {
    var mappingendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/mappingendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mappingendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(mappingendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/mappingendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/mappingendpoints')
        .send({
          name: 'New Mappingendpoint',
          info: 'This is the brand new mappingendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMappingendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created mappingendpoint', function() {
      expect(newMappingendpoint.name).to.equal('New Mappingendpoint');
      expect(newMappingendpoint.info).to.equal('This is the brand new mappingendpoint!!!');
    });

  });

  describe('GET /api/mappingendpoints/:id', function() {
    var mappingendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/mappingendpoints/' + newMappingendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mappingendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      mappingendpoint = {};
    });

    it('should respond with the requested mappingendpoint', function() {
      expect(mappingendpoint.name).to.equal('New Mappingendpoint');
      expect(mappingendpoint.info).to.equal('This is the brand new mappingendpoint!!!');
    });

  });

  describe('PUT /api/mappingendpoints/:id', function() {
    var updatedMappingendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/mappingendpoints/' + newMappingendpoint._id)
        .send({
          name: 'Updated Mappingendpoint',
          info: 'This is the updated mappingendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMappingendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMappingendpoint = {};
    });

    it('should respond with the updated mappingendpoint', function() {
      expect(updatedMappingendpoint.name).to.equal('Updated Mappingendpoint');
      expect(updatedMappingendpoint.info).to.equal('This is the updated mappingendpoint!!!');
    });

  });

  describe('DELETE /api/mappingendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/mappingendpoints/' + newMappingendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when mappingendpoint does not exist', function(done) {
      request(app)
        .delete('/api/mappingendpoints/' + newMappingendpoint._id)
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
