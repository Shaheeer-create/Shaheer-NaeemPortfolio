import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";

import { BiLogoTypescript } from "react-icons/bi";


const Skill = () => {
  return (
    <div id='skills'>
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">
        Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
    {/* Skilss */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0 ">
            <FaHtml5 className='text-2xl font-bold' />

            </div>
            <h2 className="text-white text-lg title-font font-medium">
              Html
            </h2>
          </div>
          <div className="flex-grow">
                  <div className="relative h-1 w-full bg-black rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">100%</p>
          </div>
        </div>
      </div>
    
    {/* Skills 2 */}
    <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-800 text-white flex-shrink-0 ">
            <DiCss3 className='text-2xl font-bold'/>

            </div>
            <h2 className="text-white text-lg title-font font-medium">
              Css
            </h2>
          </div>
          <div className="flex-grow">
                  <div className="relative h-1 w-full bg-black rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[95%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">95%</p>
          </div>
        </div>
      </div>
      {/* Skills 3 */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-700 text-white flex-shrink-0 ">
            
            <BiLogoTypescript className='text-2xl font-bold' />


            </div>
            <h2 className="text-white text-lg title-font font-medium">
              Javascript/TypeScript
            </h2>
          </div>
          <div className="flex-grow">
                  <div className="relative h-1 w-full bg-black rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">90%</p>
          </div>
        </div>
      </div>
      {/* Skills 4 */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0 ">
           
            <RiNextjsFill  className='text-2xl font-bold' />

            </div>
            <h2 className="text-white text-lg title-font font-medium">
              Next JS
            </h2>
          </div>
          <div className="flex-grow">
                  <div className="relative h-1 w-full bg-black rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[50%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">50%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Skill