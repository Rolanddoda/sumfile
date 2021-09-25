import { getFile } from './get-file'
import * as h from './helpers'
import { checkForCircularDependencies } from './check-for-circular-dependencies'

export async function getSumsOfFiles(filename, cmdDirectory, sumsObj = {}, fileAccess = 0) {
  const file = await getFile(cmdDirectory + '/' + filename)
  const linesOfFile = file.split(/\r?\n/)
  let sum = 0

  for (const line of linesOfFile) {
    if (h.isNumber(line)) sum += +line
    else {
      checkForCircularDependencies(filename, line.trim())

      const filePath = line.trim()
      const fileSumObj = await getSumsOfFiles(filePath, cmdDirectory, sumsObj, fileAccess + 1)

      sum += +fileSumObj[filePath].sum
    }
  }

  sumsObj[filename] = { sum, fileAccess: fileAccess }

  return sumsObj
}
