const chord = ({ offset = 0, name, notes }, positionInBeatsOneIndexed) => {
  const { root, voice } = parseNoteName(name)
  const position = parseInt((positionInBeatsOneIndexed - 1) / 0.5)
  return `
<location>
  <fractions>${position}/8</fractions>
</location>
<Harmony>
  <root>${root}</root>
  <name>${voice}</name>
  <size>10</size>
  <offset x="${voice.length * -0.25}" y="-2"/>
</Harmony>
<FretDiagram>
  <frets>${numberOfFrets(notes)}</frets>
  ${offset > 0 ? `<fretOffset>${offset}</fretOffset>` : ''}
  ${notes.map(string).join('\n')}
</FretDiagram>
<location>
  <fractions>${-1 * position}/8</fractions>
</location>
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
