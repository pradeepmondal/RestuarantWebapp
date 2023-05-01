import React from 'react';
import { useRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

export default function StartAnimation() {

    const animCover = useRef('');
    const typeDiv = useRef('');
    

    console.log(animCover.current);

    function disAnim() {
        
        setTimeout(() => {

        animCover.current.classList.remove('appearH');
        typeDiv.current.classList.add('disappear');
        

        



    }, 11000);

    }

    useEffect(() => {
        disAnim();
      }, []);
      



     return (

        <div ref = {animCover} className='appearH  w -full h-[0px] text-[3rem] sm:text-[5rem] bg-gray-950 flex flex-row text-slate-200 place-items-center justify-center tracking-[1px]  origin-top duration-1000 z-30'> 


        <div ref = {typeDiv} className=''>

        <Typewriter className=' mx-auto'
                onInit={(typewriter) => {
                typewriter.typeString('Welcome to Foody')
                .callFunction(() => {
                    console.log('String typed out!');
                })
                .pauseFor(1000)
                .deleteAll()
                typewriter.typeString("Let's dive in ")
                .pauseFor(400)
                typewriter.typeString(". ")
                .pauseFor(400)
                typewriter.typeString(". ")
                .pauseFor(400)
                typewriter.typeString(".")
                
                .callFunction(() => {
                    console.log('All strings were deleted');
                })
                .start();
                }}
            />

       



        </div>
            

            

            
        </div>
    )
}

