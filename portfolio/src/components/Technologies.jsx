import React from 'react'
import reacticon from '../assets/react.svg'
import nodejsicon from '../assets/nodejsicon.svg'
import mongoicon from '../assets/mongoicon.svg'
import giticon from '../assets/giticon.svg'

const Technologies = () => {
  return (
    <div className='pb-24'>
        <h2 className='text-center my-20 text-5xl'>Technologies</h2>
        <div className='flex flex-wrap justify-center items-center gap-8'>
            <div className=''> 
                <img src={reacticon} alt="" height={100} width={100}/>
            </div>
            <div>
                <img src={nodejsicon} alt="" height={100} width={100}/>
            </div>
            <div>
                <img src={mongoicon} alt="" height={100} width={100}/>
            </div>
            <div>
                <img src={giticon} alt="" height={100} width={100}/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
