import { useTranslations } from 'next-intl';
import React from 'react'

const page = () => {
  const t = useTranslations("homepage");
  return (
    <div>
     <h1>{t("title")}</h1>
    </div>
  )
}

export default page
