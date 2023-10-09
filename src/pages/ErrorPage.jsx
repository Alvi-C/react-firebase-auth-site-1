import { Link } from "react-router-dom";
import PrimaryButton from "../components/common/PrimaryButton";

const ErrorPage = () => {
    return (
			<div className='flex items-center justify-center px-2 md:px-0 mt-32'>
				<div>
					<p className='text-sm font-semibold text-black'>404 error</p>
					<h1 className='mt-3 text-2xl font-semibold text-gray-800 md:text-3xl'>
						We can&apos;t find that page
					</h1>
					<p className='mt-4 text-gray-500'>
						Sorry, the page you are looking for doesn&apos;t exist or has been
						moved or something wrong.
					</p>
					<div className='mt-6 flex items-center space-x-3'>
						<Link to='/'>
							<PrimaryButton title={'Back to home'} />
						</Link>
                        <p>OR</p>
						<Link to='/contact'>
							<PrimaryButton title={'Contact us'} />
						</Link>
					</div>
				</div>
			</div>
		)
};

export default ErrorPage;