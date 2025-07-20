import React from 'react'

const productos = [
  { id: 1, nombre: 'Coche Elegante', precio: '€500', descripcion: 'Vehículo rápido y estilizado' },
  { id: 2, nombre: 'Casa Moderna', precio: '€1200', descripcion: 'Vivienda con todas las comodidades' },
  { id: 3, nombre: 'Ped Especial', precio: '€300', descripcion: 'Personaje con estilo único' },
  { id: 4, nombre: 'Mafia Élite', precio: '€1000', descripcion: 'Únete a la mafia más poderosa' },
  { id: 5, nombre: 'Banda Urbana', precio: '€800', descripcion: 'Controla las calles con tu banda' },
  { id: 6, nombre: 'Cartel de Droga', precio: '€1500', descripcion: 'Dominio total del narcotráfico' },
  { id: 7, nombre: 'Pack Inicial', precio: '€200', descripcion: 'Todo lo básico para comenzar' },
  { id: 8, nombre: 'Colores Personalizados', precio: '€50', descripcion: 'Personaliza tu vehículo y ropa' },
]

export default function Store() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">Tienda MandangaRP</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {productos.map(({ id, nombre, precio, descripcion }) => (
          <div
            key={id}
            className="border border-primary rounded-lg p-4 hover:shadow-lg transition-shadow bg-fondo"
          >
            <h3 className="text-xl font-semibold mb-2">{nombre}</h3>
            <p className="mb-2">{descripcion}</p>
            <p className="font-bold text-primary">{precio}</p>
            <button
              disabled
              className="mt-3 w-full bg-primary text-white py-2 rounded opacity-70 cursor-not-allowed"
              title="Donación para mejoras en el servidor"
            >
              Donar
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
