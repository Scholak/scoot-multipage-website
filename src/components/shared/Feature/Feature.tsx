import { useRef } from 'react'
import { Paragraph, SubTitle } from '..'
import styles from './Feature.module.scss'
import { useInView, motion } from 'framer-motion'
import { moveTop } from '../../../animations'

interface Props {
  img: string
  number: string
  title: string
  text: string
}

const Feature = ({ img, number, title, text }: Props) => {
	const featureRef = useRef<HTMLDivElement>(null)

	const featureView = useInView(featureRef, { once: true })

  return (
		<div className={styles.card} ref={featureRef}>
			<motion.div
				className={styles.image}
				variants={moveTop}
				initial='hidden'
				animate={featureView ? 'visible' : 'initial'}
				transition={{ duration: 1, delay: .5 }}
			>
				<img src={img} alt='our tech' />
				<span className={styles.number}>{number}</span>
			</motion.div>
			<motion.div
				className={styles.content}
				variants={moveTop}
				initial='hidden'
				animate={featureView ? 'visible' : 'initial'}
				transition={{ duration: 1, delay: 1 }}
			>
				<SubTitle>{title}</SubTitle>
				<Paragraph>{text}</Paragraph>
			</motion.div>
		</div>
	)
}

export default Feature
