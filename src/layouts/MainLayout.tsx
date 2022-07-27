import React from 'react'
import Header from 'components/Common/Header/Header'
import Popup from '../components/Common/Popup'

type Props = {
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
