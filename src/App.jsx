import React from 'react'
import Hero from '../components/Hero'
import Store from '../components/Store'
import Normativa from '../components/Normativa'
import Footer from '../components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-gray-900 text-white flex flex-col">
      <Hero />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <Store />
        <Normativa />
      </main>
      <Footer />
    </div>
  )
}
