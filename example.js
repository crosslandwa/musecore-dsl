const writeMscz = require('./lib/writeMscz.js')
const { song, measure, chord, rest, lineBreak, text, timeSig } = require('./lib/dsl')

const x = 'x'
const C = { offset: 0, name: 'C', notes: [x, 3, 2, 0, 1, 3] }
const CAdd9 = { offset: 0, name: 'CAdd9', notes: [x, 3, 2, 0, 3, 3] }
const D = { offset: 0, name: 'D', notes: [x, x, 0, 2, 3, 2] }
const G = { offset: 0, name: 'G', notes: [3, 2, 0, 0, 3, 3] }
const Em = { offset: 6, name: 'Em', notes: [0, 1, 3, 3, 2, 1] }

/*
TODO
[x] rests
[x] handle non 4/4 time
*/
const songData = song('My song title', 'Ernie Bobbins',
  measure(text('verse 1'), timeSig('4/4'), chord(CAdd9, 1), chord(D, 4.5)),
  measure(chord(CAdd9, 1), chord(Em, 3)),
  measure(chord(CAdd9, 1), chord(Em, 3)),
  measure(lineBreak()),
  measure(chord(CAdd9, 1), chord(Em, 3)),
  measure(),
  measure(chord(CAdd9, 1), chord(G, 4.5)),
  measure(lineBreak()),
  measure(chord(Em, 1), chord(CAdd9, 4.5)),
  measure(chord(D, 4.5)),
  measure(),
  measure(chord(D, 3), rest(1))
)
writeMscz('A Test Song', songData)
