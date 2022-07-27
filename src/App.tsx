import React, { createContext, useState, Dispatch, SetStateAction } from 'react'

import Home from './pages/Home'

export const SearchContext = createContext<any>(true)

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  // @ts-ignore
  return (
    <>
      <SearchContext.Provider value={{ isOpen, setIsOpen }}>
        <Home />
      </SearchContext.Provider>
    </>
  )
}

export default App
