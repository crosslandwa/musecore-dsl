const writeToMscx = require('./lib/writeToMscx.js')
const { chord, lineBreak, measure, repeatEnd, repeatStart, rest, song, text, timeSig } = require('./lib/dsl')

const x = 'x'
const C = { name: 'C', notes: [x, 3, 2, 0, 1, 0] }
const Cmaj7 = { name: 'Cmaj7', notes: [x, 3, 2, 0, 0, x] }
const Cadd9 = { name: 'Cadd9', notes: [x, 3, 2, 0, 3, 3] }
const D = { name: 'D', notes: [x, x, 0, 2, 3, 2] }
const Dsus = { name: 'Dsus', notes: [x, x, 0, 2, 3, 3] }
const D7sus2 = { name: 'D7sus2', notes: [x, x, 0, 2, 1, 0] }
const D6 = { name: 'D6', notes: [x, x, 0, 2, 0, 2] }
const G = { name: 'G', notes: [3, 2, 0, 0, 3, 3] }
const Em = { name: 'Em', notes: [0, 2, 2, 0, 0, 0] }


const measure44 = (...args) => measure('4/4')(...args)

const verse = (t, ts) => [
  measure44(text(t), ts ? timeSig() : '', chord(G, 1)), measure44(chord(Cadd9, 1), chord(G, 3)),
  measure44(chord(G, 1)), measure44(chord(Dsus, 1), chord(D, 2.5)),
  measure44(chord(Em, 1)), measure44(chord(Cmaj7, 1)),
  measure44(chord(G, 1), chord(Cadd9, 3)), measure44(chord(G, 1), repeatEnd(), lineBreak())
]

const chorus = () => [
  measure44(text('chorus'), chord(G, 1)), measure44(chord(Cadd9, 1), chord(G, 3)),
  measure44(chord(G, 1)), measure44(chord(Cmaj7, 1), chord(G, 3)),
  measure44(chord(Em, 1)), measure44(chord(Cmaj7, 1)),
  measure44(chord(G, 1), chord(Cadd9, 3)), measure44(chord(G, 1), lineBreak()),
]
const turnThePage = song('Turn the page', 'Jones / Crossland / Knudsen',
  ...verse('intro / verse 1', true),

  ...chorus(),

  ...verse('verse 2'),

  ...chorus(),

  measure44(text('middle 9 ("as they grow...")'), chord(C, 1), chord(G, 4.5)), measure44(),
  measure44(chord(C, 1), chord(G, 4.5)), measure44(lineBreak()),
  measure44(chord(Em, 1), chord(D6, 4.5)), measure44(chord(D, 3.5)),
  measure44(chord(C, 1)), measure44(chord(D7sus2, 1)), measure44(chord(D, 1), lineBreak()),

  ...chorus(),

  measure44(text('outro'), chord(G, 1), chord(Cmaj7, 3)), measure44(chord(G, 1)),
)

writeToMscx('Turn The Page', turnThePage)
