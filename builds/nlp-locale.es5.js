(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.nlpLocale = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _toAmerican = require('./to_american');
var _toBritish = require('./to_british');

var plugin = {
  Term: {
    toBritish: function toBritish() {
      this.text = _toBritish(this.text);
      this.rebuild();
      return this;
    },
    toAmerican: function toAmerican() {
      this.text = _toAmerican(this.text);
      this.rebuild();
      return this;
    }
  }
};

module.exports = plugin;
// const nlp = require('nlp_compromise');
// nlp.plugin(plugin);
// let w = nlp.term('favourite');
// console.log(w.toAmerican());

},{"./to_american":3,"./to_british":4}],2:[function(require,module,exports){
'use strict';

//two-way us/uk transitions with no patterns
module.exports = [['axe', 'ax'], ['jewellery', 'jewelry'], ['almanack', 'almanac'], ['aluminium', 'aluminum'], ['axe', 'ax'], ['artefact', 'artifact'], ['buses', 'busses'], ['chequered', 'checkered'], ['cypher', 'cipher'], ['disc', 'disk'], ['chilli', 'chili'], ['inflexion', 'inflection'], ['storey', 'story'], ['pyjama', 'pajama'], ['tyre', 'tire'], ['waggon', 'wagon'], ['woollen', 'woolen'], ['woolly', 'wooly'], ['woollies', 'woolies'], ['yoghourt', 'yogurt'], ['yoghurt', 'yogurt'], ['aerogramme', 'aerogram'], ['aerogrammes', 'aerograms'], ['anaesthetise', 'anesthetize'], ['anaesthetised', 'anesthetized'], ['anaesthetises', 'anesthetizes'], ['anaesthetising', 'anesthetizing'], ['appal', 'appall'], ['appals', 'appalls'], ['armourers', 'armorers'], ['bannister', 'banister'], ['bannisters', 'banisters'], ['battleaxe', 'battleax'], ['behaviourists', 'behaviorists'], ['bevvies', 'bevies'], ['bevvy', 'bevy'], ['biassing', 'biasing'], ['busing', 'bussing'], ['calliper', 'caliper'], ['callipers', 'calipers'], ['callisthenics', 'calisthenics'], ['cancellation', 'cancelation'], ['cancellations', 'cancelations'], ['catalogued', 'cataloged'], ['centred', 'centered'], ['clarinettist', 'clarinetist'], ['clarinettists', 'clarinetists'], ['connexion', 'connection'], ['connexions', 'connections'], ['cosy', 'cozy'], ['councillors', 'councilors'], ['counsellors', 'counselors'], ['crenellated', 'crenelated'], ['crueller', 'crueler'], ['cruellest', 'cruelest'], ['dialled', 'dialed'], ['dialling', 'dialing'], ['distill', 'distil'], ['distills', 'distils'], ['enrol', 'enroll'], ['enrols', 'enrolls'], ['enthral', 'enthrall'], ['enthrals', 'enthralls'], ['epaulette', 'epaulet'], ['epaulettes', 'epaulets'], ['favourites', 'favorites'], ['favouritism', 'favoritism'], ['flautist', 'flutist'], ['flautists', 'flutists'], ['flavourings', 'flavorings'], ['flavoursome', 'flavorsome'], ['gases', 'gasses'], ['gauging', 'gaging'], ['ghettoise', 'ghettoize'], ['ghettoised', 'ghettoized'], ['ghettoises', 'ghettoizes'], ['gipsies', 'gypsies'], ['groyne', 'groin'], ['groynes', 'groins'], ['gruelling', 'grueling'], ['gruellingly', 'gruelingly'], ['gryphon', 'griffin'], ['gryphons', 'griffins'], ['instal', 'install'], ['instalment', 'installment'], ['instalments', 'installments'], ['instals', 'installs'], ['instil', 'instill'], ['instils', 'instills'], ['jewellers', 'jewelers'], ['labourers', 'laborers'], ['levellers', 'levelers'], ['libellous', 'libelous'], ['licencing', 'licensing'], ['louvred', 'louvered'], ['louvres', 'louvers'], ['manoeuvrability', 'maneuverability'], ['manoeuvrable', 'maneuverable'], ['manoeuvre', 'maneuver'], ['manoeuvred', 'maneuvered'], ['manoeuvres', 'maneuvers'], ['manoeuvring', 'maneuvering'], ['manoeuvrings', 'maneuverings'], ['minibuses', 'minibusses'], ['modellers', 'modelers'], ['moult', 'molt'], ['moulted', 'molted'], ['moulting', 'molting'], ['moults', 'molts'], ['moustache', 'mustache'], ['moustached', 'mustached'], ['moustaches', 'mustaches'], ['moustachioed', 'mustachioed'], ['neighbourhood', 'neighborhood'], ['neighbourhoods', 'neighborhoods'], ['neighbourliness', 'neighborliness'], ['outmanoeuvre', 'outmaneuver'], ['outmanoeuvred', 'outmaneuvered'], ['outmanoeuvres', 'outmaneuvers'], ['outmanoeuvring', 'outmaneuvering'], ['panellist', 'panelist'], ['panellists', 'panelists'], ['philtre', 'filter'], ['philtres', 'filters'], ['ploughshare', 'plowshare'], ['ploughshares', 'plowshares'], ['pouffe', 'pouf'], ['pouffes', 'poufs'], ['practise', 'practice'], ['practised', 'practiced'], ['practises', 'practices'], ['practising', 'practicing'], ['pretence', 'pretense'], ['pretences', 'pretenses'], ['pummelled', 'pummel'], ['pummelling', 'pummeled'], ['pzazz', 'pizzazz'], ['recognisably', 'recognizably'], ['recognisance', 'recognizance'], ['reconnoitred', 'reconnoitered'], ['reconnoitring', 'reconnoitering'], ['revellers', 'revelers'], ['snowploughs', 'snowplow'], ['storeys', 'stories'], ['theatregoer', 'theatergoer'], ['theatregoers', 'theatergoers'], ['tranquillise', 'tranquilize'], ['tranquillised', 'tranquilized'], ['tranquilliser', 'tranquilizer'], ['tranquillisers', 'tranquilizers'], ['tranquillises', 'tranquilizes'], ['tranquillising', 'tranquilizing'], ['tranquilly', 'tranquility'], ['travellers', 'travelers'], ['videodiscs', 'videodisks']];

},{}],3:[function(require,module,exports){
// convert british spellings into american ones
// built with patterns+exceptions from https://en.wikipedia.org/wiki/British_spelling
'use strict';

var exceptions = require('./exceptions').reduce(function (h, a) {
  h[a[0]] = a[1];
  return h;
}, {});

var patterns = [
// ise -> ize
{
  reg: /([^aeiou][iy])s(e|ed|es|ing)?$/,
  repl: '$1z$2'
},

// our -> or
{
  reg: /colour/,
  repl: 'color'
}, {
  reg: /(..)our(ly|y|ite|ed|ing|s|al|ous|ies|full?|able|ably|er|ism|ist|less)?s?$/,
  repl: '$1or$2'
},

// xion -> tion
{
  reg: /([aeiou])xion([ed])?$/,
  repl: '$1tion$2'
},
//logue -> log
{
  reg: /logue?/,
  repl: 'log'
},
// ae -> e
{
  reg: /([o|a])e/,
  repl: 'e'
},
//eing -> ing
{
  reg: /e(ing|able)$/,
  repl: '$1'
},
// illful -> ilful
{
  reg: /([aeiou]+[^aeiou]+[aeiou]+)ll(ful|ment|est|ing|or|er|ed)$/, //must be second-syllable
  repl: '$1l$2'
}, {
  reg: /(..)sation/,
  repl: '$1zation'
}, {
  reg: /isabl(i|e)/,
  repl: 'izabl$1'
}, {
  reg: /iser/,
  repl: 'izer'
}, {
  reg: /(..)sing(ly)?/,
  repl: '$1zing$2'
}, {
  reg: /(i|a)niser/,
  repl: '$1nizer'
}, {
  reg: /isement/,
  repl: 'izement'
},

//re -> er
{
  reg: /euvre/,
  repl: 'euver'
}, {
  reg: /outre/,
  repl: 'outer'
}, {
  reg: /centre/,
  repl: 'center'
},
// re -> er
{
  reg: /(.[^cdnv])re(s)?$/,
  repl: '$1er$2'
}, {
  reg: /fibre/,
  repl: 'fiber'
}, {
  reg: /uring/,
  repl: 'oring'
}, {
  reg: /fence/,
  repl: 'fense'
}, {
  reg: /gramme/,
  repl: 'gram'
}, {
  reg: /anaes/,
  repl: 'anes'
}, {
  reg: /behove/,
  repl: 'behoove'
}, {
  reg: /baulk/,
  repl: 'balk'
}, {
  reg: /biass/,
  repl: 'bias'
}, {
  reg: /alyse/,
  repl: 'alyze'
}, {
  reg: /cheque/,
  repl: 'check'
}, {
  reg: /^cosi/,
  repl: 'cozi'
}, {
  reg: /defenc/,
  repl: 'defens'
}, {
  reg: /draught/,
  repl: 'draft'
}, {
  reg: /duell/,
  repl: 'duel'
}, {
  reg: /fillet/,
  repl: 'filet'
}, {
  reg: /fulfil/,
  repl: 'fulfill'
}, {
  reg: /gaol/,
  repl: 'jail'
}, {
  reg: /gauge/,
  repl: 'gage'
}, {
  reg: /grey/,
  repl: 'gray'
}, {
  reg: /licence/,
  repl: 'license'
}, {
  reg: /manoeuvre/,
  repl: 'maneuver'
}, {
  reg: /marvellous/,
  repl: 'marvelous'
}, {
  reg: /mould/,
  repl: 'mold'
}, {
  reg: /plough/,
  repl: 'plow'
}, {
  reg: /practise/,
  repl: 'practice'
}, {
  reg: /tranquill/,
  repl: 'tranquil'
}, {
  reg: /triall/,
  repl: 'trial'
}, {
  reg: /sceptic/,
  repl: 'skeptic'
}, {
  reg: /sulph/,
  repl: 'sulf'
}, {
  reg: /syphon/,
  repl: 'siphon'
}, {
  reg: /tonne/,
  repl: 'ton'
}, {
  reg: /anaesthetis/,
  repl: 'anesthetiz'
}, {
  reg: /anaesthetise/,
  repl: 'anesthetize'
}, {
  reg: /disc$/,
  repl: 'disk'
}, {
  reg: /tranquillise/,
  repl: 'tranquilize'
}];

var americanize = function americanize(str) {
  if (exceptions[str]) {
    return exceptions[str];
  }
  var single = str.replace(/s$/, ''); //eww
  if (exceptions[single]) {
    return exceptions[single] + 's';
  }
  for (var i = 0; i < patterns.length; i++) {
    if (str.match(patterns[i].reg)) {
      return str.replace(patterns[i].reg, patterns[i].repl);
    }
  }

  return str;
};

// console.log(americanize("synthesise") === "synthesize")
// console.log(americanize('are'));
// console.log(americanize('yoghourt') === 'yogurt');
// console.log(americanize('yoghourts') === 'yogurts');
// console.log(exceptions['yoghourt']);

module.exports = americanize;

},{"./exceptions":2}],4:[function(require,module,exports){
// convert american spellings into british ones
// built with patterns+exceptions from https://en.wikipedia.org/wiki/British_spelling
// (some patterns are only safe to do in one direction)
'use strict';

var exceptions = require('./exceptions').reduce(function (h, a) {
  h[a[1]] = a[0];
  return h;
}, {});

var patterns = [
// ise -> ize
{
  reg: /([^aeiou][iy])z(e|ed|es|ing|er)?$/,
  repl: '$1s$2'
},
// our -> or
{
  reg: /(..)our(ly|y|ite)?$/,
  repl: '$1or$2'
},
// re -> er
{
  reg: /([^cdnv])re(s)?$/,
  repl: '$1er$2'
},
// xion -> tion
{
  reg: /([aeiou])xion([ed])?$/,
  repl: '$1tion$2'
},
//logue -> log
{
  reg: /logue$/,
  repl: 'log'
},
// ae -> e
{
  reg: /([o|a])e/,
  repl: 'e'
},
//eing -> ing
{
  reg: /e(ing|able)$/,
  repl: '$1'
},
// illful -> ilful
{
  reg: /([aeiou]+[^aeiou]+[aeiou]+)ll(ful|ment|est|ing|or|er|ed)$/, //must be second-syllable
  repl: '$1l$2'
}, {
  reg: /ization/,
  repl: 'isation'
}, {
  reg: /izable/,
  repl: 'isable'
}, {
  reg: /orabl/,
  repl: 'ourabl'
}, {
  reg: /zingly/,
  repl: 'singly'
}, {
  reg: /ilizer/,
  repl: 'iliser'
}, {
  reg: /pedic/,
  repl: 'paedic'
}, {
  reg: /anesthes/,
  repl: 'anaesthes'
}, {
  reg: /ar(b|m|d)or/,
  repl: 'ar$1our'
}, {
  reg: /balk/,
  repl: 'baulk'
}, {
  reg: /behavior/,
  repl: 'behaviour'
}, {
  reg: /behove/,
  repl: 'behoove'
}, {
  reg: /canceled/,
  repl: 'cancelled'
}, {
  reg: /catalog/,
  repl: 'catalogue'
}, {
  reg: /meter/,
  repl: 'metre'
}, {
  reg: /center/,
  repl: 'centre'
}, {
  reg: /clamor/,
  repl: 'clamour'
}, {
  reg: /color/,
  repl: 'colour'
}, {
  reg: /defense/,
  repl: 'defence'
}, {
  reg: /endeavor/,
  repl: 'endeavour'
}, {
  reg: /favor/,
  repl: 'favour'
}, {
  reg: /flavor/,
  repl: 'flavour'
}, {
  reg: /filet/,
  repl: 'fillet'
}, {
  reg: /jail/,
  repl: 'gaol'
}, {
  reg: /gray/,
  repl: 'grey'
}, {
  reg: /^hematol/,
  repl: 'haematol'
}, {
  reg: /^hemo/,
  repl: 'haemo'
}, {
  reg: /^install/,
  repl: 'instal'
}, {
  reg: /mold/,
  repl: 'mould'
}, {
  reg: /neighbor/,
  repl: 'neighbour'
}, {
  reg: /odor/,
  repl: 'odour'
}, {
  reg: /^pedo/,
  repl: 'paedo'
}, {
  reg: /^pedia/,
  repl: 'paedia'
}, {
  reg: /^parlor/,
  repl: 'parlour'
}, {
  reg: /plow/,
  repl: 'plough'
}, {
  reg: /skeptic/,
  repl: 'sceptic'
}, {
  reg: /rumor/,
  repl: 'rumour'
}, {
  reg: /practice/,
  repl: 'practise'
}, {
  reg: /maneuver/,
  repl: 'manoeuvre'
}, {
  reg: /level(ed|er|ing)?$/,
  repl: 'levell$1'
}, {
  reg: /travel(ed|er|ing)?$/,
  repl: 'travell$1'
}, {
  reg: /tranquil/,
  repl: 'tranquill'
}, {
  reg: /tranquilize/,
  repl: 'tranquillise'
}, {
  reg: /vigor/,
  repl: 'vigour'
}, {
  reg: /fiber/,
  repl: 'fibre'
}, {
  reg: /drafts/,
  repl: 'draughts'
}, {
  reg: /disk/,
  repl: 'disc'
}, {
  reg: /uel(er|est|ed)/,
  repl: 'uell$1'
}, {
  reg: /cozi(er|est|es|ly)/,
  repl: 'cosi$1'
}, {
  reg: /colorize/,
  repl: 'colourise'
}, {
  reg: /honor/,
  repl: 'honour'
}, {
  reg: /abor(ed|ing)/,
  repl: 'abour$1'
}, {
  reg: /pedal(ed|ing)/,
  repl: 'pedall$1'
}, {
  reg: /shovel(ed|ing|er)/,
  repl: 'shovell$1'
}, {
  reg: /al(ed|ing|er)/,
  repl: 'all$1'
}, {
  reg: /el(ed|ing|er)/,
  repl: 'ell$1'
}, {
  reg: /ol(ed|ing|er)/,
  repl: 'oll$1'
}, {
  reg: /avor(ed|ing|er)/,
  repl: 'avour$1'
}, {
  reg: /anesth/,
  repl: 'anaesth'
}, {
  reg: /behoove/,
  repl: 'behove'
}, {
  reg: /sulfur/,
  repl: 'sulphur'
}];

var britishize = function britishize(str) {
  if (exceptions[str]) {
    return exceptions[str];
  }
  var single = str.replace(/s$/, ''); //eww
  if (exceptions[single]) {
    return exceptions[single];
  }
  for (var i = 0; i < patterns.length; i++) {
    if (str.match(patterns[i].reg)) {
      return str.replace(patterns[i].reg, patterns[i].repl);
    }
  }
  return str;
};

// console.log(britishize("synthesize") === "synthesise")
// console.log(britishize("synthesized") === "synthesised")

module.exports = britishize;

},{"./exceptions":2}]},{},[1])(1)
});