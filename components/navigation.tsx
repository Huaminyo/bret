"use client"

import Link from "next/link"
import { ExternalLink, MessageCircle, BarChart3, ShoppingCart } from "lucide-react"

export function Navigation() {
  const navItems = [
    { name: "Home", href: "#", icon: null },
    { name: "Basecamp(TG)", href: "https://t.me/brettarmy", icon: MessageCircle, external: true },
    { name: "Comms(X)", href: "https://x.com/brettarmy_", icon: ExternalLink, external: true },
    {
      name: "DexScreener",
      href: "https://dexscreener.com/base/0x0B84053c463492A45FF9bEd7D0EcC7A0F60eFAB3",
      icon: BarChart3,
      external: true,
    },
    {
      name: "ApeStore(Buy)",
      href: "https://ape.store/base/0x2eea7375c1f8fb7a4c909a02802bb420bb9210e7",
      icon: ShoppingCart,
      external: true,
    },
  ]

  return (
    <nav className="mb-12">
      <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 hover:text-white transition-colors duration-300 hover:scale-105"
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            {item.icon && <item.icon size={16} />}
            {item.name}
            {item.external && <ExternalLink size={12} />}
          </Link>
        ))}
      </div>
    </nav>
  )
}
