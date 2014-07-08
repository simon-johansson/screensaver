'use strict';

describe('Service: DirectiveService', function () {

  // load the service's module
  beforeEach(module('codesaverApp'));

  // instantiate service
  var DirectiveService;
  beforeEach(inject(function (_DirectiveService_) {
    DirectiveService = _DirectiveService_;
  }));

  it('should do something', function () {
    expect(!!DirectiveService).toBe(true);
  });

});
