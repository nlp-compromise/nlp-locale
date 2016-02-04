
https://en.wikipedia.org/wiki/List_of_dialects_of_the_English_language

```javascript
var nlp = require('nlp_compromise');
var nlpLocale = require('nlp-locale');
nlp.plugin(nlpLocale);

var t = nlp.term('favorite');
t = t.toAmerican();
console.log(t.text)
//favourite

var s = nlp.sentence("he synthesized the sound")
s.terms[1].toBritish()
s.text()
//he synthesised the sound
```