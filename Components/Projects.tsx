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
           <a href='https://aashish01.netlify.app/' target='_blank'> <Image src='/images/p1.png' alt='portfolio' layout='fill' className='object-contain'/></a>
            </div>
            <p className='text-white text-center '> Socheko (E-Commerce Website)</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <a href='https://aashish01.netlify.app/' target='_blank'><Image src='/images/p2.png' alt='portfolio' layout='fill' className='object-contain'/></a>
            </div>
            <p className='text-white text-center'> Jewel (E-Commerce Website)</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <a href='https://aashish01.netlify.app/' target='_blank'> <Image src='/images/p7.png' alt='portfolio' layout='fill' className='object-contain'/></a>
            </div>
            <p className='text-white text-center '> Presonal Portfilo (React) </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="900">
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <a href='https://aashish01.netlify.app/' target='_blank'><Image src='/images/p5.png' alt='portfolio' layout='fill' className='object-contain'/></a>
            </div>
            <p className='text-white text-center'> E-Hospital ( Java Back-End project) </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <a href='https://aashish01.netlify.app/' target='_blank'> <Image src='/images/p6.png' alt='portfolio' layout='fill' className='object-contain'/></a>
            </div>
            <p className='text-white text-center '> E-Business Management System ( Java project-2)</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="1600">
            <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
            <a href='https://aashish01.netlify.app/' target='_blank'><Image src='/images/p2.png' alt='portfolio' layout='fill' className='object-contain'/></a>
            </div>
            <p className='text-white text-center'> Jewel (E-Commerce Website)</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
