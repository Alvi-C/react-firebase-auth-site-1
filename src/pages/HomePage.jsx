import ImageSlider from "../components/header/ImageSlider";
import TopBannerText from "../components/header/TopBannerText";
import EventPackages from "../components/homepage/EventPackages";
import OurExpertise from "../components/homepage/OurExpertise";



const HomePage = () => {
    return (
			<div>
				<TopBannerText/>
				<ImageSlider/>
				<OurExpertise/>
				<EventPackages/>
			</div>
		)
};

export default HomePage;