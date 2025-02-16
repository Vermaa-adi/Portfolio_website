import React from 'react'
import abraxas from '../assets/abraxas.png'

const Projects = () => {
  return (
    <div className='mb-4'>
        <h2 className='text-5xl text-center my-20'>Projects</h2>
        <div className='flex flex-wrap lg:justify-center mb-4'>
            <div className='w-full lg:w-1/4'>
                <a href="https://abraxas-2025.vercel.app/" target='_blank'>
                <img src={abraxas} alt="" height={250} width={250} className='mb-8 rounded'/>
                </a>
            </div>

            <div className='w-full max-w-xl lg:w-3/4'>
                <h2 className='mb-4 text-3xl font-bold'>Team Abraxas Website</h2>
                <p className=' text-stone-400 mb-4'>Team Abraxas is the engineering physics branch's departmental club of 
                    NIT Hamirpur. This is the website of Team Abraxas showcasing the projects, team members, events etc
                    of the club for current and recent years. </p>
                <div className='flex gap-4'>  
                    <span className='bg-stone-800 rounded p-2 font-medium text-stone-300'>React</span>
                    <span className='bg-stone-800 rounded p-2 font-medium text-stone-300'>Tailwind</span>
                    <span className='bg-stone-800 rounded p-2 font-medium text-stone-300'>Framer-motion</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
