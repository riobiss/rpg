export default function dice(sides: number) {
  return Math.floor(Math.random() * sides) + 1
}
