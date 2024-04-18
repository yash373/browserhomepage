import React from 'react'
import Search from '@/components/Search'
import Head from 'next/head'


const Index = () => {
  return (
    <div className='flex bg-[url(https://th.bing.com/th/id/OIP.IioDMr1pMw6axBCUlaQgygHaEK?rs=1&pid=ImgDetMain)] h-screen'>
      <Head>
        <title>Rocket Ship 🚀</title>
      </Head>
      <Search />
    </div>
  )
}

export default Index
