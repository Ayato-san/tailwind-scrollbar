type KeyPairValue<T> = {
  [key: string]: T
}

type Colors = {
  [key: string]: string | Colors
}

/**
 * Flattens a nested color palette object into a single-level object with color keys.
 *
 * This function takes a nested color palette object where colors can be nested
 * within other colors, and flattens it into a single-level object. The keys of
 * the resulting object are the concatenation of the parent color and the nested
 * color keys, separated by a hyphen. If the nested color key is 'DEFAULT', it is
 * omitted from the concatenated key.
 *
 * @param {Colors} colors - The nested color palette object to flatten.
 * @returns {KeyPairValue<string>} A single-level object with flattened color keys.
 */
export function flattenColorPalette(colors: Colors): KeyPairValue<string> {
  return Object.assign(
    {},
    ...Object.entries(colors !== null && colors !== void 0 ? colors : {}).flatMap(
      ([color, values]) =>
        typeof values === 'object'
          ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
              [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex,
            }))
          : [
              {
                [`${color}`]: values,
              },
            ]
    )
  )
}
