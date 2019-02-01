const addText = t => t
  ? `
<StaffText>
  <italic>1</italic>
  <offset x="-8" y="-2"/>
  <text>${t}</text>
</StaffText>`.trim()
  : ''

const addTimeSig = (show, n, d) => show
  ? `
<TimeSig>
  <sigN>${n}</sigN>
  <sigD>${d}</sigD>
</TimeSig>
  `.trim()
  : ''

const addLineBreak = add => add ? '<LayoutBreak><subtype>line</subtype></LayoutBreak>' : ''

const addRepeatEnd = add => add ? '<endRepeat>2</endRepeat>' : ''
const addRepeatStart = add => add ? '<startRepeat/>' : ''

const defaultTo4 = x => {
  const i = parseInt(x)
  return (isNaN(i) || i < 1) ? 4 : i
}

const measure = sig => (...items) => {
  const n = defaultTo4(sig.split('/')[0])
  const d = defaultTo4(sig.split('/')[1])
  const lineBreak = !!items.filter(item => item.metaType === 'lineBreak').length
  const timeSig = !!items.filter(item => item.metaType === 'timeSig').length
  const text = (items.filter(item => item.metaType === 'text')[0] || {}).text
  const repeatEnd = !!items.filter(item => item.metaType === 'repeatEnd').length
  const repeatStart = !!items.filter(item => item.metaType === 'repeatStart').length
  const quarterNotes = [...Array(n).keys()]
  return `
<Measure>
  ${addLineBreak(lineBreak)}
  ${addRepeatStart(repeatStart)}
  ${addRepeatEnd(repeatEnd)}
  <voice>
    ${addTimeSig(timeSig, n, d)}
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
