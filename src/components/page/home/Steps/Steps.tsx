import styles from './Steps.module.scss'
import step1 from '../../../../assets/step_1.png'
import step2 from '../../../../assets/step_2.png'
import step3 from '../../../../assets/step_3.png'
import { Paragraph, SubTitle } from '../../../shared'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { moveTop } from '../../../../animations'

const Steps = () => {
	const stepOneRef = useRef<HTMLDivElement>(null)
	const stepTwoRef = useRef<HTMLDivElement>(null)
	const stepThreeRef = useRef<HTMLDivElement>(null)

	const stepOneView = useInView(stepOneRef, { once: true })
	const stepTwoView = useInView(stepTwoRef, { once: true })
	const stepThreeView = useInView(stepThreeRef, { once: true })
	
  return (
		<section className={styles.section}>
			<div className={styles.step}>
				<div className={styles.imgWrapper}>
					<img src={step1} alt='step one icon' />
					<span></span>
				</div>
				<motion.div
					className={styles.content}
					ref={stepOneRef}
					variants={moveTop}
					initial='hidden'
					animate={stepOneView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<SubTitle>Locate with app</SubTitle>
					<Paragraph>
						Use the app to find the nearest scooter to you. We are continuously
						placing scooters in the areas with most demand, so one should never
						be too far away.
					</Paragraph>
				</motion.div>
			</div>
			<div className={styles.step}>
				<div className={styles.imgWrapper}>
					<img src={step2} alt='step two icon' />
					<span></span>
				</div>
				<motion.div
					className={styles.content}
					ref={stepTwoRef}
					variants={moveTop}
					initial='hidden'
					animate={stepTwoView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<SubTitle>Pick your scooter</SubTitle>
					<Paragraph>
						We show the most important info for the scooters closest to you. So
						you know how much charge they have left and can see roughly how much
						it will cost.
					</Paragraph>
				</motion.div>
			</div>
			<div className={styles.step}>
				<div className={styles.imgWrapper}>
					<img src={step3} alt='step three icon' />
					<span></span>
				</div>
				<motion.div
					className={styles.content}
					ref={stepThreeRef}
					variants={moveTop}
					initial='hidden'
					animate={stepThreeView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<SubTitle>Enjoy the ride</SubTitle>
					<Paragraph>
						Scan the QR code and the bike will unlock. Retract the cable lock,
						put on a helmet, and you’re off! Always lock bikes away from
						walkways and accessibility ramps.
					</Paragraph>
				</motion.div>
			</div>
		</section>
	)
}

export default Steps
