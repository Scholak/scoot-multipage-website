import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import {
	FaApple,
  FaGooglePlay,
  FaFacebookSquare,
	FaTwitter,
	FaInstagram,
} from 'react-icons/fa'


const Footer = () => {
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

  return (
		<footer className={styles.footer}>
			<div className={styles.upper}>
				<div className={styles.left}>
					<p>Sign up and Scoot off today</p>
				</div>
				<div className={styles.right}>
					<button>
						<FaApple />
						<p>
							<span>Available on</span>
							<span>AppStore</span>
						</p>
					</button>
					<button>
						<FaGooglePlay />
						<p>
							<span>Get it on</span>
							<span>GooglePlay</span>
						</p>
					</button>
				</div>
			</div>
			<div className={styles.lower}>
				<h2 className={styles.logo}>SCOOT</h2>
				<ul className={styles.links}>
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
				<div className={styles.social}>
					<FaFacebookSquare />
					<FaTwitter />
					<FaInstagram />
				</div>
			</div>
		</footer>
	)
}

export default Footer
