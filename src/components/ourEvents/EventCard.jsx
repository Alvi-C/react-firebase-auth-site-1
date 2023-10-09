/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const EventCard = ({ event}) => {

    const { id, name, image, short, price, accomplish } = event

    return (
			<div className='w-96 md:w-80 lg:w-72 bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl'>
				<img src={image} alt='Product' className='h-80 object-cover' />
				<div className='px-4 py-3'>
					<h3 className='text-lg font-bold text-black truncate block capitalize mb-3'>
						{name}
					</h3>
					<p className='text-gray-600 font-normal mr-3 text-sm mb-2'>
						{short}
					</p>
					<div className='mt-5 flex items-center justify-between'>
						<p className='text-black font-bold uppercase text-xs'>
							Price : <span className='text-black'>{price}</span>
						</p>
						<p className='text-gray-800 font-bold text-xs'>
							Managed: {accomplish}
						</p>
					</div>
					<Link to={`/events/${id}`}>
						<button className='mt-5 text-black bg-yellow-300 hover:bg-yellow-400 font-medium text-sm px-3 py-1'>
							View Details
						</button>
					</Link>
				</div>
			</div>
		)
};

export default EventCard;