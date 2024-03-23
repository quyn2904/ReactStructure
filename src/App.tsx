import Spring from './components/Spring'
import './App.css'
import DocumentTitle from './components/DocumentTitle'
import { SpringType } from './constants/enums'

function App() {
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
    </>
  )
}

export default App
