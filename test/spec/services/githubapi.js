'use strict';

describe('Service: githubApi', function () {

  // load the service's module
  beforeEach(module('codesaverApp'));

  // instantiate service
  var githubApi;
  beforeEach(inject(function (_githubApi_) {
    githubApi = _githubApi_;
  }));

  it('should do something', function () {
    expect(!!githubApi).toBe(true);
  });

});
