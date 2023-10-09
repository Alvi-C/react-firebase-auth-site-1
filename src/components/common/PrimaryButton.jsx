/* eslint-disable react/prop-types */


const PrimaryButton = ({title}) => {
    return (
			<div className='flex justify-center mt-10'>
				<div className='group relative inline-block text-sm font-medium text-yellow-300 focus:outline-none focus:ring active:text-yellow-500'>
					<span className='absolute inset-0 translate-x-0.5 translate-y-0.5 bg-black transition-transform group-hover:translate-y-0 group-hover:translate-x-0'></span>

					<span className='relative block border border-current text-black bg-yellow-300 px-8 py-3'>
						{title}
					</span>
				</div>
			</div>
		)
};

export default PrimaryButton;