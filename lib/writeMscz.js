const fs = require('fs')
const { renderFile } = require('ejs')

const createDir = (dir, resolve, reject) => { fs.mkdir(dir, err => err ? reject(err) : resolve()) }

const createDirs = songName => Promise.resolve()
  .then(() => new Promise((resolve, reject) => fs.access('./generated', err => err ? createDir('./generated', resolve, reject) : resolve())))
  .then(() => new Promise((resolve, reject) => fs.access(`./generated/${songName}`, err => err ? createDir(`./generated/${songName}`, resolve, reject) : resolve())))
  .then(() => new Promise((resolve, reject) => fs.access(`./generated/${songName}/META-INF`, err => err ? createDir(`./generated/${songName}/META-INF`, resolve, reject) : resolve())))

const container = songName => `<?xml version="1.0" encoding="UTF-8"?>
<container>
  <rootfiles>
    <rootfile full-path="${songName}.mscx">
    </rootfile>
  </rootfiles>
</container>
`

const writeToFile = (filename, data) => new Promise(
  (resolve, reject) => fs.writeFile(filename, data, err => err ? reject(err) : resolve(data))
)

const renderDsl = (template, templateData) => new Promise((resolve, reject) => {
  renderFile(`templates/${template}`, templateData, {}, (err, str) => err ? reject(err) : resolve(str))
})

const templateData = (songName, song) => ({ composer: 'It was me', title: songName })

const writeToMscz = (songName, template, song) => {
  const normalisedFilename = songName.replace(/\s+/, '_')
  createDirs(normalisedFilename)
    .then(() => writeToFile(`./generated/${normalisedFilename}/META-INF/container.xml`, container(normalisedFilename)))
    .then(() => renderDsl(template, templateData(songName, song)))
    .then(content => writeToFile(`./generated/${normalisedFilename}/${normalisedFilename}.mscx`, content))
    .catch(console.error)
}

module.exports = writeToMscz
