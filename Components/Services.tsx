import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
        <p className='heading'>
          My <span className='text-yellow-400'>Services</span>
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
            <div data-aos="fade-right">
              <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6  uppercase font-semibold text-center p-[2rem]'>
               <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
               <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                Frontend
               </h1>
               <p className='text-[15px] text-[#d3d2d2] font-normal'>
               Front-end developers rely on tools like Visual Studio Code, GitHub, Sass, and React.js for efficient web interface development. They ensure compatibility with cross-browser testing tools like BrowserStack and optimize app speed with tools like Lighthouse. Collaboration tools like Slack aid teamwork among the development team.
               </p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
            <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]'>
               <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
               <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                 Backend
               </h1>
               <p className='text-[15px] text-[#d3d2d2] font-normal'>
               Java backend development relies on Spring Framework for comprehensive support, Apache Tomcat for web serving, Hibernate for database interaction, Apache Kafka for real-time data processing, and tools like JUnit and Jenkins for testing and automation. These services empower efficient and scalable backend development in Java.
               </p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="500">
            <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
               <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
               <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                UI/UX Designer
               </h1>
               <p className='text-[15px] text-[#d3d2d2] font-normal'>
               UI/UX designer services provide tools like Adobe XD, Sketch, and Figma for design creation, InVision and Marvel for prototyping, and UserTesting for research. Design systems like Abstract maintain consistency, while tools like Principle handle animations. Collaboration platforms aid teamwork, and feedback tools like Usabilla help iterate designs for improved user experiences.
               </p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Services
