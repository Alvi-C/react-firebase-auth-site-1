import { Link } from "react-router-dom";
import PrimaryButton from "../components/common/PrimaryButton";


const CommunityPage = () => {
    return (
			<div className='min-h-screen'>
				<section className='relative bg-[url(https://i.ibb.co/sq3gC3f/community-2.jpg)] bg-cover bg-center bg-no-repeat'>
					<div className='absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/85 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>

					<div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
						<div className='max-w-xl ltr:sm:text-left rtl:sm:text-right'>
							<h1 className='text-3xl font-extrabold text-black md:text-white sm:text-5xl'>
								Help those beautiful people
								<span >Who cannot help themselves</span>
							</h1>

							<div className='mt-8 flex flex-wrap gap-4 text-center'>
								<Link to='/contact'>
									<PrimaryButton title={'To donate contact us'} />
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
};

export default CommunityPage;