import { useRef, useState } from 'react'
import { Paragraph, SubTitle, Title } from '../../../shared'
import { FaAngleDown } from 'react-icons/fa'
import styles from './Faq.module.scss'
import { useInView, motion } from 'framer-motion'
import { moveLeft, moveRight } from '../../../../animations'

const Faq = () => {
	const questionOneRef = useRef<HTMLDivElement>(null)
	const questionTwoRef = useRef<HTMLDivElement>(null)
	const questionThreeRef = useRef<HTMLDivElement>(null)
	const questionFourRef = useRef<HTMLDivElement>(null)
	const questionFiveRef = useRef<HTMLDivElement>(null)
	const questionSixRef = useRef<HTMLDivElement>(null)

	const questionOneView = useInView(questionOneRef, { once: true })
	const questionTwoView = useInView(questionTwoRef, { once: true })
	const questionThreeView = useInView(questionThreeRef, { once: true })
	const questionFourView = useInView(questionFourRef, { once: true })
	const questionFiveView = useInView(questionFiveRef, { once: true })
	const questionSixView = useInView(questionSixRef, { once: true })

  const [questionId, setQuestionId] = useState<number>(0)

  return (
		<section className={styles.section}>
			<Title>FAQs</Title>
			<div className={styles.howItWorks}>
				<Title>How it works</Title>
				<div className={styles.questions}>
					<motion.div
						className={styles.question}
						ref={questionOneRef}
						variants={moveRight}
						initial='hidden'
						animate={questionOneView ? 'visible' : 'hidden'}
						transition={{ duration: 1, delay: .5 }}
					>
						<div className={styles.title} onClick={() => setQuestionId(0)}>
							<SubTitle>Should I wear a helmet?</SubTitle>
							<FaAngleDown className={`${questionId === 0 && styles.active}`} />
						</div>
						<div
							className={`${styles.text} ${questionId === 0 && styles.active}`}
						>
							<Paragraph>
								Yes, please do! All cities have different laws. But we strongly
								strongly strongly recommend always wearing a helmet regardless
								of the local laws. We like you and we want you to be as safe as
								possible while Scooting.
							</Paragraph>
						</div>
					</motion.div>
					<motion.div
						className={styles.question}
						ref={questionTwoRef}
						variants={moveLeft}
						initial='hidden'
						animate={questionTwoView ? 'visible' : 'hidden'}
						transition={{ duration: 1, delay: .5 }}
					>
						<div className={styles.title} onClick={() => setQuestionId(1)}>
							<SubTitle>How about the rules & regulations?</SubTitle>
							<FaAngleDown className={`${questionId === 1 && styles.active}`} />
						</div>
						<div
							className={`${styles.text} ${questionId === 1 && styles.active}`}
						>
							<Paragraph>
								Yes, please do! All cities have different laws. But we strongly
								strongly strongly recommend always wearing a helmet regardless
								of the local laws. We like you and we want you to be as safe as
								possible while Scooting.
							</Paragraph>
						</div>
					</motion.div>
					<motion.div
						className={styles.question}
						ref={questionThreeRef}
						variants={moveRight}
						initial='hidden'
						animate={questionThreeView ? 'visible' : 'hidden'}
						transition={{ duration: 1, delay: .5 }}
					>
						<div className={styles.title} onClick={() => setQuestionId(2)}>
							<SubTitle>What if I damage my Scoot?</SubTitle>
							<FaAngleDown className={`${questionId === 2 && styles.active}`} />
						</div>
						<div
							className={`${styles.text} ${questionId === 2 && styles.active}`}
						>
							<Paragraph>
								Yes, please do! All cities have different laws. But we strongly
								strongly strongly recommend always wearing a helmet regardless
								of the local laws. We like you and we want you to be as safe as
								possible while Scooting.
							</Paragraph>
						</div>
					</motion.div>
				</div>
			</div>
			<div className={styles.safeDriving}>
				<Title>Safe driving</Title>
				<div className={styles.questions}>
					<motion.div
						className={styles.question}
						ref={questionFourRef}
						variants={moveLeft}
						initial='hidden'
						animate={questionFourView ? 'visible' : 'hidden'}
						transition={{ duration: 1, delay: .5 }}
					>
						<div className={styles.title} onClick={() => setQuestionId(3)}>
							<SubTitle>Should I wear a helmet?</SubTitle>
							<FaAngleDown className={`${questionId === 3 && styles.active}`} />
						</div>
						<div
							className={`${styles.text} ${questionId === 3 && styles.active}`}
						>
							<Paragraph>
								Yes, please do! All cities have different laws. But we strongly
								strongly strongly recommend always wearing a helmet regardless
								of the local laws. We like you and we want you to be as safe as
								possible while Scooting.
							</Paragraph>
						</div>
					</motion.div>
					<motion.div
						className={styles.question}
						ref={questionFiveRef}
						variants={moveRight}
						initial='hidden'
						animate={questionFiveView ? 'visible' : 'hidden'}
						transition={{ duration: 1, delay: .5 }}
					>
						<div className={styles.title} onClick={() => setQuestionId(4)}>
							<SubTitle>How about the rules & regulations?</SubTitle>
							<FaAngleDown className={`${questionId === 4 && styles.active}`} />
						</div>
						<div
							className={`${styles.text} ${questionId === 4 && styles.active}`}
						>
							<Paragraph>
								Yes, please do! All cities have different laws. But we strongly
								strongly strongly recommend always wearing a helmet regardless
								of the local laws. We like you and we want you to be as safe as
								possible while Scooting.
							</Paragraph>
						</div>
					</motion.div>
					<motion.div
						className={styles.question}
						ref={questionSixRef}
						variants={moveLeft}
						initial='hidden'
						animate={questionSixView ? 'visible' : 'hidden'}
						transition={{ duration: 1, delay: .5 }}
					>
						<div className={styles.title} onClick={() => setQuestionId(5)}>
							<SubTitle>What if I damage my Scoot?</SubTitle>
							<FaAngleDown className={`${questionId === 2 && styles.active}`} />
						</div>
						<div
							className={`${styles.text} ${questionId === 2 && styles.active}`}
						>
							<Paragraph>
								Yes, please do! All cities have different laws. But we strongly
								strongly strongly recommend always wearing a helmet regardless
								of the local laws. We like you and we want you to be as safe as
								possible while Scooting.
							</Paragraph>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Faq
