import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react' 
import axios from 'axios'




export default function Admin() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')




  

  return  (
  
  <div className='bg-pink-100 h-[100vh]'>

    <h1 className=' max-w-fit max-h-fit p-[10rem] pl-[37rem] pb-[4rem] text-[2rem]'>Hello admin, login here</h1>

    <div className='flex flex-row px-[20rem] pl-[30rem]'>

        <div className='basis-1/2 text-[1.5rem] text-pink-500 space-y-4'>
            <label>
            Username
            </label> <br />

            <label>
            Password
            </label>
        </div>

        <div className='basis-1/2 text-[1.5rem] text-pink-300 space-y-2'>
            <input onChange = {(e) => {setUsername(e.target.value)}} placeholder='username' className='bg-white/70 placeholder-pink-300 px-5' /> <br />

            <input onChange = {(e) => {setPassword(e.target.value)}} type='password' placeholder='password' className='bg-white/70 placeholder-pink-300 px-5'>
            </input>
        </div>


    </div>
    

    <button 
    className='mx-[43rem] mt-[3rem] bg-pink-300 max-w-fit p-2 rounded-[0.5rem]'
    onClick={async(e) => {
      console.log('button clicked');
      try{
  
        await axios.post("http://localhost:3001/api/admin/login", {username : username, password : password})
        .then((res) => {
          if(res.data.message === 'success'){
            alert('Logged In Successfully')
          }
  
        })
      }
      catch(e){
  
        console.log(e);
  
      }
      
    }}
    >
        
        Log In
    
    </button>
    
    
    
      
      

  </div>
  
  )

  
  
  


  
}
