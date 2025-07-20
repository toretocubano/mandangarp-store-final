import React from 'react'

const testimonios = [
  {
    id: 1,
    nombre: 'Carlos M.',
    comentario: 'MandangaRP es una experiencia increíble, ¡la comunidad es genial!',
  },
  {
    id: 2,
    nombre: 'Luisa G.',
    comentario: 'Las donaciones valen cada centavo, el servidor siempre mejora.',
  },
  {
    id: 3,
    nombre: 'Toreto Cubano',
    comentario: 'Gran ambiente y contenido de calidad. Recomendado 100%.',
  },
]

export default function Testimonios() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">Testimonios</h2>
      <div className="space-y-6">
        {testimonios.map(({ id, nombre, comentario }) => (
          <blockquote
            key={id}
            className="border-l-4 border-primary pl-4 italic bg-[#ff6a00]/10 rounded-md p-4"
          >
            <p>"{comentario}"</p>
            <footer className="mt-2 font-semibold text-primary">— {nombre}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
