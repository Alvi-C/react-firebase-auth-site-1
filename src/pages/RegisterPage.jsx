import { useContext } from "react";
import PrimaryButton from "../components/common/PrimaryButton";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useState } from "react";


const RegisterPage = () => {

    const [registerError, setRegisterError] = useState('')


    const authInfo = useContext(AuthContext);

    const handleRegister = e => {
			e.preventDefault()
			const email = e.target.email.value
			const password = e.target.password.value
            setRegisterError('')

            if (!email || !password) {
				setRegisterError('Please fill all the fields')
				return
            }

            if (password.length < 6) {
				setRegisterError('Password must be at least 6 characters long')
				return
			} else if (!/[A-Z]/.test(password)) {
				setRegisterError(
					'Password must contain at least one uppercase letter'
				)
				return
			} else if (!/[^a-zA-Z0-9]/.test(password)) {
				setRegisterError(
					'Password must contain at least one special character'
				)
				return
			}

			authInfo.createUser(email, password)
				.then(result => {
					const user = result.user
					console.log(user)
                })
                .catch(error => {
					console.error(error)
				})
		}

    return (
			<div>
				<div className='grid grid-cols-1 lg:grid-cols-2'>
					<div className='flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
						<div className='xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md'>
							<h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl'>
								Create account
							</h2>
							<p className='mt-2 text-sm text-gray-600'>
								Already have an account?{' '}
								<Link
									to='/login'
									className='font-semibold text-black transition-all duration-200 hover:underline'
								>
									Please login
								</Link>
							</p>

							<form onSubmit={handleRegister} className='mt-10'>
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
										{registerError && (
											<p className='mt-2 mb-3 text-sm text-red-600'>
												{registerError}
											</p>
										)}
										<div className='flex justify-center mt-8'>
											<button type='submit'>
												<PrimaryButton title={'Register'} />
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className='h-full w-full'>
						<img
							className='mx-auto h-full w-full rounded-md object-cover'
							src='https://i.ibb.co/WxjFr7J/gallery-20.jpg'
							alt=''
						/>
					</div>
				</div>
			</div>
		)
};

export default RegisterPage;