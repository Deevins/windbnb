import React from 'react'
import clsx from 'clsx'

import styles from './DropdownGuestsMenu.module.scss'

import { SearchPropertyEnum } from '../../../../@types/enums/SearchPropertyEnum'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearch } from 'redux/search/selectors'
import { AppDispatch } from 'redux/store'
import { decrement, increment } from '../../../../redux/search/slice'

const DropdownGuestsMenu: React.FC = () => {
  const { adultCount, childrenCount, currentProperty } = useSelector(selectSearch)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div
      className={clsx({
        [styles.dropdownGuestsMenu]: currentProperty === SearchPropertyEnum.GUESTS,
        [styles.dropdownGuestsMenuHidden]: currentProperty !== SearchPropertyEnum.GUESTS
      })}
    >
      {/*First block start*/}
      <div>
        <span>
          <h4>Adults</h4>
          <p className={styles.subTitle}> Ages 13 or above</p>
        </span>
        <span className={styles.counterBlock}>
          <div
            className={clsx(styles.counterOperand, {
              [styles.counterOperandInactive]: adultCount === 0
            })}
          >
            <p className={styles.counterOperandMinus} onClick={() => dispatch(decrement('adult'))}>
              -
            </p>
          </div>
          <p className={styles.counterNumber}>{adultCount}</p>
          <div className={styles.counterOperand}>
            <p className={styles.counterOperandPlus} onClick={() => dispatch(increment('adult'))}>
              +
            </p>
          </div>
        </span>
      </div>
      {/*First block ends*/}
      <div>
        <span>
          <h4>Children</h4>
          <p className={styles.subTitle}>Ages 2-12</p>
        </span>
        <span className={styles.counterBlock}>
          <div
            className={clsx(styles.counterOperand, {
              [styles.counterOperandInactive]: childrenCount === 0
            })}
          >
            <p
              className={styles.counterOperandMinus}
              onClick={() => dispatch(decrement('children'))}
            >
              -
            </p>
          </div>
          <p className={styles.counterNumber}>{childrenCount}</p>
          <div className={styles.counterOperand}>
            <p
              className={styles.counterOperandPlus}
              onClick={() => dispatch(increment('children'))}
            >
              +
            </p>
          </div>
        </span>
      </div>
      {/*Second block ends*/}
    </div>
  )
}

export default DropdownGuestsMenu
