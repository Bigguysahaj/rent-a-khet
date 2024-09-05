import React from 'react'
import { Hero } from '@/components/hero-section'
import { Listing, ListingsGrid } from '@/components/listing-card'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { CallToAction } from '@/components/cta-board'
import Footer from '@/components/footer'

const listings: Listing[] = [
  {
    id: 1,
    image: '/khet/punjab.jpg',
    label: 'Roshan Ji Ka Khet',
    size: '4 hectares',
    location: 'Punjab, India',
    price: '₹25,000/month',
    crops: ['Wheat', 'Rice'],
  },
  {
    id: 2,
    image: '/khet/gujrat.jpg',
    label: 'Patel Sahab Ki Zameen',
    size: '6 hectares',
    location: 'Gujarat, India',
    price: '₹30,000/month',
    crops: ['Cotton', 'Peanuts'],
  },
  {
    id: 3,
    image: '/khet/maharastra.jpg',
    label: 'Deshmukh Ka Bada',
    size: '3 hectares',
    location: 'Maharashtra, India',
    price: '₹18,000/month',
    crops: ['Sugarcane', 'Strawberries'],
  },
  {
    id: 4,
    image: '/khet/madhya-pradesh.jpg',
    label: 'Yadav Ji Ka Maidan',
    size: '8 hectares',
    location: 'Madhya Pradesh, India',
    price: '₹45,000/month',
    crops: ['Soybeans', 'Wheat'],
  },
  {
    id: 5,
    image: '/khet/uttar-pradesh.jpg',
    label: 'Chaudhary Ka Khet',
    size: '5 hectares',
    location: 'Uttar Pradesh, India',
    price: '₹28,000/month',
    crops: ['Sugarcane', 'Wheat'],
  },
  {
    id: 6,
    image: '/khet/kerela.jpg',
    label: 'Menon Ka Paddam',
    size: '7 hectares',
    location: 'Kerala, India',
    price: '₹40,000/month',
    crops: ['Coffee', 'Coconut'],
  },
]

function FarmlandRental() {
  return (
    <main className='min-h-screen bg-background'>
      <Navbar title='Rent-a-Khet' />
      <section className='w-full'>
        <div className='container px-4 md:px-6 mx-auto'>
          <Hero />
          <div className='w-full flex justify-center'>
            <div className='max-w-7xl w-full'>
              <ListingsGrid listings={listings} />
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <CallToAction />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default FarmlandRental
