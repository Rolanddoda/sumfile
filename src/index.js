import * as h from './helpers'

export async function cli(argv) {
  const args = argv.slice(2)
  const file = await h.getFile(args)

  console.log('hmm that works')
}
