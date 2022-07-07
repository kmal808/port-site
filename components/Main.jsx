import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'

const Main = () => {
	return (
		<div id='home' className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase text-sm tracking-widest text-gray-600 dark:text-white'>
						LET&apos;S BUILD SOMETHING SICK TOGETHER
					</p>
					<h1 className='py-4 text-gray-700 dark:text-white'>
						Aloha 🤙, I&apos;m
						<span className='text-teal-500'> Kurt </span>
						<span className='text-gray-500 italic dark:text-gray-200'>
							a.k.a. @kmal808 🏝️
						</span>
					</h1>
					<div>
						<h2 className='py-2 text-gray-700 dark:text-white'>
							A Full Stack Software Developer 💻
						</h2>
						<p className='py-4 m-auto tracking-widest text-gray-500 uppercase dark:text-white'>
							Have a look around 👀
						</p>
						<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<a href='https://www.linkedin.com/in/kurt-malley/'>
									<FaLinkedinIn />
								</a>
							</div>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<a href='https://github.com/kmal808'>
									<FaGithub />
								</a>
							</div>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<a href='mailto:kurtmalleydev@gmail.com'>
									<AiOutlineMail />
								</a>
							</div>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
								<a href='https://twitter.com/kmal808'>
									<FaTwitter />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
