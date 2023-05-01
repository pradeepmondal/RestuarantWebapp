import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/comps/Nav'
import Intro from '@/comps/Intro'
import Story from '@/comps/Story'
import StartAnimation from '@/comps/StartAnimation'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <StartAnimation />
      <Nav />
      <Intro />
      <Story />
      
    </div>
  )
}
