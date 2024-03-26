//utils
import { lazy, Suspense, useEffect, useRef } from 'react'

//styles
import '@styles/index.scss'
import ThemeStyles from '@styles/theme'

//contexts
import { SidebarProvider } from '@contexts/sidebarContext'
import { ThemeProvider } from 'styled-components'

//hooks
import { ThemeContextType, useTheme } from '@contexts/themeContext'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useWindowSize } from 'react-use'

//conponents
import Loader from '@components/Loader'
import AppBar from '@layout/AppBar'
import { ToastContainer } from 'react-toastify'

//pages
const Login = lazy(() => import('@pages/Login'))

function App() {
  const { width } = useWindowSize()
  const appRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme() as ThemeContextType
  const path = useLocation().pathname
  const withSidebar = path !== '/login' && path !== '404'

  useEffect(() => {
    appRef.current && appRef.current.scrollTo(0, 0)
  }, [])

  return (
    <SidebarProvider>
      <ThemeProvider theme={{ theme: theme }}>
        <ThemeStyles />
        <ToastContainer theme={theme} autoClose={2000} style={{ padding: '20px' }} />
        {width < 1280 && withSidebar && <AppBar />}
        <div className={`app ${!withSidebar ? 'fluid' : ''}`} ref={appRef}>
          <div className='app_content'>
            <Suspense fallback={<Loader />}>
              <div className='main'>
                <Routes>
                  <Route path='/login' element={<Login />} />
                </Routes>
              </div>
            </Suspense>
          </div>
        </div>
      </ThemeProvider>
    </SidebarProvider>
  )
}

export default App
