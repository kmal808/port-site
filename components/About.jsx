import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Profile from '../public/assets/profile.jpg'

const About = () => {
	return (
		<div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='uppercase text-xl tracking-widest text-teal-500'>
						About
					</p>
					<h2 className='py-4'>Who - What - When - Where - How</h2>
					<h4 className='py-4'>Who I Am</h4>
					<p className='py-2 text-gray-600'>
						🏗️ Highly experienced construction operations manager that has
						brought my passion, problem solving and collaborative skills to
						field of software engineering.
					</p>
					<h4 className='py-4'>Where I&apos;m At</h4>
					<p className='py-2 text-gray-600'>
						🌎 Based on the island of Oahu, Hawaii
					</p>
					<h4 className='py-4'>What I Do</h4>
					<p className='py-2 text-gray-600'>
						{/* ToDo finish section  */}
						🦺 After a decade of managing construction projects, experience
						.......... Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Suscipit, odit a? blah blah blah blah blah.
					</p>
					<h4 className='py-4'>How I Do It</h4>
					<p className='py-2 text-gray-600'>
						{/* ToDo finish section  */}
						💪 My father taught me from a young age that hard work pays off, and
						to never do a job halfa$$. Because of that my work ethic and
						dedication are unmatched ....... Lorem, ipsum dolor sit amet
						consectetur.
					</p>
					<Link href='/#projects'>
						<p className='py-2 text-gray-600 underline cursor-pointer'>
							👀 Check out some of my latest projects...
						</p>
					</Link>
				</div>
				<div className='w-full h-auto m-auto shadow-xl shadow-teal-500 rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
					<Image className='rounded-full' src={Profile} alt='me' />
				</div>
			</div>
		</div>
	)
}

export default About
