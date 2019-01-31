const fs = require('fs')

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

const writeToMscz = (songName, song) => {
  const normalisedFilename = songName.trim().replace(/\s+/, '_')
  createDirs(normalisedFilename)
    .then(() => writeToFile(`./generated/${normalisedFilename}/META-INF/container.xml`, container(normalisedFilename)))
    .then(content => writeToFile(`./generated/${normalisedFilename}/${normalisedFilename}.mscx`, song))
    .catch(console.error)
}

module.exports = writeToMscz
