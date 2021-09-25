import * as h from './utils/helpers'
import { getFile } from './utils/get-file'
import { validateArgs } from './utils/validate-args'
import path from 'path'

async function getSumsOfFiles(filename, sumsObj, cmdDirectory) {
  const file = await getFile(cmdDirectory + '/' + filename)
  const linesOfFile = file.split(/\r?\n/)
  let sum = 0

  for (const line of linesOfFile) {
    if (h.isNumber(line)) sum += +line
    else {
      const filePath = line.trim()
      const fileSumObj = await getSumsOfFiles(filePath, sumsObj, cmdDirectory)
      sum += +fileSumObj[filePath]
    }
  }

  sumsObj[filename] = sum

  return sumsObj
}

export async function cli(argv) {
  const args = argv.slice(2)
  validateArgs(args)

  const pwdDirectory = path.dirname(args[0]).split(path.sep).pop()
  const filename = path.basename(args[0])
  const sums = await getSumsOfFiles(filename, {}, pwdDirectory)

  for (const [fileName, sum] of Object.entries(sums)) {
    console.log(`${fileName} - ${sum}`)
  }
}
