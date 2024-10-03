'use client'
import Loading from '@/components/Loading';
import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'



const page = () => {

  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("homepage");
  const router = useRouter();
  const locale = Cookies.get('NEXT_LOCALE');
  const token =Cookies.get('token');


  useEffect(()=>{
   if(!token){
    router.push(`/${locale}/login`)
   }else{
    setIsLoading(false);
   }
  },[router])

  if(isLoading){
  return  <Loading/>
}
  return (
    <div className='h-screen flex items-center justify-center '>
      <h1 className='font-bold '>{t("title")}</h1> 
    </div>
  )
}

export default page

