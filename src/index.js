'use strict';
const toAmerican = require('./to_american');
const toBritish = require('./to_british');

let nlpLocale = {
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

module.exports = nlpLocale;
// const nlp = require('nlp_compromise');
// nlp.plugin(nlpLocale);
// let w = nlp.term('favourite');
// console.log(w.toAmerican().text);
