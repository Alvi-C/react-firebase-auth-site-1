import ImageSlider from "../components/header/ImageSlider";
import TopBannerText from "../components/header/TopBannerText";
import EventPackages from "../components/homepage/EventPackages";
import OurExpertise from "../components/homepage/OurExpertise";
import Tesimonial from "../components/homepage/Tesimonial";



const HomePage = () => {
    return (
			<div>
				<TopBannerText/>
				<ImageSlider/>
				<OurExpertise/>
				<EventPackages/>
				<Tesimonial/>
			</div>
		)
};

export default HomePage;