
const TopBannerText = () => {
    return (
			<div className='mt-5 lg:mt-10'>
				<div className='flex flex-col w-full '>
					<h1 className='text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl'>
						Life Deserves <br />
						<span className='text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500'>
							Exceptional
						</span>{' '}
						<span className='text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500'>
							Celebrations
						</span>
					</h1>

					<p className='max-w-3xl px-4 mx-auto mt-6 text-lg text-center text-gray-700md:text-xl'>
						Elevating Your Event Experience, One Spotlight at a Time. Explore
						Our Event Packages for a Seamless Celebration!
					</p>
				</div>
			</div>
		)
};

export default TopBannerText;