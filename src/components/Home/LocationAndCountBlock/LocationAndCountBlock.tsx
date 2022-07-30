import React from 'react'
import LocationTitle from '../LocationTitle'

import styles from './LocationAndCountBlock.module.scss'
import { useSelector } from 'react-redux'
import { selectBuildings } from 'redux/building/selectors'

const LocationAndCountBlock: React.FC = () => {
  const { items } = useSelector(selectBuildings)

  return (
    <div className={styles.root}>
      <LocationTitle />
      <span>{items && items.length}+ stays</span>
    </div>
  )
}

export default LocationAndCountBlock
