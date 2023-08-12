import { PageTitle } from "../components/shared"
import careersTitleBg from '../assets/careers_title_bg.png'
import { Employees, JoinUs, WhyJoinUs } from "../components/page/careeres"

const Careers = () => {
  return (
		<>
			<PageTitle title='Careers' img={careersTitleBg} />
			<JoinUs />
			<WhyJoinUs />
			<Employees />
		</>
	)
}

export default Careers
