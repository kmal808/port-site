import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profile from '/home/kurt/code/repos/port-site/public/assets/profile.jpg'

function About() {
  return (
    <div id='about' className='flex items-center w-full p-2 py-16 md:h-screen'>
      <div className='max-w[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='py-10 tracking-widest text-teal-700 uppercase'>
            About
          </h2>
          <p className='py-1'>Add paragraph here</p>
          <h4 className='pt-4 animate-pulse'>Experience</h4>
          <p className='py-1'>Add experience here</p>
          <Link href='/#projects'>
            <p className='py-10 underline cursor-pointer'>
              Check out some of my projects...
            </p>
          </Link>
        </div>
        <div>
          <Image
            className='duration-200 ease-in rounded-full'
            src={profile}
            alt='me'
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}

export default About
