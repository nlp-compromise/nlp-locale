'use strict';
const nlp = require('../../nlp-core');
const toAmerican = require('./to_american');
const toBritish = require('./to_british');

let plugin = {
  Term: {
    toBritish : function() {
      this.text = toBritish(this.text);
      this.rebuild();
      return this;
    },
    toAmerican : function() {
      this.text = toAmerican(this.text);
      this.rebuild();
      return this;
    }
  }
};
nlp.plugin(plugin);

module.exports = plugin;

// let w = nlp.term('favourite');
// console.log(w.toAmerican());
