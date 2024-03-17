import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]'>
      <h1 className='heading'>
        MY
        <span className='text-yellow-400'>TEAM</span>
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto'>
        <div>
            <div className='w-[100%] relative h-[400px]'>
              <Image src="/images/blog01.jpg" alt='blog' layout='fill' className='object-cover'/>
            </div>
            <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
              <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
              Raju Das
              </div>
              <div className='flex flex-col md:flex-row item-center mt-[1rem] space-x-4'>
                 <div className='flex items-center space-x-3'>
                   <UserCircleIcon className='w-[2rem] mx-auto h-[2rem] text-[#55e6a5]'/>
                   <p className='text-white'>9807889294</p>
                 </div>
                 <div className='flex items-center space-x-3'>
                   <ChatBubbleLeftRightIcon className='w-[2rem] mx-auto h-[2rem] text-[#55e6a5]'/>
                   <p className='text-white'>Message(12)</p>
                 </div>
              </div>
              <p className='mt-[1rem] text-white text-[15px] font-semibold'>
                Next js Front-End Development
              </p>
            </div>
        </div>
        <div>
            <div className='w-[100%] relative h-[400px]'>
              <Image src="/images/blog2.jpg" alt='blog' layout='fill' className='object-cover'/>
            </div>
            <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
              <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
              Amit Sah
              </div>
              <div className='flex flex-col md:flex-row item-center mt-[1rem] space-x-4'>
                 <div className='flex items-center space-x-3'>
                   <UserCircleIcon className='w-[2rem] mx-auto h-[2rem] text-[#55e6a5]'/>
                   <p className='text-white'> 9819605660</p>
                 </div>
                 <div className='flex items-center space-x-3'>
                   <ChatBubbleLeftRightIcon className='w-[2rem] mx-auto h-[2rem] text-[#55e6a5]'/>
                   <p className='text-white'>Message(53)</p>
                 </div>
              </div>
              <p className='mt-[1rem] text-white text-[15px] font-semibold'>
                Mearn Full-Stack Development
              </p>
            </div>
        </div>
        <div>
            <div className='w-[100%] relative h-[400px]'>
              <Image src="/images/blog3.jpg" alt='blog' layout='fill' className='object-cover'/>
            </div>
            <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
              <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
              Bibek Basnet
              </div>
              <div className='flex flex-col md:flex-row item-center mt-[1rem] space-x-4'>
                 <div className='flex items-center space-x-3'>
                   <UserCircleIcon className='w-[2rem] mx-auto h-[2rem] text-[#55e6a5]'/>
                   <p className='text-white'>985133495 </p>
                 </div>
                 <div className='flex items-center space-x-3'>
                   <ChatBubbleLeftRightIcon className='w-[2rem] mx-auto h-[2rem] text-[#55e6a5]'/>
                   <p className='text-white'>Message(23)</p>
                 </div>
              </div>
              <p className='mt-[1rem] text-white text-[15px] font-semibold'>
                java Back-End Development
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
