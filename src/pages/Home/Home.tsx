import React from 'react'

import MainLayout from 'layouts/MainLayout'
import LocationAndCountBlock from 'components/Home/LocationAndCountBlock'
import ObjectList from 'components/Home/ObjectList'

const Home: React.FC = React.memo(() => {
  return (
    <>
      <MainLayout>
        <LocationAndCountBlock />
        <ObjectList />
      </MainLayout>
    </>
  )
})

export default Home
