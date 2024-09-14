import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/16/solid';

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle/>
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        <div>
        <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
        HI, I&apos;M <span className='text-yellow-400'>AASHISH SAH!</span>
        </h1> 
        <TextEffect/>
        <p className='mt-[2rem] text-[20px] text-[#ffffff92]'>
        Being a frontend developer with sound knowledge of HTML, CSS , react and JavaScript among others, I am keen to carry out the development of user-friendly and indeed visually attractive interfaces. Systematic, user-centric approach is vital. Through conversion of design ideas to actual things, I keep myself updated with new technologies on the web.

        </p>
        <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row item-center sm:space-x-6 '>
          <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
            
            <a href="https://olive-kelcey-53.tiiny.site/" target="_blank" rel="noopener noreferrer">Download Cv</a> 
            <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
          </button>
          <button className='flex items-center space-x-2'>
            <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]'/>
            <p className='text-[20px] font-semibold text-white'>
              MY SERVICES</p>
          </button>
        </div>
        </div>
        <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px] p-[10rem]'>
          <Image src='/images/art.jpg' alt='user' layout='fill' className=' object-cover rounded-full '  />
        </div>
      </div> 
    </div>
  );
};

export default Hero;

