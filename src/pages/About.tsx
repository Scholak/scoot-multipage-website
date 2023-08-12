import { Faq, AboutUs, Values } from '../components/page/about'
import { PageTitle } from '../components/shared'
import aboutTitleBg from '../assets/about_title_bg.png'

const About = () => {
  return (
		<>
			<PageTitle title='About' img={aboutTitleBg} />
			<AboutUs />
			<Values />
			<Faq />
		</>
	)
}

export default About
