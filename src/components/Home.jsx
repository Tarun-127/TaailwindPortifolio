import React from 'react'
import { AiFillLinkedin,AiFillGithub,AiFillInstagram } from 'react-icons/ai'
import profilepic from '../assets/profilepicB.png'
import notebookL from '../assets/notebookL.png'
import notebookM from '../assets/notebookM.png'
import resume from '../assets/resume.pdf'




const home = () => {
  return (
    <div class="relative pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 overflow-hidden h-[92vh]">


        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20 ">
            <div class="max-w-xl mx-auto text-center">
                <h1 class=" text-4xl font-bold sm:text-6xl gray-primary-color "> 
                I will solve your Frontend 
                </h1>
                <p class="mt-5 text-base text-white sm:text-xl">
                    Do yo need help in frontend development ? dont hesitate to contact me !
                </p>
                <div>
                    <a href={resume} download="resume" title="" class="shadow-2xl mr-4 inline-flex item-center px-6 py-4 mt-8 font-semibold text-white bg-primary-color rounded-lg transition-all duration-200 hover:scale-110" role="button" >download cv </a>
                    <a href="https://github.com/Tarun-127/JobPortifolio.git" title="" class="inline-flex items-center px-6 py-4 mt-8font-semibold text-white bg-primary-color rounded-lg transition-all duration-200 hover:scale-110 " role="button"> View Work</a>
                </div>
            <div class="flex flex-row justify-between text-white p-8 max-w-[500px] mx-auto">
                <a href="#" className='transition-all duration-200 hover:scale-110 cursor-pointer '> <AiFillLinkedin className='w-[70px] h-auto'/></a>
                <a href="#" className='transition-all duration-200 hover:scale-110 cursor-pointer '> <AiFillGithub className='w-[70px] h-auto'/></a>
                <a href="#" className='transition-all duration-200 hover:scale-110 cursor-pointer '> <AiFillInstagram className='w-[70px] h-auto'/></a>
            </div>
            
            <div class="relative bottom-0 z-10 flex mx-auto justify-center">
                <img class="left-[-20px] top-[-20px] sm:left-[-290px] sm:top-[-200px] absolute block w-auto h-[350px] sm:h-[350px]" src={notebookL} alt=""/>
                <img class="absolute sm:relative w-auto bottom -[-110px] right-[-70px] sm:bottom-0  sm:right-0 h-[100px] sm:h-[380px]" src={notebookM} alt=""/>
                <img class="right-[-400px] sm:bottom-[110px] absolute block h-auto w-[800px] sm:w-[900px]" src={profilepic} alt=""/>

            </div>
            
            
            </div>

        </div>
      <div>

      </div>
    </div>
  )
}

export default home
