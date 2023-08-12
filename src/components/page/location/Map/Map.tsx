import styles from './Map.module.scss'
import map from '../../../../assets/map.png'
import mapLg from '../../../../assets/map_lg.png'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { moveTop } from '../../../../animations'

const Map = () => {
	const mapRef = useRef<HTMLElement>(null)

	const mapView = useInView(mapRef, { once: true })

  return (
		<motion.section
			ref={mapRef}
			variants={moveTop}
			initial='hidden'
			animate={mapView ? 'visible' : 'hidden'}
			transition={{ duration: 1, delay: 0.5 }}
		>
			<img
				src={window.innerWidth < 640 ? map : mapLg}
				alt='map'
				className={styles.map}
			/>
			<div className={styles.mapCards}>
				<div className={styles.card}>
					<p>New York</p>
				</div>
				<div className={styles.card}>
					<p>London</p>
				</div>
				<div className={styles.card}>
					<p>Jakarta</p>
				</div>
				<div className={styles.card}>
					<p>Yokohama</p>
				</div>
			</div>
		</motion.section>
	)
}

export default Map
