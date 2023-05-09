import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Bg from './../bg-images/bg-1.jpg';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import React, { useRef, useState, useEffect } from 'react';
import {BsBalloonHeartFill} from 'react-icons/bs'
import ph1 from '../../public/ph1.jpg'
import ph2 from '../../public/ph2.jpg'
import ph3 from '../../public/ph3.jpg'
import ph4 from '../../public/ph4.jpg'


export default function Intro(){

    const introSec = useRef('')

    const [stControl, setStControl] = useState(true)

    const slides = [
        ph1, ph2, ph3
    ]




    const [slideIndex, setSlideIndex] = useState(0);
    

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
        <div ref = {introSec} className='w-[100%] h-[100vh] sm:h-[100vh] bgAnimationIntro'>
            
            <div className='max-w-[90%] sm:max-w-[90%] h-[75vh] sm:h-[75vh] w-full mx-auto pt-[14vh]  z-0 '>
                <div className='w-full h-full bg-center bg-cover rounded-3xl duration-500  origin-left'>
                    <Image src={slides[slideIndex]} className='h-full bg-center bg-cover border-8 border-[#92237c] rounded-3xl'/>
                </div>
                <h1 className='flex flex-row text-2xl sm:text-6xl text-slate-300 pt-[8vh] max-w-fit mx-auto '> We <BsBalloonHeartFill className='text-4xl sm:text-[5rem] text-red-500 mx-2 sm:mx-4  animate-pulse '/> Food !</h1>


            </div>

            {/* <Image src={Bg} style={{}}/> */}





        </div>

        
        
            


        




    )
    }


