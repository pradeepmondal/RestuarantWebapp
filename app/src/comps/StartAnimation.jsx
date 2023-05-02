import React from 'react';
import { useRef, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
// import setShowNav from './../pages/index'

export default function StartAnimation() {

    const animCover = useRef('');
    const typeDiv = useRef('');

    const [deg, changeDeg] = useState(25);

    
    

    

    const animText1 = ['Welcome to Foody', 'फूडी में आपका स्वागत है', "ফুডি তে স্বাগতম"]
    const animText2 = ["Let's dive in ", 'चलिए शुरू करते हैं ', "চল শুরু করি "]

    const animTextIndex = Math.floor(Math.random() * animText1.length);

    function bgChange() {
        setTimeout(() => {

            
                
            

            
            
            animCover.current.style.background = `linear-gradient(${deg}deg, rgba(0,0,0,1) 15%, rgba(175,29,253,1) 50%, rgba(0,0,0,1) 85%)`;
            // console.log(animCover.current.style.background, deg);
            if(deg<=250){
            changeDeg(deg+0.25);
            }

        }, 10)


    }
        
        
    

    function disAnim() {
        
        setTimeout(() => {

        animCover.current.classList.remove('appearH');
        typeDiv.current.classList.add('disappear');
        

        



    }, 11000);

    }

    useEffect(() => {
        disAnim();
        bgChange();
        

      },[deg]);

   
      



     return (

        <div ref = {animCover} className=' appearH w -full h-[0px] text-[3rem] sm:text-[5rem] bgInGr  flex flex-row text-slate-200 place-items-center justify-center tracking-[1px]  origin-top duration-1000 z-30'> 


        <div ref = {typeDiv} className=''>

        <Typewriter className=' mx-auto'
                onInit={(typewriter) => {
                typewriter.typeString(animText1[animTextIndex])
                .callFunction(() => {
                    console.log('String typed out!');
                })
                .pauseFor(1000)
                .deleteAll()
                typewriter.typeString(animText2[animTextIndex])
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

