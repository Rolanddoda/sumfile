import { validateArgs } from './utils/validate-args'
import { getSumsOfFiles } from './utils/get-sum-of-files'
// Libraries
import path from 'path'

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

cli(process.argv)
