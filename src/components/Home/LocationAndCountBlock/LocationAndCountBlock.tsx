import React from 'react'
import LocationTitle from '../LocationTitle'

import styles from './LocationAndCountBlock.module.scss'

const LocationAndCountBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <LocationTitle />
      <span>12+ stays</span>
    </div>
  )
}

export default LocationAndCountBlock
