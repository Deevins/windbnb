import React from 'react'

import MainLayout from 'layouts/MainLayout'
import LocationAndCountBlock from 'components/Home/LocationAndCountBlock'
import ObjectBlock from 'components/Home/ObjectBlock'
import ObjectList from 'components/Home/ObjectList'

const Home: React.FC = () => {
  return (
    <>
      <MainLayout>
        <LocationAndCountBlock />
        <ObjectList />
      </MainLayout>
    </>
  )
}

export default Home
