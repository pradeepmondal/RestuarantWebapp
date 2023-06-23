'use client';

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react' 
import axios from 'axios'
import AdmLogin from '@/admComps/AdmLogin'
import AdminDash from '@/admComps/AdminDash'
import dynamic from 'next/dynamic';




const AdminBuilder =  ( () => {

  const [dataFromLogin, setDataFromLogin] = useState('');

  const [tkn, setTkn] =  useState(((typeof window !== 'undefined') ? localStorage.getItem('authTkn') : null))

  const handleDataFromLogin = (data) => {
    setDataFromLogin(data);
  }

  const handleLogout = () => {
    if(typeof window !== 'undefined'){
        localStorage.removeItem('authTkn')
        setDataFromLogin('')
        setTkn(null)
    }
  }

  

  

  console.log(tkn);

  return  (

    <div>
      {tkn !== null ? (
        <AdminDash tkn = {tkn} data = {null} handleLogout = {handleLogout}/>
      
    ) : (dataFromLogin.message !== 'success' )? (
      
      <AdmLogin fetchLog={handleDataFromLogin} />):
      <AdminDash data={dataFromLogin} tkn = {null} handleLogout = {handleLogout}/> 
      
    }


    {/* <AdmLogin fetchLog={handleDataFromLogin} /> */}


    </div>

    

    



  )
  



  
})

export default AdminBuilder;
