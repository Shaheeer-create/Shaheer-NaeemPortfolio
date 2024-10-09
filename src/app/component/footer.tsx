import Link from 'next/link';
import React from 'react'
import { FaYoutube } from "react-icons/fa";
import logo from "../../../public/assests/image/logo.jpg";
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (

        <footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
    <Image src={logo} alt='Logo' height={100} width={100} className="rounded-sm" />
      <span className="ml-3 text-xl">Shaheer Naeem</span>
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
      © 2020 Shaheer Naeem —
    
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank' href={"https://www.youtube.com/@MusicBySherry?sub_confirmation=1"} className="text-gray-400 text-3xl hover:text-[#FF0000]">
      <FaYoutube />

      </Link >
     
      <Link href={"https://www.instagram.com/_.irtiza_naeem._/"} className="ml-3 text-gray-400 text-3xl hover:text-[#F56040] "  target="_blank">
       <FaInstagram />

      </Link>
    
    </span>
  </div>
</footer>
    
  )
}

export default Footer