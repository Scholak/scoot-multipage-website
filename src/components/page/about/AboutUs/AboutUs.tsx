import { Paragraph, Title } from '../../../shared'
import styles from './AboutUs.module.scss'
import aboutUs1 from './../../../../assets/about_us_1.png'
import aboutUs2 from './../../../../assets/about_us_2.png'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import { moveLeft, moveRight } from '../../../../animations'

const AboutUs = () => {
	const imgOneRef = useRef<HTMLImageElement>(null)
	const contentOneRef = useRef<HTMLDivElement>(null)
	const imgTwoRef = useRef<HTMLImageElement>(null)
	const contentTwoRef = useRef<HTMLDivElement>(null)

	const imgOneView = useInView(imgOneRef, { once: true })
	const contentOneView = useInView(contentOneRef, { once: true })
	const imgTwoView = useInView(imgTwoRef, { once: true })
	const contentTwoView = useInView(contentTwoRef, { once: true })

	return (
		<>
			<section className={`${styles.aboutUs} ${styles.reverse}`}>
				<motion.img
					src={aboutUs1}
					alt='about us one image'
					ref={imgOneRef}
					variants={moveLeft}
					initial='hidden'
					animate={imgOneView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.5 }}
				/>
				<motion.div
					className={styles.content}
					ref={contentOneRef}
					variants={moveRight}
					initial='hidden'
					animate={contentOneView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<Title>Mobility for the digital era</Title>
					<Paragraph>
						Getting around should be simple (and even fun!) for everyone. We
						embrace technology to provide low cost, smart access to scooters at
						your fingertips.
					</Paragraph>
				</motion.div>
			</section>
			<section className={styles.aboutUs}>
				<motion.div
					className={styles.content}
					ref={contentTwoRef}
					variants={moveRight}
					initial='hidden'
					animate={contentTwoView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<Title>Better urban living</Title>
					<Paragraph>
						We’re helping connect cities and bring people closer together. Our
						scooters are also fully-electric and we offset the minimal carbon
						footprint for each ride.
					</Paragraph>
				</motion.div>
				<motion.img
					src={aboutUs2}
					alt='about us two image'
					ref={imgTwoRef}
					variants={moveLeft}
					initial='hidden'
					animate={imgTwoView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.5 }}
				/>
			</section>
		</>
	)
}

export default AboutUs
