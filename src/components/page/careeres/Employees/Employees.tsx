import { useRef } from 'react'
import { Button } from '../../../shared'
import styles from './Employees.module.scss'
import { useInView, motion } from 'framer-motion'
import { moveLeft, moveRight } from '../../../../animations'

const Employees = () => {
	const employeeOneRef = useRef<HTMLDivElement>(null)
	const employeeTwoRef = useRef<HTMLDivElement>(null)
	const employeeThreeRef = useRef<HTMLDivElement>(null)
	const employeeFourRef = useRef<HTMLDivElement>(null)
	const employeeFiveRef = useRef<HTMLDivElement>(null)
	const employeeSixRef = useRef<HTMLDivElement>(null)

	const employeeOneView = useInView(employeeOneRef, { once: true })
	const employeeTwoView = useInView(employeeTwoRef, { once: true })
	const employeeThreeView = useInView(employeeThreeRef, { once: true })
	const employeeFourView = useInView(employeeFourRef, { once: true })
	const employeeFiveView = useInView(employeeFiveRef, { once: true })
	const employeeSixView = useInView(employeeSixRef, { once: true })

  return (
		<section className={styles.employeesSection}>
			<motion.div
				className={styles.card}
				ref={employeeOneRef}
				variants={moveRight}
				initial='hidden'
				animate={employeeOneView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<div className={styles.content}>
					<p>General Manager</p>
					<p>Jakarta, Indonesia</p>
				</div>
				<Button>Apply</Button>
			</motion.div>
			<motion.div
				className={styles.card}
				ref={employeeTwoRef}
				variants={moveLeft}
				initial='hidden'
				animate={employeeTwoView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<div className={styles.content}>
					<p>UI/UX Designer</p>
					<p>Yokohama, Japan</p>
				</div>
				<Button>Apply</Button>
			</motion.div>
			<motion.div
				className={styles.card}
				ref={employeeThreeRef}
				variants={moveRight}
				initial='hidden'
				animate={employeeThreeView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<div className={styles.content}>
					<p>Blog Content Copywriter</p>
					<p>New York, United States</p>
				</div>
				<Button>Apply</Button>
			</motion.div>
			<motion.div
				className={styles.card}
				ref={employeeFourRef}
				variants={moveLeft}
				initial='hidden'
				animate={employeeFourView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<div className={styles.content}>
					<p>Graphic Designer</p>
					<p>New York, United States</p>
				</div>
				<Button>Apply</Button>
			</motion.div>
			<motion.div
				className={styles.card}
				ref={employeeFiveRef}
				variants={moveRight}
				initial='hidden'
				animate={employeeFiveView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<div className={styles.content}>
					<p>Fleet Supervisor</p>
					<p>Jakarta, Indonesia</p>
				</div>
				<Button>Apply</Button>
			</motion.div>
			<motion.div
				className={styles.card}
				ref={employeeSixRef}
				variants={moveLeft}
				initial='hidden'
				animate={employeeSixView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<div className={styles.content}>
					<p>UX Analyst</p>
					<p>London, United Kingdom</p>
				</div>
				<Button>Apply</Button>
			</motion.div>
		</section>
	)
}

export default Employees
