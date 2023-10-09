import { Link } from "react-router-dom";
import PrimaryButton from "../components/common/PrimaryButton";

const RentalPage = () => {
    return (
			<div className='min-h-screen mt-10 mb-8'>
				<h1 className='text-3xl font-extrabold text-center sm:text-5xl mb-5'>
					Rentals
				</h1>
				<p className='mb-24 text-lg font-bold w-80 mx-auto text-center'>
					Our list of rentals is HUGE! We look forward to hearing from you about
					all of your event rental needs!
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
					<div className='h-[300px] w-[300px] rounded-md bg-yellow-300 mx-auto flex items-center justify-center'>
						<h1 className='text-4xl font-semibold text-black'>Linens</h1>
					</div>
					<div className='h-[300px] w-[300px] rounded-md bg-yellow-300 mx-auto flex items-center justify-center'>
						<h1 className='text-4xl font-semibold text-black'>
							Party Accessories
						</h1>
					</div>
					<div className='h-[300px] w-[300px] rounded-md bg-yellow-300 mx-auto flex items-center justify-center'>
						<h1 className='text-4xl font-semibold text-black'>
							Tables + Chairs
						</h1>
					</div>
					<div className='h-[300px] w-[300px] rounded-md bg-yellow-300 mx-auto flex items-center justify-center'>
						<h1 className='text-4xl font-semibold text-black'>
							Sound Equipment
						</h1>
					</div>
					<div className='h-[300px] w-[300px] rounded-md bg-yellow-300 mx-auto flex items-center justify-center'>
						<h1 className='text-4xl font-semibold text-black'>
							Large Attractions
						</h1>
					</div>
					<div className='h-[300px] w-[300px] rounded-md bg-yellow-300 mx-auto flex items-center justify-center'>
						<h1 className='text-4xl font-semibold text-black'>Convention hall</h1>
					</div>
				</div>
				<div className='flex items-center justify-center mt-16'>
					<Link to='/contact'>
						<PrimaryButton title={'Contact us'} />
					</Link>
				</div>
			</div>
		)
};

export default RentalPage;