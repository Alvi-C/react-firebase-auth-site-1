import { Link } from "react-router-dom";
import PrimaryButton from "../components/common/PrimaryButton";


const ServicePage = () => {
    return (
			<div>
				<div className='flex flex-col items-center px-4 mx-auto md:flex-row sm:px-6 p-8'>
					<div className='flex items-center py-5 md:w-1/2 md:pb-10 md:pt-10 md:pr-5'>
						<div className='text-left'>
							<h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-800 sm:text-3xl sm:leading-none md:text-3xl lg:text-5xl'>
								Event Planning
							</h2>
							<p className='max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-base md:max-w-2xl'>
								We work with you and take charge of the end-to-end event
								planning process, from conceptualization to execution. This
								includes determining event objectives, establishing budgets,
								creating event timelines, and selecting suitable venues and
								vendors.
							</p>
						</div>
					</div>
					<div className='flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10'>
						<div className='w-full p-3 rounded'>
							<div className='rounded-lg bg-white text-black w-full'>
								<img src='https://i.ibb.co/NFyJkMP/event-planning.jpg' />
							</div>
						</div>
					</div>
				</div>

				<div className='flex flex-col items-center px-4 mx-auto md:flex-row sm:px-6 p-8'>
					<div className='flex items-center order-2 md:order-1 py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10'>
						<div className='w-full p-3 rounded'>
							<div className='rounded-lg bg-white text-black w-full'>
								<img src='https://i.ibb.co/8ztPJSm/logistics-management.jpg' />
							</div>
						</div>
					</div>
					<div className='flex items-center order-1 md:order-2 py-5 md:w-1/2 md:pb-10 md:pt-10 md:pl-5'>
						<div className='text-left'>
							<h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-800 sm:text-3xl sm:leading-none md:text-3xl lg:text-5xl'>
								Logistics Management
							</h2>
							<p className='max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-base md:max-w-2xl'>
								We ensure all logistical aspects of the event run smoothly. This
								involves coordinating event setups, managing guest
								registrations, arranging transportation and accommodations, and
								overseeing technical requirements such as audiovisual equipment
								and lighting.
							</p>
						</div>
					</div>
				</div>

				<div className='flex flex-col items-center px-4 mx-auto md:flex-row sm:px-6 p-8'>
					<div className='flex items-center py-5 md:w-1/2 md:pb-10 md:pt-10 md:pr-5'>
						<div className='text-left'>
							<h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-800 sm:text-3xl sm:leading-none md:text-3xl lg:text-5xl'>
								Program Development
							</h2>
							<p className='max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-base md:max-w-2xl'>
								We collaborate with internal stakeholders to develop engaging
								event programs that align with the companys marketing goals.
								This includes scheduling speakers, panel discussions, workshops,
								and entertainment to provide valuable and entertaining content
								to attendees.
							</p>
						</div>
					</div>
					<div className='flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10'>
						<div className='w-full p-3 rounded'>
							<div className='rounded-lg bg-white text-black w-full'>
								<img src='https://i.ibb.co/McvcxZ2/program-development.jpg' />
							</div>
						</div>
					</div>
				</div>

				<div className='flex flex-col items-center px-4 mx-auto md:flex-row sm:px-6 p-8'>
					<div className='flex items-center order-2 md:order-1 py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10'>
						<div className='w-full p-3 rounded'>
							<div className='rounded-lg bg-white text-black w-full'>
								<img src='https://i.ibb.co/h1LbrrK/vendor-and-sponsor-management.jpg' />
							</div>
						</div>
					</div>
					<div className='flex items-center order-1 md:order-2 py-5 md:w-1/2 md:pb-10 md:pt-10 md:pl-5'>
						<div className='text-left'>
							<h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-800 sm:text-3xl sm:leading-none md:text-3xl lg:text-5xl'>
								Vendor and Sponsor Management
							</h2>
							<p className='max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-base md:max-w-2xl'>
								We establish and maintain relationships with vendors, sponsors,
								and partners. This includes negotiating contracts, managing
								vendor deliverables, and ensuring sponsors receive proper
								recognition and exposure during the event.
							</p>
						</div>
					</div>
				</div>

				<div className='flex flex-col items-center px-4 mx-auto md:flex-row sm:px-6 p-8'>
					<div className='flex items-center py-5 md:w-1/2 md:pb-10 md:pt-10 md:pr-5'>
						<div className='text-left'>
							<h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-800 sm:text-3xl sm:leading-none md:text-3xl lg:text-5xl'>
								On-site Event Coordination
							</h2>
							<p className='max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-base md:max-w-2xl'>
								We oversee all on-site event operations, ensuring seamless
								execution. This includes managing event staff, coordinating
								setup and teardown, handling registration, monitoring event
								flow, and troubleshooting any issues that may arise.
							</p>
						</div>
					</div>
					<div className='flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10'>
						<div className='w-full p-3 rounded'>
							<div className='rounded-lg bg-white text-black w-full'>
								<img src='https://i.ibb.co/0GYhpwq/event-coordination.jpg' />
							</div>
						</div>
					</div>
				</div>

				<div className='flex flex-col items-center px-4 mx-auto md:flex-row sm:px-6 p-8'>
					<div className='flex items-center order-2 md:order-1 py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10'>
						<div className='w-full p-3 rounded'>
							<div className='rounded-lg bg-white text-black w-full'>
								<img src='https://i.ibb.co/pRfVCDc/quality-management.jpg' />
							</div>
						</div>
					</div>
					<div className='flex items-center order-1 md:order-2 py-5 md:w-1/2 md:pb-10 md:pt-10 md:pl-5'>
						<div className='text-left'>
							<h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-800 sm:text-3xl sm:leading-none md:text-3xl lg:text-5xl'>
								Quality Management
							</h2>
							<p className='max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-base md:max-w-2xl'>
								Planning an event is only part of the process. Our staff will
								make sure that everything goes smoothly with your event. We know
								how to anticipate problems before they happen, leaving you free
								to enjoy your festivities.
							</p>
						</div>
					</div>
				</div>
				<div className='flex justify-center mb-24'>
					<Link to='/events'>
						<PrimaryButton title={'Check Our Event Packages'} />
					</Link>
				</div>
			</div>
		)
};

export default ServicePage;