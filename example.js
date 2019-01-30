const writeMscz = require('./lib/writeMscz.js')
const { song, bar, chord, hold, rest } = require('./lib/dsl.js')

const x = 'x'
const C = { offset: 0, name: 'C', notes: [x, 3, 2, 0, 1, 3] }
const CAdd9 = { offset: 0, name: 'CAdd9', notes: [x, 3, 2, 0, 3, 3] }
const D = { offset: 0, name: 'D', notes: [x, x, 0, 2, 3, 2] }
const G = { offset: 0, name: 'G', notes: [3, 2, 0, 0, 3, 3] }
const Em = { offset: 4, name: 'Em', notes: [x, 3, 5, 5, 6, 3] }

writeMscz(
  'A Test Song',
  'Generic.ejs', // this might be fixed... I might supply different templates if the "song" has stuff that isn't generated through the DSL...
  song([
    bar(chord(CAdd9, 3.5), chord(G, 0.5)),
    bar(hold(4)),
    bar(chord(CAdd9, 3.5), chord(G, 0.5)),
    bar(hold(4)),
    bar(chord(Em, 3.5), chord(CAdd9, 0.5)),
    bar(hold(3.5), chord(D, 0.5)),
    bar(hold(4)),
    bar(chord(D, 3), rest(1))
  ])
)
