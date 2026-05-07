export const isSubset = <T>(a: T[], b: T[]): boolean => {
  const set = new Set(b)
  return a.every(item => set.has(item))
}