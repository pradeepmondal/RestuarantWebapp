'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react' 
import axios from 'axios'
import AdmLogin from '@/admComps/AdmLogin'
import AdminDash from '@/admComps/AdminDash'
import dynamic from 'next/dynamic';

const AdminBuilder = dynamic(() => import("@/admComps/AdminBuilder"), {
  ssr: false,
}
);





const Admin =  () => {
  return (
    <AdminBuilder />
  )
}

export default Admin;
