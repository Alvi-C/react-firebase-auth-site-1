

const Tesimonial = () => {
    return (
			<div>
				<section className='px-2 py-10 px-5 mt-12 lg:mt-32'>
					<div className='mx-auto max-w-4xl'>
						<div className='md:flex md:items-center md:justify-center md:space-x-14'>
							<div className='relative h-48 w-48 flex-shrink-0'>
								<img
									className='relative h-48 w-48 rounded-full object-cover'
									src='https://cdn.britannica.com/84/200584-050-7EC3F3F6/Jim-Carrey-2012.jpg'
									alt=''
								/>
							</div>
							<div className='mt-10 md:mt-0'>
								<blockquote>
									<p className='text-xl text-black'>
										“I had the pleasure of working with Spotlight Events on a
										recent event, and I couldnot be more impressed with their
										dedication and professionalism. From the initial planning
										stages to the final execution, Spotlight Events demonstrated
										an unwavering commitment to making our event a resounding
										success.”
									</p>
								</blockquote>
								<p className='mt-7 text-lg font-semibold text-black'>
									Jim Carry
								</p>
								<p className='mt-1 text-base text-gray-600'>
									Ace ventura pet detective
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
};

export default Tesimonial;