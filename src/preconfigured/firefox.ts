import plugin from 'tailwindcss/plugin.js'
import type { PluginAPI } from 'tailwindcss/types/config.js'

import { getUnit, getValue } from '../lib/length_unit.js'

const firefox = plugin(
  ({ addBase, theme }: PluginAPI) => {
    addBase({
      '*::-webkit-scrollbar': {
        width: theme('scrollbar.size', '10px'),
        height: theme('scrollbar.size', '10px'),
      },
      '*::-webkit-scrollbar-button': {
        display: 'none',
      },
      '*::-webkit-scrollbar-corner': {
        backgroundColor: theme('scrollbar.background.default', '#f0f0f0'),
      },
      '*::-webkit-scrollbar-track': {
        backgroundColor: theme('scrollbar.background.default', '#f0f0f0'),
      },
      '*::-webkit-scrollbar-track:hover': {
        backgroundColor: theme('scrollbar.background.hover', '#f4f4f4'),
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: theme('scrollbar.foreground.default', '#bfbfbf'),
        borderRadius: getRadius(theme('scrollbar.size', '10px')),
        borderWidth: theme('scrollbar.padding', '2px'),
        borderStyle: 'solid',
        borderColor: theme('scrollbar.background.default', '#f0f0f0'),
      },
      '*::-webkit-scrollbar-thumb:hover': {
        backgroundColor: theme('scrollbar.foreground.hover', '#a6a6a6'),
        borderColor: theme('scrollbar.background.hover', '#f4f4f4'),
      },
    })
  },
  {
    theme: {
      scrollbar: {
        size: '10px',
        padding: '2px',
        background: { default: '#f0f0f0', hover: '#f4f4f4' },
        foreground: { default: '#bfbfbf', hover: '#a6a6a6' },
      },
    },
  }
)

/**
 * Calculates the radius by dividing the numeric part of the input value by 2 and appending the unit part.
 *
 * @param value - The input value as a string, which includes both the numeric part and the unit part.
 * @returns The calculated radius as a string, which is half of the numeric part followed by the unit part.
 */
function getRadius(value: string) {
  return getValue(value) / 2 + getUnit(value)
}

export default firefox
