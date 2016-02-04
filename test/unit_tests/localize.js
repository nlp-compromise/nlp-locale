'use strict';
let mocha = require('mocha');
let should = require('should');
let tests = require('./british_terms.js');

//apply the plugin
const plugin = require('../../src/index.js');
const nlp = require('../../../nlp_compromise');
nlp.plugin(plugin);

let tiny_tests = [
  ['accessorise', 'accessorize'],
  ['accessorised', 'accessorized'],
  ['accessorises', 'accessorizes'],
  ['accessorising', 'accessorizing'],
  ['acclimatisation', 'acclimatization'],
  ['acclimatise', 'acclimatize'],
  ['acclimatised', 'acclimatized'],
  ['acclimatises', 'acclimatizes'],
  ['acclimatising', 'acclimatizing'],
  ['popularise', 'popularize'],
  ['popularised', 'popularized'],
  ['popularises', 'popularizes'],
  ['popularising', 'popularizing'],
  ['pouffe', 'pouf'],
  ['pouffes', 'poufs'],
  ['practise', 'practice'],
  ['practised', 'practiced'],
  ['practises', 'practices']
];

describe('localize', function() {
  //americanize it
  it('americanize', function(done) {
    tests.forEach(function(a) {
      let t = nlp.term(a[0]);
      t.toAmerican().normal.should.equal(a[1]);
    });
    done();
  });
  //britishize it
  it('britishize', function(done) {
    tiny_tests.forEach(function(a) {
      let t = nlp.term(a[1]);
      t.toBritish().normal.should.equal(a[0]);
    });
    done();
  });

});
