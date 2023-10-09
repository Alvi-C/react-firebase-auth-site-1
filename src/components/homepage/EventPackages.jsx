import { useLoaderData } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import EventLists from "../ourEvents/EventLists";

const EventPackages = () => {
    const eventList = useLoaderData()
    const headingText = 'If you can dream it, We can plan it'
	const subHeadingText = 'Our Event Packages'

    return (
			<div className='mt-24 lg:mt-32 mb-16'>
				<SectionHeading
					headingText={headingText}
					subHeadingText={subHeadingText}
				/>
                <EventLists eventList={eventList} />
			</div>
		)
};

export default EventPackages;