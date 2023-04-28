import {FaGlobe, FaHome} from 'react-icons/fa'
import {GiForkKnifeSpoon, GiHamburgerMenu} from 'react-icons/gi'
import {VscBook} from 'react-icons/vsc'
import {BiMessage, BiArrowBack} from 'react-icons/bi'
import window from 'global'
import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from 'react'


function Nav(){

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    console.log(windowSize);
    const [navBtn, setNavBtn ] = useState((windowSize<=640)?true:false);

    const [navItmClass, setNavItmClass] = useState((windowSize<=640)?'hidden':'flex flex-row space-x-2');
    const slideMenu = useRef();
    const menuItems = useRef();

    function menuDis() {
        return new Promise ((resolve) => {setTimeout(() => {menuItems.current.classList.add("disappear"); resolve('hello')}, 100) });
    }

    
    









    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
            if((windowSize<=640)){
                
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

        <div className="w-full sm:w-screen  bg-slate-900/75 text-slate-200 text-lg  sm:text-lg sm:place-items-center sm:p-2 fixed z-20">
            
            <nav className='grid space-y-4 sm:space-y-0 sm:flex sm:flex-row sm:place-items-center  sm:space-x-16 px-4 sm:px-8 justify-start sm:justify-center sm:py-2'>
            {((windowSize<=640)&&(navBtn))?<button className='my-4' onClick={() => {
                
                slideMenu.current.classList.add("appear"); 
                menuItems.current.classList.remove("disappear");
                setNavBtn(!(navBtn))}} ><GiHamburgerMenu size="1.6rem"/></button>:null}
            
                <a href='#' className={navItmClass}><FaHome className='text-3xl'/><span>Home</span></a>
                <a href='#' className={navItmClass}><GiForkKnifeSpoon className='text-3xl'/><span>Menu</span></a>
                <a href='#' className={navItmClass}><FaGlobe className='text-3xl'/><span>Order Online</span></a>
                <a href='#' className={navItmClass}><VscBook className='text-3xl'/><span>Our Story</span></a>
                <a href='#' className={navItmClass}><BiMessage className='text-3xl'/><span>Contact Us</span></a>
            </nav>

            {(windowSize<=640)?<div ref={slideMenu} className='fixed w-0 h-[100vh] bg-slate-900/90 flex-col place-items-center justify-center tracking-[1px] py-40  text-2xl origin-left duration-500 '  >
                <div ref = {menuItems} className='space-y-12 disappear'>
                <a href='#' className='flex justify-center place-items-center space-x-2'><FaHome className='text-4xl '/><span>Home</span></a>
                <a href='#' className='flex justify-center place-items-center space-x-2'><GiForkKnifeSpoon className='text-3xl'/><span>Menu</span></a>
                <a href='#' className='flex justify-center place-items-center space-x-2'><FaGlobe className='text-3xl'/><span>Order Online</span></a>
                <a href='#' className='flex justify-center place-items-center space-x-2'><VscBook className='text-3xl'/><span>Our Story</span></a>
                <a href='#' className='flex justify-center place-items-center space-x-2'><BiMessage className='text-3xl'/><span>Contact Us</span></a>
                <a href='#' className='flex justify-center place-items-center space-x-2 py-8' onClick={async() => {
                
                
                menuDis();
                 slideMenu.current.classList.remove("appear");
                setNavBtn(!(navBtn))}}><BiArrowBack className='text-4xl'/></a>

                </div>
            
            </div>:null}

            

        </div>
        



    )
}

export default dynamic (() => Promise.resolve(Nav), {ssr: false})