import React from 'react'
import ContentLoader from 'react-content-loader'

import styles from './BlockLoader.module.scss'

const BlockLoader: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={1920}
      height={1080}
      viewBox="0 0 1920 1080"
      backgroundColor="#fbf3f3"
      foregroundColor="#cecaca"
      className={styles.root}
    >
      <rect x="25" y="54" rx="24" ry="24" width="452" height="351" />
      <rect x="27" y="421" rx="0" ry="0" width="101" height="31" />
      <rect x="137" y="431" rx="0" ry="0" width="190" height="15" />
      <rect x="381" y="426" rx="0" ry="0" width="96" height="23" />
      <rect x="28" y="473" rx="0" ry="0" width="457" height="34" />
    </ContentLoader>
  )
}

export default BlockLoader
