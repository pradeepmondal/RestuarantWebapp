import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/comps/Nav'
import Intro from '@/comps/Intro'
import Story from '@/comps/Story'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Nav />
      <Intro />
      <Story />
      
    </div>
  )
}
