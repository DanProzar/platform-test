import { getColors } from '@/helpers'
import { createVuetify, ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import 'vuetify/styles/main.sass'

const customTheme: ThemeDefinition = {
  dark: false,
  colors: getColors()
}

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme
    }
  }
})
