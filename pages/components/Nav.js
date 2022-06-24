import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Nav() {
  return (
    <div className='fixed w-full h-20 shadow-xl'>
      <div className='flex items-center justify-between w-full h-full px-10 2xl:px-16'>
        <Image
          src='/./public/assets/default.png'
          alt='logo'
          width='135'
          height='100'
        />
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase border-teal-200'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase border-teal-200'>About</li>
            </Link>
            <Link href='#skills'>
              <li className='ml-10 text-sm uppercase border-teal-200'>
                Skills
              </li>
            </Link>
            <Link href='#projects'>
              <li className='ml-10 text-sm uppercase border-teal-200'>
                Projects
              </li>
            </Link>
            <Link href='#contact'>
              <li className='ml-10 text-sm uppercase border-teal-200'>
                Contact
              </li>
            </Link>
            <Link href='#projects'>
              <li className='ml-10 text-sm uppercase border-teal-200'>
                Skills
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
