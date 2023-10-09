
import { Link } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";
import SectionHeading from "../common/SectionHeading";


const OurExpertise = () => {
    const headingText = 'Elevate Your Celebrations Beyond Ordinary'
    const subHeadingText = 'Your Event, Our Expertise'
    return (
			<div className='mt-14 lg:mt-20 mb-10'>
				<SectionHeading
					headingText={headingText}
					subHeadingText={subHeadingText}
				/>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transform duration-500 px-4 mt-10'>
					<div className='shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl'>
						<div className='max-h-140 overflow-hidden'>
							<img
								className='w-full h-auto'
								src='https://images.squarespace-cdn.com/content/v1/5cf1d47163f8c20001ad4790/0f316137-809d-4ba9-90a8-5a1eddd2b902/2022-03-23+12.13.19.jpg?format=2500w'
								alt=''
							/>
						</div>
						<div className='p-7 my-auto pb-12 '>
							<div className='absolute bottom-52 lg:bottom-56 bg-yellow-300'>
								<h1 className='text-6xl font-italianno font-semibold text-black px-4 py-2'>
									Planning
								</h1>
							</div>
							<p className='text-lg font-light leading-relaxed text-gray-500 mt-5'>
								From conceptualizing the theme to ensuring every tiny detail is
								in place, our planning services are comprehensive, ensuring your
								event is flawlessly executed.
							</p>
						</div>
					</div>

					<div className='shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl'>
						<div className='max-h-140 overflow-hidden'>
							<img
								className='w-full h-[350px] object-cover'
								src='https://images.squarespace-cdn.com/content/v1/5cf1d47163f8c20001ad4790/1656516611825-G9CEOZDADTRI4GOE3THF/IMG_0735.jpg?format=2500w'
								alt=''
							/>
						</div>
						<div className='p-7 my-auto pb-12 '>
							<div className='absolute bottom-52 lg:bottom-56 bg-yellow-300'>
								<h1 className='text-6xl font-italianno font-semibold text-black px-4 py-2'>
									Styling
								</h1>
							</div>
							<p className='text-lg font-light leading-relaxed text-gray-500 mt-5'>
								From conceptualizing the theme to ensuring every tiny detail is
								in place, our planning services are comprehensive, ensuring your
								event is flawlessly executed.
							</p>
						</div>
					</div>

					<div className='shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl'>
						<div className='max-h-140 overflow-hidden'>
							<img
								className='w-full h-[350px] object-cover'
								src='https://www.weddingsutra.com/images/Vendor_Images/Wedding_Planners/b3-event/b3-event09.jpg'
								alt=''
							/>
						</div>
						<div className='p-7 my-auto pb-12 '>
							<div className='absolute bottom-52 lg:bottom-56 bg-yellow-300'>
								<h1 className='text-6xl font-italianno font-semibold text-black px-4 py-2'>
									Renting
								</h1>
							</div>
							<p className='text-lg font-light leading-relaxed text-gray-500 mt-5'>
								Sourcing, buying, and renting inventory for an event can be a
								huge pain. you have exclusive access to our rental inventory of
								dinnerware, glassware, linens, décor, and more.
							</p>
						</div>
					</div>
				</div>

				<Link to='/service' className='flex justify-center mt-10'>
					<PrimaryButton title={'Check out our services'} />
				</Link>
			</div>
		)
};

export default OurExpertise;