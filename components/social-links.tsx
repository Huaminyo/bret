"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Twitter, Globe, BarChart3 } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    { name: "Telegram", icon: MessageCircle, url: "https://t.me/brettarmy", color: "bg-blue-500" },
    { name: "Twitter", icon: Twitter, url: "https://x.com/brettarmy_", color: "bg-sky-500" },
    {
      name: "DexScreener",
      icon: BarChart3,
      url: "https://dexscreener.com/base/0x0B84053c463492A45FF9bEd7D0EcC7A0F60eFAB3",
      color: "bg-purple-500",
    },
    {
      name: "ApeStore",
      icon: Globe,
      url: "https://ape.store/base/0x2eea7375c1f8fb7a4c909a02802bb420bb9210e7",
      color: "bg-green-500",
    },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          size="sm"
          className={`${link.color} hover:opacity-80 transition-all duration-300 hover:scale-105`}
          onClick={() => window.open(link.url, "_blank")}
        >
          <link.icon size={16} className="mr-2" />
          {link.name}
        </Button>
      ))}
    </div>
  )
}
