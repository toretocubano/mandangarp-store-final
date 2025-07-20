import React from 'react'

export default function Normativa() {
  return (
    <section className="mb-12 bg-[#ff6a00]/10 rounded-lg p-6 border border-[#ff6a00]">
      <h2 className="text-3xl font-bold mb-4 text-primary">Normativa y Condiciones</h2>
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li>Todos los artículos y servicios en esta tienda son de pago.</li>
        <li>Las donaciones se realizan vía PayPal al correo <code>ag0238334@gmail.com</code> como amigos y familiares.</li>
        <li>La compra solo se concreta al recibir la confirmación de pago.</li>
        <li>Las donaciones son irrevocables y no se hacen devoluciones bajo ninguna circunstancia.</li>
        <li>Si incumples las normas del servidor, las donaciones no serán reembolsadas.</li>
        <li>Estas donaciones ayudan a mejorar y mantener el servidor MandangaRP.</li>
      </ul>
    </section>
  )
}
