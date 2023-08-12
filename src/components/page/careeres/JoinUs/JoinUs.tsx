import styles from './JoinUs.module.scss'
import joinUs from '../../../../assets/join_us.png'
import { Button, Paragraph, Title } from '../../../shared'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { moveLeft, moveRight } from '../../../../animations'

const JoinUs = () => {
	const imgRef = useRef<HTMLImageElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)

	const imgView = useInView(imgRef, { once: true })
	const contentView = useInView(contentRef, { once: true })

  return (
		<section className={styles.joinUs}>
			<motion.img
				src={joinUs}
				alt='join us image'
				ref={imgRef}
				variants={moveLeft}
				initial='hidden'
				animate={imgView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.5 }}
			/>
			<motion.div
				className={styles.content}
				ref={contentRef}
				variants={moveRight}
				initial='hidden'
				animate={contentView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<Title>Care to join our mission?</Title>
				<Paragraph>
					We’re always looking for ambitious individuals to help us on our
					journey. If you’re passionate about our mission to provide clean,
					accessible transport to improve urban living we want to hear from you!
				</Paragraph>
				<Button>Say Hello</Button>
			</motion.div>
		</section>
	)
}

export default JoinUs
