import React from 'react'
import profileimage from '../assets/profileimage.jpeg'
import resume from '../assets/resume.pdf'
const Hero = () => {
    return (
        <div className='pb-4 lg:mb-32'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-8'>
                        <img src={profileimage} alt="profile_image" width={350} height={400}
                            className='rounded-2xl border-black' />
                    </div>
                </div>

                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center mt-8 lg:items-start'>
                        <h2 className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent text-4xl mb-2 tracking-tighter  lg:text-8xl'>Aditya Verma</h2>
                        <h2 className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent text-3xl mb-6 lg:text-4xl '>Full Stack Developer</h2>
                        <span className='font-medium py-6 tracking-tighter text-lg'>Hi there! I 
                            transform ideas into working applications by building both the front 
                            and back end of websites. I love creating clean, user-friendly 
                            interfaces while also handling the complex server-side logic that
                             powers them. With experience in modern web technologies and a 
                             problem-solving mindset, I focus on delivering robust solutions that
                              make a real impact. I'm always excited to take on new challenges and 
                              create something amazing together.
                        Would you like me to adjust this further? I can make it even more concise 
                        or emphasize specific aspects of web development.</span>
                        <a href={resume}
                        download
                        className='bg-white
                        text-stone-800 
                        rounded-full p-4 mt-2'>Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
