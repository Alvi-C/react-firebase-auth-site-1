/* eslint-disable react/prop-types */


const SectionHeading = ({headingText, subHeadingText}) => {
    return (
			<div className='mx-auto max-w-3xl text-center'>
				<h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
					{headingText}
				</h2>

				<p className='mt-4 text-gray-800 text-xl md:text-4xl font-bold'>
					<span className='text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500'>
                        {subHeadingText}
					</span>
				</p>
			</div>
		)
};

export default SectionHeading;