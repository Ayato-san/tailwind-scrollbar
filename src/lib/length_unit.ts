/**
 * Extracts the unit from a given string value.
 *
 * @param value - The string containing a numeric value followed by a unit (e.g., "10px", "5em").
 * @returns The unit part of the string (e.g., "px", "em"). If no unit is found, returns an empty string.
 */
function getUnit(value: string) {
  return value.match(/[a-z]+/i)?.[0] || ''
}

/**
 * Extracts the numeric value from a given string and converts it to a floating-point number.
 *
 * @param value - The string containing the numeric value to be extracted.
 * @returns The extracted numeric value as a floating-point number. If no numeric value is found, returns 0.
 */
function getValue(value: string) {
  return parseFloat(value.match(/[0-9]+/i)?.[0] || '0')
}

export { getUnit, getValue }
