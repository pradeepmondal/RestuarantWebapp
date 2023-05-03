import React, { useRef, useState, useEffect } from 'react';

export default function Story() {

   ;



    

    return (<div className="bgAnimationStory p-2 ">

        <div className="flex flex-col border-1 backdrop-filter backdrop-blur-2xl border-purple-700/50 bg-slate-300/10 border- p-8 m-4 rounded-2xl  space-y-4">
            <h1 className="flex flex-row max-w-fit mx-auto text-[3rem] sm:text-[4rem] font-semibold text-orange-300/40">Our Story</h1>

        <div className="sm:flex sm:flex-row sm:space-x-4 place-items-center">

                <div className="sm:basis-1/2 text-2xl text-orange-300/50 pt-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores earum, distinctio fugit reprehenderit esse nam doloribus quisquam ab vitae est voluptatibus. Numquam repudiandae porro quae mollitia at, quisquam accusamus.
                </div>

                <div style={{backgroundImage: `url(https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg)`, opacity: '80%'}} className="sm:basis-1/2 w-full bg-center bg-cover mt-10 h-[40vh] rounded-2xl sm:border-[3px] sm:border-yellow-700 shadow-md shadow-yellow-800">

                </div>

        </div>

        <div className="sm:flex sm:flex-row sm:space-x-4 place-items-center flex flex-col-reverse">

                <div style={{backgroundImage: `url(https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg)`, opacity: '80%'}} className="sm:basis-1/2 w-full bg-center bg-cover mt-10 h-[40vh] rounded-2xl sm:border-[3px] sm:border-yellow-700 shadow-md shadow-yellow-800 ">

                </div>

                <div className="sm:basis-1/2 text-2xl text-orange-300/50 pt-10  sm:order-2">

                    Lorem ipsum dolor s amet consectetu adipisicing elit. Optio asperiores earu, distinctio fugit reprehenderit esse nam doloribus quisquam ab vitae est voluptatibus. Numquam repudiandae porro quae mollitia at, quisquam accusamus.

                    Lorem ipsum dolor s amet consectetur adipisicing elit. Optio asperiores earu, distinctio fugit reprehenderit esse nam doloribus quisquam ab vitae est voluptatibus. Numquam repudiandae porro quae mollitia at, quisquam accusamus.

                </div>

        </div>

            



        </div>

        


    </div>
        
    )
}