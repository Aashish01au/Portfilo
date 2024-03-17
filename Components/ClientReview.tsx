import { StarIcon } from '@heroicons/react/16/solid';
import Image from 'next/image'
import React from 'react'


interface props{
    name: string;
    role: string;
    image: string;
}

const ClientReview = ({ name, role, image}:props) => {
  return (
    <div className='flex flex-col text-center justify-center'>
      <Image  src={image} alt='name' width={100} height={100} objectFit='contain' className='mx-auto mb-[2rem] object-cover rounded-full'/>
      <div className='flex items-center mx-auto'>
        <StarIcon className='w-[2rem] h-[2rem] text-yellow-400'/>
        <StarIcon className='w-[2rem] h-[2rem] text-yellow-400'/>
        <StarIcon className='w-[2rem] h-[2rem] text-yellow-400'/>
        <StarIcon className='w-[2rem] h-[2rem] text-yellow-400'/>
        <StarIcon className='w-[2rem] h-[2rem] text-yellow-400'/>
      </div>
      <h1 className='text-[25px] text-white mt-[1rem]'>{name}</h1>
      <p className='text-[25px] text-white mt-[1rem]'>
        {role}
      </p>
      <p className='text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto'>
      Front-end developers skilled in React craft dynamic user interfaces using components and state management. Back-end developers proficient in Java build robust server-side applications and APIs, leveraging frameworks like Spring Boot and Hibernate for efficient development and data management
      </p>
    </div>
  )
}

export default ClientReview
