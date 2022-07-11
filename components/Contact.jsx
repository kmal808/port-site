import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContactImg from '../public/assets/profile.jpg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
	const [query, setQuery] = useState({
		name: '',
		phone: '',
		email: '',
		subject: '',
	})

	// Update inputs value
	const handleParam = () => (e) => {
		const name = e.target.name
		const value = e.target.value
		setQuery((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}
	// Form Submit function
	const formSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData()
		Object.entries(query).forEach(([key, value]) => {
			formData.append(key, value)
		})
		fetch('https://getform.io/f/5049ea6d-d28c-4dd2-b0e1-fc9e7027e71e', {
			method: 'POST',
			body: formData,
		}).then(() =>
			setQuery({ name: '', phone: '', email: '', subject: '', message: '' })
		)
	}

	return (
		<div id='contact' className='w-full lg:h-screen'>
			<div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
				<p className='text-xl font-bold tracking-widest uppercase text-teal-600'>
					Contact
				</p>
				<h2 className='py-4 text-3xl sm:text-4xl'>Get In Touch</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* left */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-4 h-full'>
							<div>
								<Image
									className='rounded-xl hover:scale-105 ease-in duration-300'
									src={ContactImg}
									alt='/'
									width={400}
									height={400}
								/>
							</div>
							<div>
								<h2 className='py-2 text-3xl sm:text-4xl'>Kurt Malley</h2>
								<p>Full Snack Developer</p>
								<p className='py-4'>
									I&apos;m available for freelance or full-time positions.
									Contact me and let&apos;s talk story.
								</p>
							</div>
							<div>
								<p className='uppercase pt-8'>Let&apos;s Connect</p>
								<div className='flex items-center justify-between py-4'>
									<a
										href='https://www.linkedin.com/in/kurt-malley/'
										target='_blank'
										rel='noreferrer'
									>
										<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaLinkedinIn />
										</div>
									</a>
									<a
										href='https://github.com/kmal808'
										target='_blank'
										rel='noreferrer'
									>
										<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaGithub />
										</div>
									</a>

									<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
										<a href='mailto:kurtmalleydev@gmail.com'>
											<AiOutlineMail />
										</a>
									</div>
									<Link href='https://docs.google.com/document/d/1_ijO_dAmEcKGXAkd9oXZx5tLBLuLcRra/edit?usp=sharing&ouid=108950247473316681452&rtpof=true&sd=true'>
										<a>
											<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
												<BsFillPersonLinesFill />
											</div>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* right */}
					<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form onSubmit={formSubmit}>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Name</label>
										<input
											className='border-2 rounded-lg p-3 flex border-gray-300'
											type='text'
											name='name'
											required
											value={query.name}
											onChange={handleParam()}
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											Phone Number
										</label>
										<input
											className='border-2 rounded-lg p-3 flex border-gray-300'
											type='text'
											name='phone'
											value={query.phone}
											onChange={handleParam()}
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Email</label>
									<input
										className='border-2 rounded-lg p-3 flex border-gray-300'
										type='email'
										name='email'
										required
										value={query.email}
										onChange={handleParam()}
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Subject</label>
									<input
										className='border-2 rounded-lg p-3 flex border-gray-300'
										type='subject'
										name='subject'
										required
										value={query.subject}
										onChange={handleParam()}
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Message</label>
									<textarea
										className='border-2 rounded-lg p-3 border-gray-300'
										rows='10'
										name='message'
										required
										value={query.message}
										onChange={handleParam()}
									></textarea>
								</div>
								<button
									type='submit'
									className='w-full p-4 text-gray-100 mt-4 shadow-lg shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-teal-300 to-teal-600'
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>

				<div className='flex justify-center py-12'>
					<Link href='/'>
						<a>
							<div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
								<HiOutlineChevronDoubleUp
									className='m-auto text-teal-600'
									size={30}
								/>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Contact
