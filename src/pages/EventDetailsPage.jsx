import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PrimaryButton from "../components/common/PrimaryButton";


const EventDetailsPage = () => {

	const [eventsDetails, setEventsDetails] = useState([])

	const eventsData = useLoaderData()
	const { id } = useParams()

	useEffect(() => {
		const selectedEvent = eventsData.find(event => event.id === id)
		setEventsDetails(selectedEvent)
	}, [id, eventsData])

	const description = eventsDetails.details

	return (
		<div className='px-5'>
			<div className='mt-10 mb-10 overflow-hidden flex flex-col mx-auto'>
				<div className='text-center'>
					<h1 className='text-4xl font-semibold mb-2'>
						{eventsDetails.name}
					</h1>
					<h3 className='text-gray-700 text-lg mb-10'>{eventsDetails.short}</h3>
				</div>

				<div>
					<img className='w-full' src={eventsDetails.image} />
				</div>
				<div>
					<p className='text-gray-700 py-5 text-base leading-8'>
						{description}
					</p>
				</div>
			</div>

			<div className="flex justify-center mb-10">
				<PrimaryButton title='Book Now' />
			</div>
		</div>
	)
}

export default EventDetailsPage;
