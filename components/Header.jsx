import React from 'react'

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <img src="/logo.png" alt="MandangaRP" className="h-12" />
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
    </header>
  )
}
