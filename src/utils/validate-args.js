import * as h from './helpers'

export function validateArgs(args) {
  if (!args.length)
    h.stop(
      "You didn't specified any argument. Please specify a path to a file to read and sum numbers"
    )

  if (args.length > 1)
    console.log(
      'You specified too many arguments! Only the first one is going to be taken into consideration'
    )

  const firstArg = args[0]

  if (firstArg === 'help') {
    h.stop(
      `This is a simple tool. You just have to type in your terminal the path of the text file and the tool will sum the numbers and print the result.\nExample: sumfile SALARIES.txt`
    )
  }

  if (!firstArg.endsWith('.txt')) h.stop('Please specify a path to a file which ends with .txt')
}
