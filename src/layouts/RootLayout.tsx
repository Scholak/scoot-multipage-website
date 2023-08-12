import { Outlet } from "react-router-dom"
import Navbar from './Navbar/Navbar'
import Footer from "./Footer/Footer"
import styles from './RootLayout.module.scss'

const RootLayout = () => {
  return (
		<>
			<Navbar />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default RootLayout
