/* eslint-disable react/prop-types */

import EventCard from "./EventCard";



const EventLists = ({ eventList }) => {


	return (
		<div>
			<div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-20 mt-10 mb-5'>
				{eventList?.map(eventItem => (
					<EventCard key={eventItem.id} event={eventItem}/>
				))}
			</div>
		</div>
	)
}

export default EventLists;