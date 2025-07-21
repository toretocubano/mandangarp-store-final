import React from 'react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-500 to-gray-900 text-white py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a MandangaRP Store</h1>
      <p className="text-lg mb-6">
        Tu tienda oficial para apoyar al servidor y desbloquear contenido exclusivo.
      </p>
      <a href="https://discord.gg/mandangarp" target="_blank" rel="noopener noreferrer">
        <button className="bg-white text-orange-600 font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition">
          Únete a nuestro Discord
        </button>
      </a>
    </section>
  )
}
