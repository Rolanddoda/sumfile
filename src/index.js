import { getFile } from './utils/get-file'
import * as h from './utils/helpers'

async function getSumsOfFiles(filePath) {
  const file = await getFile([filePath])
  const linesOfFile = file.split(/\r?\n/)
  let sum = 0

  for (const line of linesOfFile) {
    if (h.isNumber(line)) sum += +line
    else sum += await getSumsOfFiles(line)
  }

  return sum
}

export async function cli(argv) {
  const args = argv.slice(2)
  const sums = await getSumsOfFiles(args[0])

  console.log(sums)
}
