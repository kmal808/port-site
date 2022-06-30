import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import bankiImage from '../public/assets/projects/banki-node-app.gif'
import mernEcom from '../public/assets/projects/mern-ecom.gif'
import bigWaveTracker from '../public/assets/projects/big-wave-tracker.gif'
import wesMansionTattoos from '../public/assets/projects/wes-mansion-tattoos.gif'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-teal-500'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Technical Interview Prep'
            backgroundImg={bankiImage}
            projectUrl='/banki'
            tech='VanillaJS, Express'
          />
          <ProjectItem
            title='Mern Ecommerce'
            backgroundImg={mernEcom}
            projectUrl='/mern'
            tech='ReactJS, Express, MongoDB'
          />
          <ProjectItem
            title='Big Wave Tracker'
            backgroundImg={bigWaveTracker}
            projectUrl='/bigwave'
            tech='HTML, CSS'
          />
          <ProjectItem
            title='Wes Mansion Tattos'
            backgroundImg={wesMansionTattoos}
            projectUrl='/tattoos'
            tech='HTML, CSS'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
