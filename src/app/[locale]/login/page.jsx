import React from 'react'
import '@/app/[locale]/login/style.css'
import { useTranslations } from 'next-intl'
const page = () => {

  const t = useTranslations("login");
  return <>
  <div className='h-screen flex justify-center items-center gap-4'>
       <form className='form flex flex-col sm:w-3/4 '>
       <h1 className='font-bold text-lg text-center mb-5'>{t("title")}</h1>
        <input className='input' type='email' placeholder={t("mail_placeholder")}/>
        <input className='input' type='password' placeholder={t("pass_placeholder")}/>
        <button className='loginbutton'>{t("login_button")}</button>
        </form>
  </div>
  </>
}

export default page
