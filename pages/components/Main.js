import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

function Main() {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center'>
        <div>
          <h1>Aloha, I'm Kurt .</h1>
          <div>
            <h2 className='py-2 text-gray-500 uppercase'>
              Full stack software developer
            </h2>
            <p className='py-4 m-auto tracking-widest text-gray-400 uppercase'>
              Learn More About Me!{' '}
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto p-2'>
              <div className='p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125'>
                <a href='https://www.linkedin.com/in/kurtmalley/'>
                  <FaLinkedinIn />
                </a>
              </div>
              <div className='p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125'>
                <a href='https://github.com/kmal808'>
                  <FaGithub />
                </a>
              </div>
              <div className='p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125'>
                <a href='mailto:kurtmalleydev@gmail.com'>
                  <AiOutlineMail />
                </a>
              </div>
              <div className='p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125'>
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
