//hooks
import { ThemeContextType, useTheme } from '@contexts/themeContext'

//constants
import { SpringType } from '@constants/enums'

//conponents
import Spring from '@components/Spring'
import DocumentTitle from '@components/DocumentTitle'

const Login = () => {
  const { toggleTheme } = useTheme() as ThemeContextType

  return (
    <>
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
    </>
  )
}

export default Login
