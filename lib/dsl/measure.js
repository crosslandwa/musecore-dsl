const addText = t => t
  ? `
<StaffText>
  <italic>1</italic>
  <offset x="-8" y="-2"/>
  <text>${t}</text>
</StaffText>`.trim()
  : ''

const addTimeSig = ({n, d}) => n
  ? `
<TimeSig>
  <sigN>${n}</sigN>
  <sigD>${d}</sigD>
</TimeSig>
  `.trim()
  : ''

const addLineBreak = add => add ? '<LayoutBreak><subtype>line</subtype></LayoutBreak>' : ''

const measure = (...items) => {
  const extrasPassed = false
  const extras = {}
  const lineBreak = !!items.filter(item => item.metaType === 'lineBreak').length
  const timeSig = items.filter(item => item.metaType === 'timeSig')[0] || {}
  const text = (items.filter(item => item.metaType === 'text')[0] || {}).text
  const quarterNotes = [...Array(4).keys()] // TODO base this on timeSig
  return `
<Measure>
  ${addLineBreak(lineBreak)}
  <voice>
    ${addTimeSig(timeSig)}
    ${addText(text)}
    ${items.filter(item => !item.metaType).join('\n')}
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
