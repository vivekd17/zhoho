import Navbar from '@/components/Navbar'
import Sidebar  from '@/components/Sidebar'
import React, { ReactNode } from 'react'


const HomeLayout = ({children } : {
    children:ReactNode
}) => {
  return (
    <main className='relative'>
        <Navbar/>
        <div className="flex">
            <Sidebar/>
            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-mb: pb-14 sm:-px-14"></section>
        </div>
        <div className="w-full">
            {children}
        </div>
      Footer 
    </main>
  )
}

export default HomeLayout
