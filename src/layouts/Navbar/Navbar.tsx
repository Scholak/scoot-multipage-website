import { useState } from 'react'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import { Button } from '../../components/shared'

const Navbar = () => {
	const [active, setActive] = useState<boolean>(false)

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		setActive(false)
	}

	return (
		<>
			<nav className={styles.navbar}>
				<h1 className={styles.logo}>
					<Link to='/'>SCOOT</Link>
				</h1>
				<div className={`${styles.links} ${active ? styles.active : ''}`}>
					<ul className={styles.navLinks}>
						<li onClick={handleClick}>
							<Link to='/'>Home</Link>
						</li>
						<li onClick={handleClick}>
							<Link to='/about'>About</Link>
						</li>
						<li onClick={handleClick}>
							<Link to='/location'>Location</Link>
						</li>
						<li onClick={handleClick}>
							<Link to='/careers'>Careers</Link>
						</li>
					</ul>
					<Button>Get Scootin</Button>
				</div>
				<div
					className={`${styles.burger} ${active ? styles.active : ''}`}
					onClick={() => setActive(!active)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</nav>
			<div
				className={`${styles.overlay} ${active ? styles.active : ''}`}
				onClick={() => setActive(false)}
			></div>
		</>
	)
}

export default Navbar
