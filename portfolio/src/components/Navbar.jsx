import React from 'react'
import navlogo from '../assets/logo.png'
import instalogo from '../assets/instagramlogo.png'
import linkedinlogo from '../assets/linkedinlogo.png'
import githublogo from '../assets/githublogo.png'
import x from '../assets/x.png'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-8'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/">
                <img src={navlogo} alt="logo" height={80} width={80} />
            </a>
        </div>

        <div className='m-7 flex justify-center items-center gap-4'>
            <a href="https://www.linkedin.com/in/aditya-verma-096a8b2a7/" target='_blank'>
                <img src={linkedinlogo} alt=""  height={30} width={30}/>
            </a>

            <a href="https://github.com/Vermaa-adi" target='_blank'>
                <img src={githublogo} alt=""  height={30} width={30}/>
            </a>

            <a href="https://www.instagram.com/iamadi_verma/" target='_blank'>
                <img src={instalogo} alt=""  height={35} width={35}/>
            </a>

            <a href="/">
                <img src={x} alt=""  height={30} width={30}/>
            </a>

        </div>
    </nav>
  )
}

export default Navbar
