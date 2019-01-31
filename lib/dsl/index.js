const song = require('./song')
const measure = require('./measure')
const chord = require('./chord')

const rest = (lengthInBeats) => {
  // <Rest>
  //   <durationType>eighth</durationType>
  // </Rest>
  return ''
}

const lineBreak = () => ({ metaType: 'lineBreak' })

const text = text => ({ metaType: 'text', text })

const timeSig = sig => ({ metaType: 'timeSig', n: sig.split('/')[0], d: sig.split('/')[1] })

module.exports = { measure, chord, lineBreak, rest, song, text, timeSig }
