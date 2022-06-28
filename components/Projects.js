import React from 'react'

function Projects() {
  return (
    <div className='w-full'>
      <div className='m-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-teal-500'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-col-2 gap-8'>
          <div className='relative flex items-center justify-self-center h-auto w-full shadow-xl shadow-teal-400 rounded-xl p-4 group hover:bg-gradient-to-r from-teal-300 to-teal-100'></div>
        </div>
      </div>
    </div>
  )
}

export default Projects
