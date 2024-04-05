import React from 'react'
import mobile from '../assets/mobileR.png'

const About = () => {
  return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16'>
          
          
      <div class="py-16 mb-6 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 relative bg-black/40 max-w-[1300px] mx-auto rounded-xl" >   
        <div class =" p-7 mx-auto">
          <div>
              <h2 class="text-3xl font-bold leading-tight gray-primary-color sm:text-4xl lg:text-5xl">Hello, I am <span className='italic'>Tarun Kumar Ravva</span></h2>
              <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8">
              A motivated and skilled frontend engineer with around 2 years of experience, specializing in developing robust applications using <span>React.js</span>. Proficient in <span>HTML5, CSS3,</span> and <span>JavaScript</span>, with extensive expertise in frontend frameworks like React.js. Possesses a strong understanding of responsive web design and mobile-first development principles. Familiarity with state management libraries such as <span>Redux</span>, as well as <span>Bootstrap's</span> grid system and <span>Tailwind </span>CSS components, enables the creation of flexible and scalable layouts. Demonstrates excellent problem-solving and analytical skills, coupled with a passion for learning and staying updated with emerging frontend technologies.
              </p>

              <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8">
                Furthermore, I have a solid understanding of the principles of <span>Representational State Transfer (REST) </span>architecture. I possess the ability to create, consume, and interact with RESTful APIs using HTTP methods such as GET, POST, PUT, and DELETE. Proficiency in working with <span>JSON (JavaScript Object Notation)</span> data format, commonly used for data exchange between client and server, enhances my capability in designing and implementing RESTful endpoints for CRUD (Create, Read, Update, Delete) operations.
              </p>
          </div>
            <img class=" flex md:absolute mx-auto bottom-[2%] right-[10%] w-[240px] md:w-[400px] h-auto" src={mobile} alt=""/> 
        </div>
      </div>
         
         
          <div class="bg-black/40 max-w-[1300px] mx-auto rounded-xl overflow-hidden " > 
          <div class="px-6 py-10">
            <div class="mx-auto max-w-5xl text-center">
              <h2 class="block w-full gray-primary-color text-3xl sm:text-4xl">Acadamic Qualification and Experience</h2>
              <p class="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-grey-400"> Technologies Known  </p>
            </div>



          <div class =" mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14  sm:grid-cols-2 lg:grid-cols-3">
             
             
              <div class="rounded xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow ">
              <h3 class="text-xl italic text-grey-200"> Education </h3> 
              <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">In <span>2019</span>, I graduated with a Bachelor's degree in Mechanical Engineering from <span>Vignan's Institution of Information Technology</span> with a GPA of <span>72.59%</span>.
              </p>
              </div>

           
              <div class="rounded xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow ">
              <h3 class="text-xl italic text-grey-200">  Experience</h3> 
              <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">For a span of <span>2 years</span> , I held the role of Systems Engineer at <span>Infosys</span> in Bhubaneswar, Odisha, where I engaged in diverse projects, fostered cross-functional collaboration, and honed my skills in software engineering </p>
              </div>

           
              <div class="rounded xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow ">
              <h3 class="text-xl italic text-grey-200"> Skills And Tools</h3> 
              <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Skilled in cutting-edge web frameworks like React.js and Node.js, alongside Bootstrap and Tailwind CSS for frontend design. Proficient in JavaScript, HTML, and CSS, with experience in<span> MySQL</span> and <span> MongoDB</span> for database management. Versatile across operating systems and adept in Git for version control. Utilizes Visual Studio Code and MongoDB Compass for efficient development.
              </p>
    
              </div>

          </div>

          </div>
          </div>
          </div>
          
          
         
  )
}

export default About
