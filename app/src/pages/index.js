import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/comps/Nav'
import Intro from '@/comps/Intro'
import Story from '@/comps/Story'
import StartAnimation from '@/comps/StartAnimation'
import Contact from '@/comps/Contact'

import { useState, useEffect } from 'react'


export default function Home() {

  const [showOth, setShowOth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowOth(true);
    }, 11000);
    
  }, []);

  

  return  (
  
  <div>
    <StartAnimation />
    {showOth && <Nav />}
    {showOth && <Intro />}
    {showOth && <Story />}
    {showOth && <Contact />}
    
      
      

  </div>
  
  )

  
  
  


  
}
