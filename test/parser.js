var parser_module = require('../parser'),
    parse = parser_module.parser.parse,
    assert = require('assert');

describe('#parse', function() {
  it('parses a varid', function() {
    assert.equal([], parse('abcdef123'));
  });
});
