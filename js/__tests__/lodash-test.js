'use strict';

jest.autoMockOff();

const _ = require('lodash');

describe('lodash', () => {

  it('should use the same version as package.json', () => {
    expect(_.VERSION).toBe('4.6.1');
  });

});
