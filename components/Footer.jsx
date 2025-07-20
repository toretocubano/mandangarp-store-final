import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <p className="mb-4 sm:mb-0">&copy; 2025 MandangaRP. Todos los derechos reservados.</p>
        <nav className="space-x-6">
          <a
            href="https://discord.gg/mandangarp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Discord
          </a>
          <a
            href="https://www.tiktok.com/@toreto_cubano"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            TikTok
          </a>
        </nav>
      </div>
    </footer>
  )
}
