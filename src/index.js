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
  },
  Sentence:{
    toBritish : function() {
      this.terms.forEach((t)=>{
        t.toBritish()
      })
      return this
    },
    toAmerican : function() {
      this.terms.forEach((t)=>{
        t.toAmerican()
      })
      return this
    },
  },
  Text:{
    toBritish : function() {
      this.sentences.forEach((s)=>{
        s.toBritish()
      })
      return this
    },
    toAmerican : function() {
      this.sentences.forEach((s)=>{
        s.toAmerican()
      })
      return this
    },
  }
};

module.exports = nlpLocale;

// const nlp = require('nlp_compromise');
// nlp.plugin(nlpLocale);
// let t = nlp.text('it is certainly my favourite');
// t.toAmerican()
// console.log(t.text());
// t.toBritish()
// console.log(t.text());
