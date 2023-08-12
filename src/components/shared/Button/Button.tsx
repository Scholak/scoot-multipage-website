import React from "react"
import styles from './Button.module.scss'

interface Props {
  children: React.ReactNode
}

const Button = ({ children }: Props) => {
  return <button className={styles.cta}>{children}</button>
}

export default Button
