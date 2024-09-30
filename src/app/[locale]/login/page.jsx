"use client"
import React, { useState } from 'react'
import '@/app/[locale]/login/style.css'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'


const page = () => {

  const t = useTranslations("login");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
 
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch('https://backend.profferdeals.com/api/admin/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      const data = await response.json();
      const token =data.token;
      if (response.ok) {
       Cookies.set('token', token, { path: '/', expires: 7 })  
       router.push('/')
      } else {
        alert('Login Failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error during login');
    }
  };
  


  return <>
  <div className='h-screen flex justify-center items-center gap-4'>
       <form className='form flex flex-col sm:w-3/4' onSubmit={handleSubmit}>
       <h1 className='font-bold text-lg text-center mb-5'>{t("title")}</h1>
        <input className='input' type='email' placeholder={t("mail_placeholder")} onChange={(e)=>setEmail(e.target.value)}/>
        <input className='input' type='password' placeholder={t("pass_placeholder")}  onChange={(e) => setPassword(e.target.value)} />
        <button className='loginbutton'>{t("login_button")}</button>
        </form>
  </div>
  </>
}
export default page
