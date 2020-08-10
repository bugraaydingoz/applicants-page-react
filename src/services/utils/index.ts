export function delayFor(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), milliseconds)
  })
}

export function random(min: number, max: number) {
  return Math.floor(Math.random() * max) + min
}
