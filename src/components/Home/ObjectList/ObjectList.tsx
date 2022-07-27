import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './ObjectList.module.scss'
import { FetchStatusEnum } from '../../../@types/enums/FetchStatusEnum'

import { selectBuildings } from 'redux/building/selectors'
import { fetchBuildings } from 'redux/building/asyncActions'
import { AppDispatch } from 'redux/store'

import ObjectBlock from '../ObjectBlock'
import BlockLoader from '../ObjectBlock/BlockLoader'

const ObjectList: React.FC = () => {
  const { items, status } = useSelector(selectBuildings)
  const dispatch = useDispatch<AppDispatch>()

  const getBuildings = async () => {
    await dispatch(fetchBuildings())
  }

  React.useEffect(() => {
    getBuildings()
  }, [])

  const buildings = items.map((obj) => <ObjectBlock {...obj} key={obj.id} />)

  const loaders = [...Array(8)].map((item, i) => <BlockLoader key={i} />)

  return (
    <div className={styles.root}>
      {status === FetchStatusEnum.PENDING ? loaders : buildings}
    </div>
  )
}

export default ObjectList
