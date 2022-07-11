import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'
import wesMansionTattoosImg from '../public/assets/projects/wes-mansion-tattoos.gif'

const wesMansionTattoos = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[50vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={wesMansionTattoosImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2 text-2xl sm:text-3xl font-bold'>
						Wes Mansion Tattoos
					</h2>
					<h3 className=''>HTML / CSS</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
				<div className='col-span-4'>
					<p>Project</p>
					<h2 className='text-3xl sm:text-4xl font-bold mb-2 text-teal-600'>
						Overview
					</h2>
					<p>
						This is a portfolio SPA website for a vintage black and gray tattoo
						artist. Built using HTML and CSS.
					</p>
					<a
						href='https://wesmansion.kurtmalley.com'
						target='_blank'
						rel='noreferrer'
					>
						<button className='px-8 py-2 mt-4 shadow-lg shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-teal-400 to-teal-700 text-white'>
							Demo
						</button>
					</a>
					<a href='https://github.com/kmal808' target='_blank' rel='noreferrer'>
						<button className='px-8 py-2 mt-4 shadow-lg shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-teal-400 to-teal-700 text-white'>
							Code
						</button>
					</a>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
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
					<p className='underline hover:text-teal-400 cursor-pointer'>Back</p>
				</Link>
			</div>
		</div>
	)
}

export default wesMansionTattoos
