var request = require('supertest');
var server = require('./../server');
var calendar = require('./../web/server/calendarSV');

describe('server.js', function() {
    before(function() {
        this.timeout(5000);
    });
    it('200 responds to /', function testSlash(done) {
        request(server).get('/').expect(200, done);
    });
    it('302 redirects to /calendar', function testSlash(done) {
        request(server).get('/calendar').expect(302, done);
    });
    it('302 redirects to /calendarAuth', function testSlash(done) {
        request(server).get('/calendarAuth').expect(302, done);
    });
    it('302 redirects to /projectAuth', function testSlash(done) {
        request(server).get('/projectAuth').expect(302, done);
    });
    it('404 everything else', function testPath(done) {
        request(server).get('/foo/bar').expect(404, done);
    });
});