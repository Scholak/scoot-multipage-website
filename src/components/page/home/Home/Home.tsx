import { Button, Paragraph, Title } from '../../../shared'
import styles from './Home.module.scss'
import home1 from './../../../../assets/about_us_1.png'
import home2 from './../../../../assets/home_2.png'
import home3 from './../../../../assets/home_3.png'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { moveTop } from '../../../../animations'

const Home = () => {
	const imgOneRef = useRef<HTMLImageElement>(null)
	const imgTwoRef = useRef<HTMLImageElement>(null)
	const imgThreeRef = useRef<HTMLImageElement>(null)
	const contentOneRef = useRef<HTMLDivElement>(null)
	const contentTwoRef = useRef<HTMLDivElement>(null)
	const contentThreeRef = useRef<HTMLDivElement>(null)

	const imgOneView = useInView(imgOneRef, { once: true })
	const imgTwoView = useInView(imgTwoRef, { once: true })
	const imgThreeView = useInView(imgThreeRef, { once: true })
	const contentOneView = useInView(contentOneRef, { once: true })
	const contentTwoView = useInView(contentTwoRef, { once: true })
	const contentThreeView = useInView(contentThreeRef, { once: true })
	

	return (
		<>
			<section className={`${styles.home} ${styles.reverse}`}>
				<motion.img
					src={home1}
					alt='home one image'
					ref={imgOneRef}
					variants={moveTop}
					initial='hidden'
					animate={imgOneView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.5 }}
				/>
				<motion.div
					className={styles.content}
					ref={contentOneRef}
					variants={moveTop}
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
					<Button>Learn More</Button>
				</motion.div>
			</section>
			<section className={styles.home}>
				<motion.div
					className={styles.content}
					ref={contentTwoRef}
					variants={moveTop}
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
					<Button>Learn More</Button>
				</motion.div>
				<motion.img
					src={home2}
					alt='home two image'
					ref={imgTwoRef}
					variants={moveTop}
					initial='hidden'
					animate={imgTwoView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.5 }}
				/>
			</section>
			<section className={`${styles.home} ${styles.reverse}`}>
				<motion.img
					src={home3}
					alt='home three image'
					ref={imgThreeRef}
					variants={moveTop}
					initial='hidden'
					animate={imgThreeView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.5 }}
				/>
				<motion.div
					className={styles.content}
					ref={contentThreeRef}
					variants={moveTop}
					initial='hidden'
					animate={contentThreeView ? 'visible' : 'hidden'}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<Title>Mobility for the digital era</Title>
					<Paragraph>
						Getting around should be simple (and even fun!) for everyone. We
						embrace technology to provide low cost, smart access to scooters at
						your fingertips.
					</Paragraph>
					<Button>Learn More</Button>
				</motion.div>
			</section>
		</>
	)
}

export default Home
