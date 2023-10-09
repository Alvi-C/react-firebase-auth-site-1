import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../components/common/PrimaryButton";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useState } from "react";
const LogInPage = () => {

	const [loginError, setLoginError] = useState('')

	const authInfo = useContext(AuthContext);
	const navigate = useNavigate();

	const handleGoogleLogin = () => {
		authInfo.signInWithGoogle()
			.then(result => {
				const user = result.user
				console.log(user)
				navigate('/')
			})
			.catch(error => {
				console.error(error)
			})
	}

	const handleLogin = e => {
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value

		setLoginError('')

		if (!email || !password) {
			setLoginError('Please fill all the fields')
			return
		}

		authInfo.logInUser(email, password)
			.then(result => {
				const user = result.user
				console.log(user)
				e.target.reset()
				navigate('/')
			})
			.catch(error => {
				if (error.code === 'auth/wrong-password') {
					setLoginError("Password doesn't match")
				} else if (error.code === 'auth/user-not-found') {
					setLoginError("Email doesn't match")
				} else {
					console.error(error)
					setLoginError('An error occurred. Please try again later.')
				}
			})
	}

    return (
			<div>
				<div className='grid grid-cols-1 lg:grid-cols-2'>
					<div className='flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
						<div className='xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md'>
							<h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl'>
								Log in
							</h2>
							<p className='mt-2 text-sm text-gray-600'>
								Don&apos;t have an account?{' '}
								<Link
									to='/register'
									className='font-semibold text-black transition-all duration-200 hover:underline'
								>
									Create an account
								</Link>
							</p>

							<div className='mt-10 space-y-3'>
								<button
									onClick={handleGoogleLogin}
									type='button'
									className='relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none'
								>
									<img
										className='w-5 h-5 mr-2'
										src='https://www.svgrepo.com/show/475656/google-color.svg'
										loading='lazy'
										alt='google logo'
									/>
									Sign in with Google
								</button>
							</div>
							<p className='mt-4 text-center'>- Or -</p>
							<form onSubmit={handleLogin}>
								<div className='space-y-5'>
									<div>
										<label
											htmlFor=''
											className='text-base font-medium text-gray-900'
										>
											{' '}
											Email address{' '}
										</label>
										<div className='mt-2'>
											<input
												className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
												name='email'
												type='email'
												placeholder='Email'
											></input>
										</div>
									</div>
									<div>
										<div className='flex items-center justify-between'>
											<label
												htmlFor=''
												className='text-base font-medium text-gray-900'
											>
												{' '}
												Password{' '}
											</label>
										</div>
										<div className='mt-2'>
											<input
												className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
												name='password'
												type='password'
												placeholder='Password'
											></input>
										</div>
									</div>
									{loginError && (
										<p className='mt-2 text-sm text-red-600'>{loginError}</p>
									)}
								</div>
								<div className='flex justify-center mt-8'>
									<button type='submit'>
										<PrimaryButton title={'Sign in'} />
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className='h-full w-full'>
						<img
							className='mx-auto h-full w-full rounded-md object-cover'
							src='https://i.ibb.co/gzws4Kd/gallery-18.jpg'
							alt=''
						/>
					</div>
				</div>
			</div>
		)
};

export default LogInPage;