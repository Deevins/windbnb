import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './ObjectList.module.scss'
import { FetchStatusEnum } from '../../../@types/enums/FetchStatusEnum'

import { selectBuildings } from 'redux/building/selectors'
import { selectSearch } from 'redux/search/selectors'
import { fetchBuildings } from 'redux/building/asyncActions'
import { AppDispatch } from 'redux/store'

import ObjectBlock from '../ObjectBlock'

import { getFetchParams } from 'utils/GetFetchParams'

const ObjectList: React.FC = React.memo(() => {
  const { items, status } = useSelector(selectBuildings)
  const { locationProperty, adultCount, childrenCount } = useSelector(selectSearch)
  const dispatch = useDispatch<AppDispatch>()

  const getBuildings = async () => {
    const { city, country, peopleCount } = getFetchParams({
      locationProperty,
      adultCount,
      childrenCount
    })
    await dispatch(
      fetchBuildings({
        city,
        country,
        peopleCount
      })
    )
  }

  React.useEffect(() => {
    getBuildings()
  }, [])

  const buildings = items.map((obj) => <ObjectBlock {...obj} key={obj.id} />)

  return (
    <div className={styles.root}>
      {status === FetchStatusEnum.REJECTED ? (
        <h1 className={styles.alertTitle}>Error happened. Check console for more information</h1>
      ) : status === FetchStatusEnum.PENDING ? (
        <h1 className={styles.alertTitle}>Fetching data... Please wait</h1>
      ) : (
        buildings
      )}
    </div>
  )
})

export default ObjectList
