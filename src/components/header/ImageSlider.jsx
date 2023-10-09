import { useState, useEffect } from 'react'

const ImageSlider = () => {
    const images = [
			'https://i.ibb.co/p0Sh5Gy/gallery-2.jpg',
			// 'https://i.ibb.co/k0bJMQ6/gallery-17.jpg',
			// 'https://i.ibb.co/gzws4Kd/gallery-18.jpg',
			// 'https://i.ibb.co/2tLjWtB/gallery-12.jpg',
			// 'https://i.ibb.co/6YQnL1L/gallery-11.jpg',
			// 'https://i.ibb.co/MM1m6Vb/gallery-5.jpg',
			// 'https://i.ibb.co/VvMsMjv/gallery-10.jpg',
			// 'https://i.ibb.co/Ms9hgvJ/gallery-9.jpg',
			// 'https://i.ibb.co/k4M9ZY5/gallery-7.jpg',
			// 'https://i.ibb.co/PYVsbpm/gallery-8.jpg',
			// 'https://i.ibb.co/S0TDMCd/gallery-16.jpg',
		]

	const [activeIndex, setActiveIndex] = useState(0)

	const handleImageClick = () => {
		setActiveIndex(prevIndex => (prevIndex + 1) % images.length)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(prevIndex => (prevIndex + 1) % images.length)
		}, 1000)

		return () => clearInterval(interval)
	}, [images.length])

	return (
		<div className='my-5 lg:my-10'>
			<div className='relative h-[600px] w-full overflow-hidden'>
				{/* Main Image */}
				<img
					src={images[activeIndex]}
					alt={`Slide ${activeIndex}`}
					className={'w-full h-full object-cover'}
					onClick={handleImageClick}
				/>
			</div>
		</div>
	)
}

export default ImageSlider
