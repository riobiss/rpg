export default function dice(quantity: number, sides: number): number[] {
  function roll(): number {
    return Math.floor(Math.random() * sides) + 1
  }

  const results: number[] = []

  for (let i = 0; i < quantity; i++) {
    results.push(roll())
  }

  return results
}
