import {FaGlobe, FaHome} from 'react-icons/fa'
import {GiForkKnifeSpoon, GiHamburgerMenu} from 'react-icons/gi'
import {VscBook} from 'react-icons/vsc'
import {BiMessage} from 'react-icons/bi'
import window from 'global'
import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from 'react'


function Nav(){

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    // console.log(windowSize);
    const [navBtn, setNavBtn ] = useState((windowSize<=668)?true:false);

    const [navItmClass, setNavItmClass] = useState((windowSize<=668)?'hidden':'flex flex-row space-x-2');
    









    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
            if((windowSize<=668)){
                
                setNavItmClass('hidden')
                setNavBtn(true)
                
            }
            else{
                
                setNavItmClass('flex flex-row space-x-2')
            }
        };
        window.addEventListener('resize', handleWindowResize);
        
    },

    );

    




    return (

        <div className="w-full sm:w-screen h-64 sm:h-[5rem] bg-slate-900 text-slate-200 text-lg  sm:text-lg ">
            
            <nav className='grid space-y-4 sm:space-y-0 sm:flex sm:flex-row sm:place-items-center  sm:space-x-16 px-4 sm:px-8 justify-start sm:justify-center sm:py-2'>
            {((windowSize<=668)&&(navBtn))?<button className='' onClick={() => {setNavItmClass('flex flex-row space-x-2'); setNavBtn(!(navBtn))}} ><GiHamburgerMenu /></button>:null}
                <a href='#' className={navItmClass}><FaHome className='text-3xl'/><span>Home</span></a>
                <a href='#' className={navItmClass}><GiForkKnifeSpoon className='text-3xl'/><span>Menu</span></a>
                <a href='#' className={navItmClass}><FaGlobe className='text-3xl'/><span>Order Online</span></a>
                <a href='#' className={navItmClass}><VscBook className='text-3xl'/><span>Our Story</span></a>
                <a href='#' className={navItmClass}><BiMessage className='text-3xl'/><span>Contact Us</span></a>
            </nav>

            

        </div>



    )
}

export default dynamic (() => Promise.resolve(Nav), {ssr: false})