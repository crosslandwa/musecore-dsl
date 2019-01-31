const text = t => t
  ? `
<StaffText>
  <italic>1</italic>
  <offset x="-8" y="-2"/>
  <text>${t}</text>
</StaffText>`.trim()
  : ''

const timeSig = (n, d) => `
<TimeSig>
  <sigN>${n}</sigN>
  <sigD>${d}</sigD>
</TimeSig>
`.trim()

const measure = (...chords) => {
  const extrasPassed = !!(chords[0].text || chords[0].timeSig)
  const extras = extrasPassed ? chords[0] : {}
  const items = chords.slice(extrasPassed ? 1 : 0)
  const quarterNotes = [...Array(4).keys()] // TODO base this on timeSig
  return `
<Measure>
  <LayoutBreak>
    <subtype>line</subtype>
  </LayoutBreak>
  <voice>
    ${extras.timeSig ? timeSig(...extras.timeSig.split('/')) : '' }
    ${text(extras.text)}
    ${items.join('\n')}
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
    `.trim()).join('\n')}
  </voice>
</Measure>
`.trim()
}

module.exports = measure
