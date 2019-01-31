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
*/
const songData = song('My song title', 'Ernie Bobbins',
  measure('4/4')(text('verse 1'), timeSig(), chord(CAdd9, 1), chord(D, 4.5)),
  measure('4/4')(chord(CAdd9, 1), chord(Em, 3)),
  measure('3/4')(timeSig(), chord(CAdd9, 1), chord(Em, 3)),
  measure('3/4')(lineBreak()),
  measure('4/4')(timeSig(), chord(CAdd9, 1), chord(Em, 3)),
  measure('4/4')(),
  measure('4/4')(chord(CAdd9, 1), chord(G, 4.5)),
  measure('4/4')(lineBreak()),
  measure('4/4')(chord(Em, 1), chord(CAdd9, 4.5)),
  measure('4/4')(chord(D, 4.5)),
  measure('4/4')(),
  measure('4/4')(chord(D, 3), rest(1))
)
writeMscz('A Test Song', songData)
