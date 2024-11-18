import plugin from 'tailwindcss/plugin.js'
import type { PluginAPI } from 'tailwindcss/types/config.js'

import { flattenColorPalette } from '../lib/flatten_color_palette.js'

const utils = plugin(
  ({ addVariant, matchUtilities, theme }: PluginAPI) => {
    addVariant('scrollbar', '&::-webkit-scrollbar')
    addVariant('scrollbar-horizontal', '&::-webkit-scrollbar:horizontal')
    addVariant('scrollbar-vertical', '&::-webkit-scrollbar:vertical')
    addVariant('scrollbar-button', '&::-webkit-scrollbar-button')
    addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
    addVariant('scrollbar-track', '&::-webkit-scrollbar-track')
    addVariant('scrollbar-track-piece', '&::-webkit-scrollbar-track-piece')
    addVariant('scrollbar-corner', '&::-webkit-scrollbar-corner')
    addVariant('scrollbar-resizer', '&::-webkit-resizer')
    matchUtilities(
      {
        'scrollbar-gutter': (value: string) => ({
          scrollbarGutter: value,
        }),
      },
      { values: theme('scrollbarGutter') }
    )
    matchUtilities(
      {
        'scrollbar-width': (value: string) => ({
          scrollbarWidth: value,
        }),
      },
      { values: theme('scrollbarWidth') }
    )
    matchUtilities(
      {
        'scrollbar-fg': (value: string) => ({
          '--scrollbar-fg': value,
          'scrollbar-color': 'var(--scrollbar-fg) var(--scrollbar-bg)',
        }),
      },
      { values: flattenColorPalette(theme('colors')), type: 'color' }
    )
    matchUtilities(
      {
        'scrollbar-bg': (value: string) => ({
          '--scrollbar-bg': value,
          'scrollbar-color': 'var(--scrollbar-fg) var(--scrollbar-bg)',
        }),
      },
      { values: flattenColorPalette(theme('colors')), type: 'color' }
    )
  },
  {
    theme: {
      scrollbarGutter: {
        'auto': 'auto',
        'stable': 'stable',
        'stable-both': 'stable both-edges',
        'inherit': 'inherit',
        'initial': 'initial',
      },
      scrollbarWidth: {
        auto: 'auto',
        thin: 'thin',
        none: 'none',
      },
    },
  }
)

export default utils
