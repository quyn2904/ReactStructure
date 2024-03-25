import { useEffect, useState } from 'react'

const useScrollLock = () => {
  const [isLocked, setIsLocked] = useState<boolean>(false)

  useEffect(() => {
    if (isLocked) {
      document.documentElement.classList.add('no-scroll')
    } else {
      document.documentElement.classList.remove('no-scroll')
    }
  }, [isLocked])

  return setIsLocked
}

export default useScrollLock
