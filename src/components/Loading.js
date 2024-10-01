"use client"
import React from 'react'
import { Ring } from 'react-css-spinners';

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
       <Ring
    color="#d36ac2"
    size={111}
    thickness={7}
  />
    </div>
  )
}

export default Loading
