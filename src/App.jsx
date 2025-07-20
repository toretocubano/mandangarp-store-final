import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Store from '../components/Store'
import Normativa from '../components/Normativa'
import Testimonios from '../components/Testimonios'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-blue-600 text-white flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <h1 className="text-4xl font-bold text-center mb-6">Bienvenido a MandangaRP Store</h1>
        <p className="text-center mb-12">Aquí encontrarás coches, casas, peds, mafias y más.</p>
        <Store />
        <Normativa />
        <Testimonios />
      </main>
      <Footer />
    </div>
  )
}