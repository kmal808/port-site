import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Profile from '../public/about-image.jpg'

const About = () => {
	return (
		<div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='uppercase text-xl tracking-widest text-teal-600'>
						About
					</p>
					<h2 className='py-4'>Get To Know Me</h2>
					{/* //ToDo decide on a sub heading */}
					<h4 className='py-4'>Who I Am</h4>
					<p className='py-2 text-gray-600'>
						🏗️ Highly experienced construction operations manager that has
						brought my passion, problem solving and collaborative skills to the
						field of software development.
					</p>
					<h4 className='py-4'>Where I&apos;m At</h4>
					<p className='py-2 text-gray-600'>
						🌎 Located on the island of Oahu, Hawaii
					</p>
					<h4 className='py-4'>What I Do</h4>
					<p className='py-2 text-gray-600'>
						{/* //ToDo finish this section  */}
						💪 My father taught me two things at a young age that have molded
						the person I am today. The first is in order to get anywhere in life
						you have to work hard. The second is to never do a job halfa$$.
						Heeding that advise, I worked my way from grunt laborer in the field
						to managing operations for a 10m annual rev residential construction
						company, increasing revenue by 100% during my tenure.
					</p>
					<h4 className='py-4'>How I Do It</h4>
					<p className='py-2 text-gray-600'>
						{/* //ToDo finish this section  */}
						🦺 Using that experience, work ethic, and dedication I now deliver
						high quality responsive websites to clients, build and deploy full
						stack web applications, and work on a development team creating
						responsive web sites and applications for clients.
					</p>
					<Link href='/#projects'>
						<p className='py-5 text-gray-600 underline cursor-pointer'>
							👀 See what I&apos;ve been working on.....
						</p>
					</Link>
				</div>
				<div className='w-full h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
					<Image className='rounded-xl' src={Profile} alt='me' />
				</div>
			</div>
		</div>
	)
}

export default About
