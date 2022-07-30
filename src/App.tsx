import React, { createContext, useState } from 'react'

import Home from './pages/Home'

type SearchContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

//@ts-ignore
export const SearchContext = createContext<SearchContextType>(false)

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <SearchContext.Provider value={{ isOpen, setIsOpen }}>
        <Home />
      </SearchContext.Provider>
    </>
  )
}

export default App
