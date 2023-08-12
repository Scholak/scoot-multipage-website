import React from 'react'
import styles from './Title.module.scss'

interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return (
    <h3 className={styles.title}>
      {children}
    </h3>
  )
}

export default Title
