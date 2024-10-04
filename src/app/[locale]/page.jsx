'use client'
import Loading from '@/components/Loading';
import {  useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { usePosts } from '../context/fetchpostscontext';
import { useTranslations } from 'next-intl';
import Cookies from 'js-cookie';



const page =  () => {

  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("home")
  const router = useRouter();
  const locale = Cookies.get('NEXT_LOCALE')
  const token = Cookies.get('token')
  const {posts} = usePosts();

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
   
    <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">{t('posts')}</h1>
    {posts.length > 0 ? (
      <div className="space-y-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg shadow-md p-6 bg-white hover:bg-gray-50 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-500">No posts available</p>
    )}
  </div>
  
   
  )
}

export default page

