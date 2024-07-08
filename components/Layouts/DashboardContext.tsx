import React, {createContext, useContext, useState, type ReactNode} from "react"

interface PageContextType {
  isPage: string
  setPage: (page: string) => void
}

const PageContext = createContext<PageContextType | undefined>(undefined)

const usePage = () => {
  const context = useContext(PageContext)
  if (!context) {
    throw new Error("usePage must be used within a PageProvider")
  }
  return context
}

const PageProvider = ({children, defaultPage}: {children: ReactNode; defaultPage: string}) => {
  const [isPage, setPage] = useState(defaultPage)

  return <PageContext.Provider value={{isPage, setPage}}>{children}</PageContext.Provider>
}

export {usePage, PageProvider}
