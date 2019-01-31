const text = t => t
  ? `
<StaffText>
  <italic>1</italic>
  <offset x="-8" y="-2"/>
  <text>${t}</text>
</StaffText>`.trim()
  : ''

const measure = (...chords) => {
  return `
<Measure>
  <voice>
    <TimeSig>
      <sigN>4</sigN>
      <sigD>4</sigD>
    </TimeSig>
    ${text()}
    ${chords.join('\n')}
  </voice>
</Measure>
`.trim()
}

module.exports = measure
