'use client'

import Image from 'next/image'
import Header from '../app/components/Header'
import Body from '../app/components/Body'
import Footer from '../app/components/Footer'

export default function Home() {
  return (

    <main className='flex flex-col h-full '>
      <Header/>
      <Body/>
      <Footer/>
    </main>

  )
}
