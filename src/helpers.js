import { readFile } from 'fs/promises'

function stop(message) {
  console.log(message)
  process.exit(1)
}

function correctArgsPassed(args) {
  if (!args.length)
    stop(
      "You didn't specified any argument. Please specify a path to a file to read and sum numbers"
    )

  if (args.length > 1)
    console.log(
      'You specified too many arguments! Only the first one is going to be taken into consideration'
    )

  const firstArg = args[0]

  if (firstArg === 'help') {
    stop(
      `This is a simple tool. You just have to type in your terminal the path of the text file and the tool will sum the numbers and print the result.\nExample: sumfile SALARIES.txt`
    )
  }

  if (!firstArg.endsWith('.txt')) stop('Please specify a path to a file which ends with .txt')

  return true
}

export async function getFile(args) {
  if (!correctArgsPassed(args)) return

  let file

  try {
    file = await readFile(args[0], 'utf8')
  } catch (e) {
    stop('File not found')
  }

  return file
}
