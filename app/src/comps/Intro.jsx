import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Bg from './../bg-images/bg-1.jpg';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import React, { useRef, useState } from 'react';
import {BsBalloonHeartFill} from 'react-icons/bs'

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

export default function Intro(){

    const contentBlock = 'sm:h-[100vh] sm:w-screen'

    const slides = [
        {url: 'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg'},
        {url: 'https://images.pexels.com/photos/4078054/pexels-photo-4078054.jpeg'},
        {url: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg'}
    ]

    const [slideIndex, setSlideIndex] = useState(0)

    async function slideChange(){
        
         await new Promise( (resolve) => {setTimeout(() => {
            if(slideIndex !== (slides.length - 1)){
                setSlideIndex(slideIndex + 1);
                
                 
            }
            else{
                 setSlideIndex(0);
                 
                 
                 
            }}, 3000)

            resolve('success');
        
        }



         );

         
        

        
        
    }

    slideChange();


   

    

    

     

    

    return (
        <div className='w-[100%] h-[70vh] sm:h-[95vh] bg-slate-950'>
            
            <div className='max-w-[90%] sm:max-w-[80%] h-[45vh] sm:h-[65vh] w-full mx-auto pt-[14vh]  z-0 '>
                <div style={{backgroundImage: `url(${slides[slideIndex].url})`}} className='w-full h-full bg-center bg-cover rounded-3xl duration-500 border-4 border-sky-900/90 shadow-md shadow-sky-700'>
                </div>
                <h1 className='flex flex-row text-2xl sm:text-6xl text-slate-300 pt-[8vh] max-w-fit mx-auto '>We <BsBalloonHeartFill className='text-4xl sm:text-[5rem] text-red-500 mx-2 sm:mx-4  animate-pulse '/> Food!</h1>


            </div>

            {/* <Image src={Bg} style={{}}/> */}





        </div>

        
        
            


        




    )
    }


