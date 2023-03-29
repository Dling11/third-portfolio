import React from 'react'
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { TbBrandGmail } from "react-icons/tb";
import { BsFacebook } from "react-icons/bs";


const SocialMediaIcons = () => {
  return (
    <div 
      className='flex justify-center md:justify-start my-10 gap-7'
   >
      <a
         className='hover:opacity-50 transition duration-500 text-3xl'
         href="https://www.facebook.com/rowelljay.rodriguez/"
         target="_blank"
         rel="noreferrer"
      >
         <BsFacebook />
      </a>
      <a
         className='hover:opacity-50 transition duration-500 text-3xl'
         href="https://www.youtube.com/@rowelljayrodriguez9885/featured"
         target="_blank"
         rel="noreferrer"
      >
         <AiOutlineYoutube />
      </a>
      <a
         className='hover:opacity-50 transition duration-500 text-3xl'
         href="https://twitter.com/King20648928"
         target="_blank"
         rel="noreferrer"
      >
         <AiOutlineTwitter />
      </a>
      <a
         className='hover:opacity-50 transition duration-500 text-3xl'
         href="https://github.com/Dling11"
         target="_blank"
         rel="noreferrer"
      >
         <AiOutlineGithub />
      </a>
      <a
         className='hover:opacity-50 transition duration-500 text-3xl'
         href="mailto: rodriguez.rowelljay@gmail.com"
         target="_blank"
         rel="noreferrer"
      >
         <TbBrandGmail />
      </a>
    </div>
  )
}

export default SocialMediaIcons