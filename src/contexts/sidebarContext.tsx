import useScrollLock from '@hooks/useScrollLock'
import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export interface SidebarContextType {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface SidebarProviderProps {
  children: React.ReactNode
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const location = useLocation()
  const setIsLocked = useScrollLock()

  // close sidebar when route changes
  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    if (open) {
      setIsLocked(true)
    } else {
      setIsLocked(false)
    }

    return () => {
      setIsLocked(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return <SidebarContext.Provider value={{ open, setOpen }}>{children}</SidebarContext.Provider>
}

export const useSidebar = () => useContext(SidebarContext)
