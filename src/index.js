
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var SMTH = hasSymbol ? Symbol.for('smth') : '@@smth';

// this version causes the "polyfill bloat" to be added to both cjs & esm outputs
//
// const isSmth = (smth) => {
//   return smth && !!smth[SMTH]
// }

function isSmth(smth) {
  return smth && !!smth[SMTH]
}

export { isSmth }
