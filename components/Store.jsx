import React, { useEffect } from 'react'

const items = [
  {
    nombre: 'Mafias',
    descripcion: 'Accede a mafias exclusivas dentro del servidor',
    precio: '60.00',
    imagen: '/img/mafia.jpg'
  },
  {
    nombre: 'Carteles',
    descripcion: 'Forma parte de los carteles más poderosos',
    precio: '100.00',
    imagen: '/img/cartel.jpg'
  },
  {
    nombre: 'Coches VIP',
    descripcion: 'Los mejores coches VIP del concesionario',
    precio: '0.00',
    imagen: '/img/coches.jpg'
  },
  {
    nombre: 'Peds',
    descripcion: 'Peds personalizados para tu personaje',
    precio: '25.00',
    imagen: '/img/peds.jpg'
  },
  {
    nombre: 'Mapeados Personales',
    descripcion: 'Mapas únicos hechos a tu medida',
    precio: '50.00',
    imagen: '/img/mapa.jpg'
  },
  {
    nombre: 'Negocio Personal',
    descripcion: 'Tu propio negocio dentro del servidor',
    precio: '60.00',
    imagen: '/img/negocio.jpg'
  },
  {
    nombre: 'Mecánico',
    descripcion: 'Accede al rol de mecánico exclusivo',
    precio: '60.00',
    imagen: '/img/mecanico.jpg'
  },
  {
    nombre: 'Ropa Personal',
    descripcion: 'Prendas personalizadas para ti',
    precio: '20.00',
    imagen: '/img/ropa.jpg'
  },
  {
    nombre: 'Extras',
    descripcion: 'Extras únicos para tu experiencia',
    precio: '25.00',
    imagen: '/img/extras.jpg'
  }
]

export default function Store() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://www.paypal.com/sdk/js?client-id=Afrk5xxbAlMQp3_hw9m4J4kyP5XaCzpDCj2H1yU2rUz3g6tazLC5NMwNQZ68w2UPr2acvXlfH5qktbIE&currency=EUR"
    script.addEventListener('load', () => {
      items.forEach((item) => {
        if (window.paypal) {
          window.paypal.Buttons({
            createOrder: function (data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: { value: item.precio },
                  description: item.nombre
                }]
              })
            },
            onApprove: function (data, actions) {
              return actions.order.capture().then(function (details) {
                alert('¡Gracias por tu compra, ' + details.payer.name.given_name + '!')
              })
            }
          }).render(`#paypal-button-${item.nombre.replace(/\s/g, '')}`)
        }
      })
    })
    document.body.appendChild(script)
  }, [])

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-10">
      {items.map((item) => (
        <div key={item.nombre} className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition text-center">
          <img src={item.imagen} alt={item.nombre} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">{item.nombre}</h3>
            <p className="text-gray-600">{item.descripcion}</p>
            <p className="text-orange-500 font-bold text-lg mt-2">{item.precio} €</p>
            <div className="mt-4" id={`paypal-button-${item.nombre.replace(/\s/g, '')}`}></div>
          </div>
        </div>
      ))}
    </section>
  )
}

