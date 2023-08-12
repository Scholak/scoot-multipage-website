import { useRef } from 'react'
import { Title, Paragraph, Button } from '../../../shared'
import styles from './Listed.module.scss'
import { useInView, motion } from 'framer-motion'
import { moveTop } from '../../../../animations'

const Listed = () => {
	const sectionRef = useRef<HTMLElement>(null)

	const sectionView = useInView(sectionRef, { once: true })

  return (
		<motion.section
			className={styles.listedSection}
			ref={sectionRef}
			variants={moveTop}
			initial='hidden'
			animate={sectionView ? 'visible' : 'hidden'}
			transition={{ duration: 1, delay: 0.5}}
		>
			<Title>Your City Not Listed?</Title>
			<Paragraph>
				If you’d like to see Scoot in your hometown, be sure to let us know. We
				track requests and plan launches based on demand. Feel free to message
				us by clicking the link or messaging us on social.
			</Paragraph>
			<Button>Message Us</Button>
		</motion.section>
	)
}

export default Listed
