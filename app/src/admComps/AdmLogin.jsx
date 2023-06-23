import { useState } from 'react' 
import axios from 'axios'




export default function AdmLogin({fetchLog}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
  
  
  
    
  
    return  (
    
    <div className='fixed bg-pink-200 w-screen h-[100vh]'>
  
      <div className='flex flex-col m-[12rem] sm:m-[12rem] mx-[1rem] sm:mx-[20rem] p-[1rem] sm:p-[4rem] border-4 border-pink-400 bg-pink-300 rounded-[1rem]'>
  
      <h1 className='flex flex-row justify-center   text-[2rem] text-pink-700'>Hello admin, login here</h1><br />
  
  <div className='flex flex-row space-x-[0.1rem] sm:space-x-4'>
  
      <div className='basis-1/2 text-[1.5rem] text-pink-600 space-y-4'>
          <label>
          Username
          </label> <br />
  
          <label>
          Password
          </label>
      </div>
  
      <div className='basis-1/2 text-[1.5rem] text-pink-500 space-y-2'>
          <input onChange = {(e) => {setUsername(e.target.value)}} placeholder='username' className='bg-pink-100 placeholder-pink-300 px-5' /> <br />
  
          <input onChange = {(e) => {setPassword(e.target.value)}} type='password' placeholder='password' className='bg-pink-100 placeholder-pink-300 px-5'>
          </input>
      </div>
  
  
  </div>
  
  
  <button 
  className='mx-auto mt-[3rem] bg-pink-500 max-w-fit p-2 rounded-[0.5rem]'
  onClick={async(e) => {
    console.log('button clicked');
    try{
  
      await axios.post("http://localhost:3001/api/admin/login", {username : username, password : password})
      .then((res) => {
        if(res.data.message === 'success'){
            console.log(res.data);
            fetchLog(res.data)
        //   alert('Logged In Successfully')

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
  
      
      
      
      
        
        
  
    </div>
    
    )
  
    
    
    
  
  
    
  }