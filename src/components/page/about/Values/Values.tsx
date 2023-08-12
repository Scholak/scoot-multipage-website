import { Feature, Title } from '../../../shared'
import styles from './Values.module.scss'
import img1 from '../../../../assets/why_join_us_1.png'
import img2 from '../../../../assets/why_join_us_2.png'
import img3 from '../../../../assets/why_join_us_3.png'

const Values = () => {
  return (
		<section className={styles.values}>
			<Title>Our Values</Title>
			<div className={styles.cards}>
				<Feature
					img={img1}
					number='01'
					title='Our Tech'
					text='We’re using cutting edge technology to drive accessible urban
							transportation forward. Our fully electric scooters are a joy to
							ride!'
				/>
				<Feature
					img={img2}
					number='02'
					title='Our Integrity'
					text='We are fully committed to deliver a great yet safe, sustainable
							micro-mobility experience in every city we serve.'
				/>
				<Feature
					img={img3}
					number='03'
					title='Our Community'
					text='We support every community we serve. All workers are paid a living
							wage based on their location and are Scoot employees.'
				/>
			</div>
		</section>
	)
}

export default Values
