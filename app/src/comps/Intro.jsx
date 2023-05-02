import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Bg from './../bg-images/bg-1.jpg';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';
import React, { useRef, useState, useEffect } from 'react';
import {BsBalloonHeartFill} from 'react-icons/bs'


export default function Intro(){

    const introSec = useRef('')

    const [stControl, setStControl] = useState(true)

    const slides = [
        {url: 'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg'},
        {url: 'https://images.pexels.com/photos/4078054/pexels-photo-4078054.jpeg'},
        {url: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg'}
    ]

    const [deg, changeDeg] = useState(25);

    function bgChange() {
        setTimeout(() => {

            
                
            

            
            
            introSec.current.style.background = `linear-gradient(${deg}deg, rgba(0,0,0,1) 15%, rgba(100,0,80,1) 50%, rgba(0,0,0,1) 85%)`;



            if(stControl && deg==249){
                setStControl(false)
            }
            else if(stControl===false && deg===25.25){
                setStControl(true)
            }
            else if(stControl){
            changeDeg(deg+0.25);
            }
            else{
                changeDeg(deg-0.25)
            }

        }, 10)


    }


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

    useEffect(() => {
        
        bgChange();
        

      },);


   

    

    

     

    

    return (
        <div ref = {introSec} className='w-[100%] h-[100vh] sm:h-[100vh] bg-gradient-to-t from-violet-900 from-0% via-slate-950 via-15% to-yellow-700 to-[92%]'>
            
            <div className='max-w-[90%] sm:max-w-[90%] h-[75vh] sm:h-[75vh] w-full mx-auto pt-[14vh]  z-0 '>
                <div style={{backgroundImage: `url(${slides[slideIndex].url})`}} className='w-full h-full bg-center bg-cover rounded-3xl duration-500 border-4 border-[rgba(100,0,80,1)] shadow-md shadow-yellow-700 origin-left'>
                </div>
                <h1 className='flex flex-row text-2xl sm:text-6xl text-slate-300 pt-[8vh] max-w-fit mx-auto '> We <BsBalloonHeartFill className='text-4xl sm:text-[5rem] text-red-500 mx-2 sm:mx-4  animate-pulse '/> Food !</h1>


            </div>

            {/* <Image src={Bg} style={{}}/> */}





        </div>

        
        
            


        




    )
    }


