export function stop(message) {
  console.log(message)
  process.exit(1)
}

export function isNumber(val) {
  return !isNaN(val)
}
