const writeToMscx = require('./lib/writeToMscx.js')
const { chord, lineBreak, measure, repeatEnd, repeatStart, rest, song, text, timeSig } = require('./lib/dsl')

const x = 'x'
const A = { name: 'A', notes: [x, 0, 2, 2, 2, 0] }
const D = { name: 'D', notes: [x, 0, 0, 2, 3, 2] }
const E = { name: 'E', notes: [0, 2, 2, 1, 0, 0] }
const Fsm = { name: 'F#m', notes: [2, 4, 4, 2, 2, 2] }
const Csm = { name: 'C#m', notes: [x, 4, 6, 6, 5, 4] }

/*
TODO
[x] rests
[x] ring out
*/

const songData = song('Andy is a drinking song', 'Andy K',
  measure('4/4')(text('intro'), timeSig(), chord(A, 1), repeatStart()),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(E, 1), repeatEnd()),

  measure('4/4')(text('verse1'), chord(A, 1), repeatStart()),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(E, 1), repeatEnd()),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(E, 1), chord(A, 3)),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(E, 1)),
  measure('4/4')(chord(A, 1)),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(E, 1)),

  measure('4/4')(text('chorus 1'), chord(D, 1), repeatStart()),
  measure('4/4')(chord(A, 1)),
  measure('4/4')(chord(E, 1)),
  measure('4/4')(chord(Fsm, 1), repeatEnd()),
  measure('4/4')(chord(D, 1)),
  measure('4/4')(chord(A, 1)),
  measure('4/4')(chord(E, 1)),

  measure('4/4')(text('re-intro'), chord(A, 1), repeatStart()),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(E, 1), repeatEnd()),

  measure('4/4')(text('verse2'), chord(A, 1), repeatStart()),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(E, 1), repeatEnd()),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(E, 1), chord(A, 3)),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(E, 1)),
  measure('4/4')(chord(A, 1)),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(E, 1)),

  measure('4/4')(text('chorus 2'), chord(D, 1), repeatStart()),
  measure('4/4')(chord(A, 1)),
  measure('4/4')(chord(E, 1)),
  measure('4/4')(chord(Fsm, 1), repeatEnd()),
  measure('4/4')(chord(D, 1)),
  measure('4/4')(chord(A, 1)),
  measure('4/4')(chord(E, 1)),
  measure('4/4')(chord(A, 1)),

  measure('4/4')(text('middle 4'), chord(Fsm, 1)),
  measure('4/4')(chord(Fsm, 1)),
  measure('4/4')(chord(A, 1)),
  measure('4/4')(chord(A, 1)),
  measure('4/4')(chord(Csm, 1)),
  measure('4/4')(chord(Csm, 1)),

  measure('4/4')(text('2/3 chorus'), chord(D, 1)),
  measure('4/4')(chord(A, 1)),
  measure('4/4')(chord(E, 1)),
  measure('4/4')(chord(Fsm, 1)),
  measure('4/4')(chord(D, 1)),
  measure('4/4')(chord(A, 1)),
  measure('4/4')(chord(E, 1)),

  measure('4/4')(text('instrumental verse3'), chord(A, 1), repeatStart()),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(E, 1), repeatEnd()),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(E, 1), chord(A, 3)),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(E, 1)),
  measure('4/4')(chord(A, 1)),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(D, 1), chord(A, 3)),
  measure('4/4')(chord(E, 1)),

  measure('4/4')(text('last chorus'), chord(D, 1), repeatStart()),
  measure('4/4')(chord(A, 1)),
  measure('4/4')(chord(E, 1)),
  measure('4/4')(chord(Fsm, 1), repeatEnd()),
  measure('4/4')(chord(D, 1)),
  measure('4/4')(chord(A, 1)),
  measure('4/4')(chord(E, 1)),
  measure('4/4')(chord(A, 1)),
)
writeToMscx('Andys Drinking Song', songData)
