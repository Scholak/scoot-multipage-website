import styles from './Hero.module.scss'
import hero from '../../../../assets/hero.png'
import { Button } from '../../../shared'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { moveTop } from '../../../../animations'

const Hero = () => {
	const sectionRef = useRef<HTMLElement>(null)

	const sectionView = useInView(sectionRef, { once: true })

  return (
		<motion.section
			className={styles.section}
			ref={sectionRef}
			variants={moveTop}
			initial='hidden'
			animate={sectionView ? 'visible' : 'hidden'}
			transition={{ duration: 1 }}
		>
			<img src={hero} alt='hero image' />
			<div className={styles.content}>
				<h2>Scooter sharing made simple</h2>
				<p>
					Scoot takes the hassle out of urban mobility. Our bikes are placed in
					convenient locations in each of our cities. Use our app to locate the
					nearest bike, unlock it with a tap, and you’re away!
				</p>
				<Button>Get Scootin</Button>
			</div>
		</motion.section>
	)
}

export default Hero
