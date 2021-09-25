import { stop } from './helpers'

const filesMapStack = []

export function checkForCircularDependencies(currentFileName, targetFileName) {
  if (currentFileName === targetFileName)
    stop(`Circular dependency problem! ${currentFileName} can't import ${targetFileName}`)

  if (filesMapStack.includes(currentFileName)) {
    const index = filesMapStack.findIndex((f) => f === currentFileName)
    if (filesMapStack[index + 1] === targetFileName) {
      stop(
        `You ran into a circular dependency problem. ${currentFileName} gets imported from ${
          filesMapStack[filesMapStack.length - 1]
        } but ${currentFileName} already imports ${filesMapStack[filesMapStack.length - 1]}`
      )
    }
  } else filesMapStack.push(currentFileName)
}
