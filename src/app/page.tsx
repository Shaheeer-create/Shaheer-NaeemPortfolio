import React from 'react'
import Hero from './component/hero'
import Contact from './component/contact'
import Project from './component/project'
import About from './component/about'
import Skill from './component/skill'
import { FaViacoin } from 'react-icons/fa'
import { Head } from 'next/document'

const page = () => {
  return (
    <div>
       
        <Hero />
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
       
    </div>
  )
}

export default page