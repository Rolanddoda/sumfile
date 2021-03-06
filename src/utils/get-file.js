import * as h from './helpers'
// Libraries
import { promises } from 'fs'
const { readFile } = promises

export async function getFile(path) {
  let file

  try {
    file = await readFile(path, 'utf8')
  } catch (e) {
    h.stop(`Could not find file ${path}`)
  }

  return file
}
