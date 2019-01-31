const fs = require('fs')

const createDir = (dir, resolve, reject) => { fs.mkdir(dir, err => err ? reject(err) : resolve()) }

const createDirs = () => Promise.resolve()
  .then(() => new Promise((resolve, reject) => fs.access('./generated', err => err ? createDir('./generated', resolve, reject) : resolve())))

const writeToFile = (filename, data) => new Promise(
  (resolve, reject) => fs.writeFile(filename, data, err => err ? reject(err) : resolve(data))
)

const writeToMscx = (songName, song) => {
  const normalisedFilename = songName.trim().replace(/\s+/, '_')
  createDirs()
    .then(content => writeToFile(`./generated/${normalisedFilename}.mscx`, song))
    .catch(console.error)
}

module.exports = writeToMscx
