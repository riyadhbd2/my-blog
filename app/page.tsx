import CategoriesSection from '@/components/CategoriesSection'
import FeaturedSection from '@/components/FeaturedSection'
import HeroSection from '@/components/HeroSection'
import QuotesSection from '@/components/QuotesSection'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen bg-background'>
      
      <main>
        <HeroSection/>
        <FeaturedSection/>
        <CategoriesSection/>
        <QuotesSection/>
      </main>
    </div>
  )
}

export default Home