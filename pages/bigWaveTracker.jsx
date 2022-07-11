import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'
import bigWaveTrackerImg from '../public/assets/projects/big-wave-tracker.gif'

const bigWaveTracker = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={bigWaveTrackerImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2 text-2xl sm:text-3xl font-bold'>
						Big Wave Tracker
					</h2>
					<h3 className='font-bold'>HTML / CSS</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
				<div className='col-span-4'>
					<p>Project</p>
					<h2 className='text-3xl sm:text-4xl font-bold mb-2 text-teal-200'>
						Overview
					</h2>
					<p>
						This website is a SPA mock up of an AI Surf Reporting mobile app
						download site. "Use AI to never miss the next big swell". Built
						using HTML and CSS.
					</p>
					<a
						href='https://bigwavetracker.kurtmalley.com'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4 shadow-lg shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-teal-400 to-teal-700 text-white'>
							Demo
						</button>
					</a>
					<a href='https://github.com/kmal808' target='_blank' rel='noreferrer'>
						<button className='px-8 py-2 mt-4 ml-4 shadow-lg shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-teal-400 to-teal-700 text-white'>
							Code
						</button>
					</a>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
					<div className='p-2'>
						<p className='text-center font-bold pb-2'>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='text-gray-600 dark:text-slate-300 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' />
								HTML
							</p>
							<p className='text-gray-600 dark:text-slate-300 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' />
								CSS
							</p>
						</div>
					</div>
				</div>
				<Link href='/#projects'>
					<p className='underline text-teal-400 cursor-pointer'>Back</p>
				</Link>
			</div>
		</div>
	)
}

export default bigWaveTracker
