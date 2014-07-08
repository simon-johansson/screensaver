'use strict';

describe('Directive: autoWriter', function () {

  // load the directive's module
  beforeEach(module('codesaverApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<auto-writer></auto-writer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the autoWriter directive');
  }));
});
