var SMTH = Symbol.for('smth')

// this version causes the "polyfill bloat" to be added to both cjs & esm outputs
//
// const isSmth = (smth) => {
//   return smth && !!smth[SMTH]
// }

function isSmth(smth) {
  return smth && !!smth[SMTH]
}

export { isSmth }
