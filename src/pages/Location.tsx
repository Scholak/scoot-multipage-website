import { PageTitle } from '../components/shared'
import locationTitleBg from '../assets/location_title_bg.png'
import { ListedSection, MapSection } from '../components/page/location'

const Location = () => {
  return (
		<>
			<PageTitle title='Locations' img={locationTitleBg} />
			<MapSection />
			<ListedSection />
		</>
	)
}

export default Location
