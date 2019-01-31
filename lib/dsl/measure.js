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
  return `
<Measure>
  <voice>
    ${extras.timeSig ? timeSig(...extras.timeSig.split('/')) : '' }
    ${text(extras.text)}
    ${items.join('\n')}
  </voice>
</Measure>
`.trim()
}

module.exports = measure
