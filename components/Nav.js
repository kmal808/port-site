import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import logo from '/home/kurt/code/repos/port-site/public/assets/default.png'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

function Nav() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex items-center justify-between w-full h-full px-10 2xl:px-16'>
        <Image src={logo} alt='logo' width='135' height='100' />
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
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={logo} width='100' height='100' alt='logo' />
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let's build something sick together
              </p>
            </div>
          </div>
          <div>
            <ul className='py-4 flex flex-col'>
              <Link href='/'>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/about'>
                <li className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/skills'>
                <li className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/projects'>
                <li className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/contact'>
                <li className='py-4 text-sm'>Contacct</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-teal-400'>
                Let's Connect
              </p>
              <div className='flex items-center justify-between my-4  w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <a href='https://twitter.com/kmal808'>
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
