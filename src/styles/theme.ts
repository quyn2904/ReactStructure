import { createGlobalStyle } from 'styled-components'
import theme from 'styled-theming'

export default createGlobalStyle`
  :root {
    --body: ${theme('theme', { light: 'var(--body-light)', dark: 'var(--body-dark)' })};
    --text: ${theme('theme', { light: 'var(--text-light)', dark: 'var(--text-dark)' })};
    --border: ${theme('theme', {
      light: 'var(--border-light)',
      dark: 'var(--border-dark)'
    })}
  }
`
