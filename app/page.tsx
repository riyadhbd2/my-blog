import FeaturedSection from '@/components/FeaturedSection'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen bg-background'>
      
      <main>
        <HeroSection/>
        <FeaturedSection/>
      </main>
    </div>
  )
}

export default Home