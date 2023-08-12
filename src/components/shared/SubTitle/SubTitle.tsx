import React from 'react'
import styles from './SubTitle.module.scss'

interface Props {
  children: React.ReactNode
}

const SubTitle = ({ children }: Props) => {
	return <h4 className={styles.title}>{children}</h4>
}

export default SubTitle
