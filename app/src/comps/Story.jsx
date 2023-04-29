import React from "react"
import Image from "next/image"

export default function Story() {

    return (<div className="bg-gradient-to-b from-violet-900 from-5% via-slate-950 via-30% to-stone-950 to-90% p-2 ">

        <div className="flex flex-col border-1 border-purple-700/50 bg-purple-800 border- p-8 m-4 rounded-2xl shadow-xl shadow-purple-800 space-y-4">
            <h1 className="flex flex-row max-w-fit mx-auto text-[3rem] sm:text-[4rem] font-semibold text-purple-300/80">Our Story</h1>

        <div className="sm:flex sm:flex-row sm:space-x-4 place-items-center">

                <div className="sm:basis-1/2 text-2xl text-purple-300/80 pt-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores earum, distinctio fugit reprehenderit esse nam doloribus quisquam ab vitae est voluptatibus. Numquam repudiandae porro quae mollitia at, quisquam accusamus.
                </div>

                <div style={{backgroundImage: `url(https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg)`, opacity: '80%'}} className="sm:basis-1/2 w-full bg-center bg-cover mt-10 h-[40vh] rounded-2xl sm:border-[3px] sm:border-yellow-700 shadow-md shadow-yellow-800">

                </div>

        </div>

        <div className="sm:flex sm:flex-row sm:space-x-4 place-items-center flex flex-col-reverse">

                <div style={{backgroundImage: `url(https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg)`, opacity: '80%'}} className="sm:basis-1/2 w-full bg-center bg-cover mt-10 h-[40vh] rounded-2xl sm:border-[3px] sm:border-yellow-700 shadow-md shadow-yellow-800 ">

                </div>

                <div className="sm:basis-1/2 text-2xl text-purple-300/80 pt-10  sm:order-2">
                    Lorem ipsum dolor s ame consectetur adipisicing elit. Optio asperiores earu, distinctio fugit reprehenderit esse nam doloribus quisquam ab vitae est voluptatibus. Numquam repudiandae porro quae mollitia at, quisquam accusamus.
                </div>

        </div>

            



        </div>

        


    </div>
        
    )
}