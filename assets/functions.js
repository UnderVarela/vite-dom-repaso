export function esNumeroString (numberValue) {
  if (numberValue === undefined) throw new Error('Arguments not found')
  return !isNaN(numberValue) && numberValue.trim().length
}
