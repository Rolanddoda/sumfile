import * as h from './utils/helpers'
import { getFile } from './utils/get-file'
import { validateArgs } from './utils/validate-args'
import path from 'path'

async function getSumsOfFiles(filename, cmdDirectory, sumsObj = {}, fileAccess = 0) {
  const file = await getFile(cmdDirectory + '/' + filename)
  const linesOfFile = file.split(/\r?\n/)
  let sum = 0

  for (const line of linesOfFile) {
    if (h.isNumber(line)) sum += +line
    else {
      const filePath = line.trim()
      const fileSumObj = await getSumsOfFiles(filePath, cmdDirectory, sumsObj, fileAccess + 1)
      sum += +fileSumObj[filePath].sum
    }
  }

  sumsObj[filename] = { sum, fileAccess: fileAccess }

  return sumsObj
}

export async function cli(argv) {
  const args = argv.slice(2)
  validateArgs(args)

  const pwdDirectory = path.dirname(args[0]).split(path.sep).pop()
  const filename = path.basename(args[0])
  const sums = await getSumsOfFiles(filename, pwdDirectory)
  const sumsArraySorted = Object.entries(sums).sort((a, b) => a[1].fileAccess - b[1].fileAccess)

  for (const [fileName, { sum }] of sumsArraySorted) {
    console.log(`${fileName} - ${sum}`)
  }
}
