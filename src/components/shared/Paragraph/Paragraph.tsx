import React from 'react'
import styles from './Paragraph.module.scss'

interface Props {
  children: React.ReactNode
}

const Paragraph = ({ children }: Props) => {
  return (
    <p className={styles.paragraph}>
      {children}
    </p>
  )
}

export default Paragraph
