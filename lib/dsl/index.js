const song = require('./song')
const measure = require('./measure')
const chord = require('./chord')

const hold = (lengthInBeats) => {
  return ''
}

const rest = (lengthInBeats) => {
  // <Rest>
  //   <durationType>eighth</durationType>
  // </Rest>
  return ''
}

module.exports = { measure, chord, hold, rest, song }
