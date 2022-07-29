import React, { createContext, useState } from 'react'

import Home from './pages/Home'

type SearchContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// made default Value to optional to avoid error.
export const SearchContext = createContext<SearchContextType>()

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <>
      <SearchContext.Provider value={{ isOpen, setIsOpen }}>
        <Home />
      </SearchContext.Provider>
    </>
  )
}

export default App
