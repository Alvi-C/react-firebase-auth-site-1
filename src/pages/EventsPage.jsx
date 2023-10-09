import { useLoaderData } from 'react-router-dom'
import SectionHeading from '../components/common/SectionHeading'
import EventLists from '../components/ourEvents/EventLists'

const EventsPage = () => {
    const eventList = useLoaderData()
    const headingText = 'If you can dream it, We can plan it'
    const subHeadingText = 'Our Event Packages'

	return (
		<div className='mt-10'>
			<SectionHeading
				headingText={headingText}
				subHeadingText={subHeadingText}
			/>
			<EventLists eventList={eventList} />
		</div>
	)
}

export default EventsPage
