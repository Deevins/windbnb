import React from 'react'

import MainLayout from 'layouts/MainLayout'
import LocationAndCountBlock from 'components/Home/LocationAndCountBlock'
import ObjectList from 'components/Home/ObjectList'
import Popup from '../../components/Common/Popup'

const Home: React.FC = () => {
  return (
    <>
      <MainLayout>
        <Popup />
        <LocationAndCountBlock />
        <ObjectList />
      </MainLayout>
    </>
  )
}

export default Home
