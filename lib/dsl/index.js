const song = require('./song')
const measure = require('./measure')
const chord = require('./chord')

const rest = (lengthInBeats) => {
  // <Rest>
  //   <durationType>eighth</durationType>
  // </Rest>
  return ''
}

const repeatEnd = () => ({ metaType: 'repeatEnd' })
const repeatStart = () => ({ metaType: 'repeatStart' })

const lineBreak = () => ({ metaType: 'lineBreak' })

const text = text => ({ metaType: 'text', text })

const timeSig = sig => ({ metaType: 'timeSig' })

module.exports = { measure, chord, lineBreak, repeatEnd, repeatStart, rest, song, text, timeSig }
