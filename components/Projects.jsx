import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import bankiImage from '../public/assets/projects/banki-node-app.gif'
import mernEcomImg from '../public/assets/projects/mern-ecom.gif'
import bigWaveTrackerImg from '../public/assets/projects/big-wave-tracker.gif'
import wesMansionTattoosImg from '../public/assets/projects/wes-mansion-tattoos.gif'
import ProjectItem from './ProjectItem'

const Projects = () => {
	return (
		<div id='projects' className='w-full'>
			<div className='max-w-[1240px] mx-auto px-2 py-16'>
				<p className='text-xl tracking-widest uppercase text-teal-600'>
					Projects
				</p>
				<h2 className='py-4'>What I&apos;ve Been Working On</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					<ProjectItem
						title='Technical Interview Prep App'
						backgroundImg={bankiImage}
						projectUrl='/banki'
						tech='JavaScript, Node, Express, RESTApi'
					/>
					<ProjectItem
						title='Mern Ecommerce'
						backgroundImg={mernEcomImg}
						projectUrl='/mernEcom'
						tech='React, Redux, Node, Express, MongoDB'
					/>
					<ProjectItem
						title='Big Wave Tracker'
						backgroundImg={bigWaveTrackerImg}
						projectUrl='/bigWaveTracker'
						tech='HTML, CSS'
					/>
					<ProjectItem
						title='Wes Mansion Tattos'
						backgroundImg={wesMansionTattoosImg}
						projectUrl='/wesMansionTattoos'
						tech='HTML, CSS'
					/>
				</div>
			</div>
		</div>
	)
}

export default Projects
