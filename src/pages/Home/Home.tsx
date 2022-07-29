import React from 'react'

import MainLayout from 'layouts/MainLayout'
import LocationAndCountBlock from 'components/Home/LocationAndCountBlock'
import ObjectList from 'components/Home/ObjectList'

const Home: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
