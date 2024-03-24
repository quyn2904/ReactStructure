//utils

//lazy, suspense

//styles
import '@styles/index.scss'
import ThemeStyles from '@styles/theme'

//contexts
import { ThemeProvider } from 'styled-components'

//hooks
import { ThemeContextType, useTheme } from '@contexts/themeContext'

//constants
import { SpringType } from '@constants/enums'

//conponrnts

import Spring from '@components/Spring'
import DocumentTitle from '@components/DocumentTitle'

function App() {
  const { theme, toggleTheme } = useTheme() as ThemeContextType

  return (
    <>
      <ThemeProvider theme={{ theme: theme }}>
        <ThemeStyles />
        <DocumentTitle title='Title ne' websiteName='Ahihi' />
        <Spring className='max-w-[460px] w-full' index={3} type={SpringType.SLIDE_LEFT} duration={400} delay={300}>
          <div className='flex flex-col gap-2.5 text-center'>
            <h1>Welcome back!</h1>
            <p className='lg:max-w-[300px] m-auto 4xl:max-w-[unset]'>
              Etiam quis quam urna. Aliquam odio erat, accumsan eu nulla in
            </p>
          </div>
        </Spring>
        <button className='border' aria-label='Change theme' onClick={toggleTheme}>
          Change Theme
        </button>
      </ThemeProvider>
    </>
  )
}

export default App
