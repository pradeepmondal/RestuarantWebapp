export default function AdmLogin({data, tkn, handleLogout}){

    if((typeof window !== 'undefined') && (data === null)){

        localStorage.setItem('authTkn', tkn)
        data = {
            username : 'username'
        }

    }

    else if((typeof window !== 'undefined')){

        localStorage.setItem('authTkn', data.token)
        

    }
    


    return (
        <div className=" w-screen h-[100vh] bg-orange-100 " >
            <h1 className="flex justify-center text-orange-500 text-2xl pt-[2rem]">
            Hello  <span className="text-orange-600 px-2"> {data.username}</span>, welcome to your dashboard !!
            </h1>

            <button className="" onClick={()=> {
                handleLogout();

            }}>Log Out</button>
        </div>
    )


}