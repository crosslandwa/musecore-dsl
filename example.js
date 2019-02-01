const writeToMscx = require('./lib/writeToMscx.js')
const { chord, lineBreak, measure, repeatEnd, repeatStart, rest, song, text, timeSig } = require('./lib/dsl')

const x = 'x'
const C = { name: 'C', notes: [x, 3, 2, 0, 1, 3] }
const Cmaj7 = { name: 'Cmaj7', notes: [x, 3, 2, 0, 0, 3] }
const Cadd9 = { name: 'Cadd9', notes: [x, 3, 2, 0, 3, 3] }
const D = { name: 'D', notes: [x, x, 0, 2, 3, 2] }
const G = { name: 'G', notes: [3, 2, 0, 0, 3, 3] }
const Em = { name: 'Em', notes: [0, 2, 2, 0, 0, 0] }

/*
TODO
[x] rests
[x] ring out
*/

const songData = song('My song title', 'Ernie Bobbins',
  measure('4/4')(text('verse 1'), timeSig(), chord(Cadd9, 1), chord(D, 4.5)),
  measure('4/4')(chord(Cadd9, 1), chord(Em, 3)),
  measure('3/4')(timeSig(), chord(Cadd9, 1), chord(Em, 3), lineBreak()),
  measure('3/4')(),
  measure('4/4')(timeSig(), chord(Cadd9, 1), chord(Em, 3)),
  measure('4/4')(),
  measure('4/4')(chord(Cadd9, 1), chord(G, 4.5)),
  measure('4/4')(lineBreak()),
  measure('4/4')(chord(Em, 1), chord(Cadd9, 4.5), repeatStart(), repeatEnd()),
  measure('4/4')(chord(D, 4.5)),
  measure('4/4')(),
  measure('4/4')(chord(D, 3), rest(1))
)
writeToMscx('A Test Song', songData)
