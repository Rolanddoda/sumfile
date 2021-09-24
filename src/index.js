import { getFile } from './utils/get-file'

export async function cli(argv) {
  const args = argv.slice(2)
  const file = await getFile(args)

  console.log(file)
}
