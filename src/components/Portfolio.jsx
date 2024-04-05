import React from 'react'
import proj1 from "../assets/proj1.png"
import proj2 from "../assets/proj2.png"
import proj3 from "../assets/proj3.png"
import proj4 from "../assets/proj4.png"
import {AiFillGithub, AiFillChrome} from 'react-icons/ai'




const Portfolio = () => {
  return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 h-[92vh]'>
      <div class='px-7 mx-auto grid sm:grid-cols-2 gap-6'>

        <div class='mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 
                  overflow-hidden shadow-xl z-1 sm:pr-5'>

            <a href='/' class = "group h-48 col-span-3 md:h-80 ">
            <img src={proj1} alt="" class="h-full w-full object-cover object-center transition
                                             duration-200 group-hover:scale-110 rounded-lg"/>
            </a>

          <div class="flex flex-col col-span-4 p-4 mx-auto my-auto">
              <h2 class="text-grey-200 font-bold text-xl leading-10 "> 
              Liquidity Management Systems
              </h2>
              <p class="text-grey-400">
              Engaged in Agile SDLC, including Scrum, for React.js frontend development. Collaborated on bug troubleshooting, ensured responsive design, cross-browser compatibility, and created customizable UI components. Proficient in React.js concepts, providing feedback in code reviews and addressing testing efficiently.
            </p>
          </div>

          <div class="flex flex-row justify-between text-white gap-[-2] mx-auto pb-4 ">
            <AiFillGithub className='w-[45px] h-auto '/>
            <AiFillChrome className='w-[45px] h-auto '/>
          </div>
        </div>

        <div class='mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 
                  overflow-hidden shadow-xl z-1 sm:pr-5'>

            <a href='/' class = "group h-48 col-span-3 md:h-80 ">
            <img src={proj2} alt="" class="h-full w-full object-cover object-center transition
                                             duration-200 group-hover:scale-110 rounded-lg"/>
            </a>

          <div class="flex flex-col col-span-4 p-4 mx-auto my-auto">
              <h2 class="text-grey-200 font-bold text-xl leading-10"> 
               My Portifolio
              </h2>
              <p class="text-grey-400">
              Crafted a sleek and responsive portfolio utilizing Tailwind CSS to showcase professional achievements and skills effectively.
          
              Employed Tailwind CSS to create a modern and dynamic portfolio platform, demonstrating proficiency in front-end development.
           
              Integrated Tailwind CSS framework to develop a polished and visually appealing portfolio, emphasizing attention to detail and design aesthetics.
                            </p>
          </div>

          <div class="flex flex-row justify-between text-white gap-[-2] mx-auto pb-4 ">
            <AiFillGithub className='w-[45px] h-auto '/>
            <AiFillChrome className='w-[45px] h-auto '/>
          </div>
        </div>

        <div class='mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 
                  overflow-hidden shadow-xl z-1 sm:pr-5'>

            <a href='/' class = "group h-48 col-span-3 md:h-80 ">
            <img src={proj3} alt="" class="h-full w-full object-cover object-center transition
                                             duration-200 group-hover:scale-110 rounded-lg"/>
            </a>

          <div class="flex flex-col col-span-4 p-4 mx-auto my-auto">
              <h2 class="text-grey-200 font-bold text-xl leading-10"> 
                Employee database
              </h2>
              <p class="text-grey-400">
              Led the creation of an employee database using MongoDB, Node.js, and Express.js.
              Developed features for managing employee records seamlessly.
              Designed a strong server setup to handle user interactions smoothly.
              Utilized MongoDB for efficient data storage and retrieval.
              Demonstrated expertise in backend development and database management.
              </p>
          </div>

          <div class="flex flex-row justify-between text-white gap-[-2] mx-auto pb-4 ">
            <AiFillGithub className='w-[45px] h-auto '/>
            <AiFillChrome className='w-[45px] h-auto '/>
          </div>
        </div>

        <div class='mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 
                  overflow-hidden shadow-xl z-1 sm:pr-5'>

            <a href='/' class = "group h-48 col-span-3 md:h-80 ">
            <img src={proj4} alt="" class="h-full w-full object-cover object-center transition
                                             duration-200 group-hover:scale-110 rounded-lg"/>
            </a>

          <div class="flex flex-col col-span-4 p-4 mx-auto my-auto">
              <h2 class="text-grey-200 font-bold text-xl leading-10"> 
          Pocket Notes App
              </h2>
              <p class="text-grey-400">
              Developed a pocket notes application using React.js for easy note-taking and organization. Added features like creating, editing, and viewing notes to improve productivity. Stored data locally for seamless access to notes across sessions. Designed a user-friendly interface focused on simplicity and usability. Demonstrated proficiency in front-end development, React.js, and UI/UX design to create a functional and visually appealing app.
              </p>
          </div>

          <div class="flex flex-row justify-between text-white gap-[-2] mx-auto pb-4 pr-4">
            <AiFillGithub className='w-[45px] h-auto '/>
            <AiFillChrome className='w-[45px] h-auto '/>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Portfolio
