

export default function Contact() {


    return (

        <div className="bgAnimationContact p-2">
            <div className="flex flex-col border-1 backdrop-filter backdrop-blur-2xl border-blue-700/50 bg-slate-300/10 border- py-8 px-2 m-4 pb-16 rounded-2xl  space-y-4">
                <h1 className="sm:flex sm:flex-row max-w-fit mx-auto text-[2rem] sm:text-[2.6rem] backdrop-filter backdrop-opacity-20 text-yellow-200/60 border-[1px] border-blue-900/70 px-2 py-1 rounded-2xl shadow-lg shadow-pink-400/50"><span className='animate-pulse' >Connect with Us</span></h1>
                <div className="sm:flex sm:flex-row text-[1.2rem] sm:text-[1.4rem] pt-16 space-y-8 sm:space-y-0 px-[3rem]">
                    <div className="sm:basis-1/2 mx-2 text-slate-300/70  sm:pl-[3rem] place-self-center " >
                        Call Us at - +919897xxxx01 <br />
                        W/A Us at - +917007xxxx01 <br/>
                        Mail Us at - info@yourcompany.in
                    </div>
                    <div className="sm:basis-1/2 mx-2 text-slate-300/70 sm:pl-[15rem] place-self-center " >
                    107, New Horizon Mall <br />
                        Ranchi - 834xxx, Jharkhand
                    </div>

                </div>
            </div>

        </div>
    )




}