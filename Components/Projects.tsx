import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[]8rem pb-[1rem]'>
      <h1 className='heading'>
         Pro<span className='text-yellow-400'>ject</span>
      </h1>
      <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
        <div data-aos="fade-up">
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
           <a href='https://aashish01.netlify.app/' target='_blank'> <Image src='/images/jewel.png' alt='portfolio' layout='fill' className='object-contain'/></a>
            </div>
            
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <a href='https://comfy-madeleine-96986b.netlify.app/' target='_blank'><Image src='/images/ecommeerce.png' alt='portfolio' layout='fill' className='object-contain'/></a>
            </div>
            
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <a href='https://inquisitive-froyo-0be500.netlify.app/' target='_blank'> <Image src='/images/istore.png' alt='portfolio' layout='fill' className='object-contain'/></a>
            </div>
           
        </div>
        <div data-aos="fade-up" data-aos-delay="900">
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <a href='https://amazing-truffle-9228ed.netlify.app/' target='_blank'><Image src='/images/travel.png' alt='portfolio' layout='fill' className='object-contain'/></a>
            </div>
           
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <a href='https://pds-three.vercel.app' target='_blank'> <Image src='/images/dashboard.png' alt='portfolio' layout='fill' className='object-contain'/></a>
            </div>
          
        </div>
        <div data-aos="fade-up" data-aos-delay="1600">
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <a href='https://amrit-kosh-dash-board-hofeqo9ja-aashish01aus-projects.vercel.app/' target='_blank'><Image src='/images/amritkosh.png' alt='portfolio' layout='fill' className='object-contain'/></a>
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default Projects;
