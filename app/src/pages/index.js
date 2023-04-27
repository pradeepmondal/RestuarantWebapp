import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/comps/Nav'
import Intro from '@/comps/Intro'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Nav />
      <Intro />
    </div>
  )
}
