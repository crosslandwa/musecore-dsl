/*
TODO
[/] turn note name into <harmony><root>
[/] how to do a x symbol for an unplayed string?
[x] generate "notes" based on lengthInBeats
[/] offset for fretboard diagram
*/

const chord = ({ offset, name, notes }, lengthInBeats) => {
  const { root, voice } = parseNoteName(name)
  const quarterNotes = [...Array(Math.floor(lengthInBeats)).keys()]
  const eighthNotes = [...Array(Math.floor((lengthInBeats / 0.5) - (quarterNotes.length * 2))).keys()]
  return `
<Harmony>
  <root>${root}</root>
  <name>${voice}</name>
  <offset x="${voice.length * -1}" y="-2"/>
</Harmony>
<FretDiagram>
  <frets>${numberOfFrets(notes)}</frets>
  ${offset > 0 ? `<fretOffset>${offset}</fretOffset>` : ''}
  ${notes.map(string).join('\n')}
</FretDiagram>
${quarterNotes.map(i => `
  <Chord>
    <durationType>quarter</durationType>
    <noStem>1</noStem>
    <Note>
      <pitch>71</pitch>
      <tpc>19</tpc>
      <head>slash</head>
    </Note>
  </Chord>
`.trim())}
${eighthNotes.map(i => `
  <Chord>
    <durationType>eighth</durationType>
    <noStem>1</noStem>
    <Note>
      <pitch>71</pitch>
      <tpc>19</tpc>
      <head>slash</head>
    </Note>
  </Chord>
`.trim())}
`.trim()
}

const parseNoteName = name => {
  const note = (name.includes('b') || name.includes('#')) ? name.slice(0, 2) : name.slice(0, 1)
  return {
    root: rootLookup[note],
    voice: name.slice(note.length)
  }
}

const rootLookup = {
  'Cb': 7,
  'C': 14,
  'C#': 21,
  'Db': 9,
  'D': 16,
  'D#': 23,
  'Eb': 11,
  'E': 18,
  'E#': 25,
  'Fb': 6,
  'F': 13,
  'F#': 20,
  'Gb': 8,
  'G': 15,
  'G#': 22,
  'Ab': 10,
  'A': 17,
  'A#': 24,
  'Bb': 12,
  'B': 19,
  'B#': 26
}

const numberOfFrets = notes => Math.max(...notes.map(note => isNaN(note) ? 0 : note)) + 1

const string = (note, index) => {
  switch (note) {
    case 'x':
      return `<string no="${index}"><marker>88</marker></string>`
    case 0:
      return `<string no="${index}"><marker>79</marker></string>`
  }
  return `<string no="${index}"><dot>${note}</dot></string>`
}

module.exports = chord
