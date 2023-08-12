import styles from './PageTitle.module.scss'

interface Props {
	title: string
	img: string
}

const PageTitle = ({ title, img }: Props) => {
	return (
		<div className={styles.pageTitle}>
			<img src={img} />
			<p>{title}</p>
		</div>
	)
}

export default PageTitle
