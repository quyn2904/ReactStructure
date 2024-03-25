//utils
import { lazy, Suspense } from 'react'

//styles
import '@styles/index.scss'
import ThemeStyles from '@styles/theme'

//contexts
import { SidebarProvider } from '@contexts/sidebarContext'
import { ThemeProvider } from 'styled-components'

//hooks
import { ThemeContextType, useTheme } from '@contexts/themeContext'

//constants

//conponents
// import { useWindowSize } from 'react-use'
import Loader from '@components/Loader'
import { Route, Routes } from 'react-router-dom'

//pages
const Login = lazy(() => import('@pages/Login'))

function App() {
  // const { width } = useWindowSize()
  const { theme } = useTheme() as ThemeContextType

  return (
    <SidebarProvider>
      <ThemeProvider theme={{ theme: theme }}>
        <ThemeStyles />
        <div className='app_content'>
          <Suspense fallback={<Loader />}>
            <div className='main'>
              <Routes>
                <Route path='/login' element={<Login />} />
              </Routes>
            </div>
          </Suspense>
        </div>
      </ThemeProvider>
    </SidebarProvider>
  )
}

export default App
