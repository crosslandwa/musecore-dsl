const writeMscz = require('./lib/writeMscz.js')
const { song, measure, chord, hold, rest } = require('./lib/dsl')

const x = 'x'
const C = { offset: 0, name: 'C', notes: [x, 3, 2, 0, 1, 3] }
const CAdd9 = { offset: 0, name: 'CAdd9', notes: [x, 3, 2, 0, 3, 3] }
const D = { offset: 0, name: 'D', notes: [x, x, 0, 2, 3, 2] }
const G = { offset: 0, name: 'G', notes: [3, 2, 0, 0, 3, 3] }
const Em = { offset: 6, name: 'Em', notes: [0, 1, 3, 3, 2, 1] }

const songData = song('My song title', 'Ernie Bobbins',
  measure(chord(CAdd9, 2), chord(D, 2)),
  measure(chord(CAdd9, 1), chord(Em, 3)),
  measure(chord(CAdd9, 1), chord(Em, 3)),
  measure(chord(CAdd9, 1), chord(Em, 3)),
  // measure(hold(4)),
  // measure(chord(CAdd9, 3.5), chord(G, 0.5)),
  // measure(hold(4)),
  // measure(chord(Em, 3.5), chord(CAdd9, 0.5)),
  // measure(hold(3.5), chord(D, 0.5)),
  // measure(hold(4)),
  // measure(chord(D, 3), rest(1))
)
console.log(songData)
writeMscz('A Test Song', songData)
