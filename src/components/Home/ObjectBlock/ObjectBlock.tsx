import React from 'react'
import { BsStarFill } from 'react-icons/bs'

import styles from './ObjectBlock.module.scss'

import { BuildingType } from '../../../@types/BuildingType'

const ObjectBlock: React.FC<BuildingType> = (props) => {
  const {
    // city,
    // country,
    // id,
    // maxGuests,
    photo,
    rating,
    superHost,
    title,
    type,
    beds
  } = props

  return (
    <div className={styles.main}>
      <img
        src={photo}
        alt="objectImage"
        style={{ width: '395px', height: '269px' }}
      />
      <div className={styles.desc}>
        {superHost && (
          <div className={styles.superBlock}>
            <span className={styles.super}>SUPER HOST</span>
          </div>
        )}
        <div className={styles.place}>
          {type}. {beds && beds} beds
        </div>
        <div>
          <BsStarFill fill={'#EB5757'} style={{ marginRight: '7px' }} />
          <span>{rating}</span>
        </div>
      </div>
      <div className={styles.placeDesc}>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default ObjectBlock
