"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function BrettArmy() {
  const [activeSection, setActiveSection] = useState("warriors")
  const [showContent, setShowContent] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sections = {
    warriors: {
      title: "BASE TRENCH WARRIORS",
      image: "/images/brett-trench-warrior.jpg",
      content: (
        <div className="text-gray-300 space-y-6 font-mono text-sm leading-relaxed">
          <p>
            Brett isn't just any warrior—he's a soldier born in the meme coin trenches, where countless tokens rise and
            fall in the blink of an eye. Born with determination and courage, Brett wears his colors with pride,
            symbolizing his loyalty to Base Network and his mission to unite meme coins under one flag. For Brett, the
            Base blockchain isn't just a platform—it's his battleground, and he's ready to lead the meme coin
            revolution.
          </p>

          <div className="mt-8">
            <h3 className="text-white font-bold mb-4">1. Supply Posts [Where to buy]:</h3>
            <ul className="space-y-2 ml-4">
              <li>• Uniswap [DEX]</li>
              <li>• SushiSwap [DEX]</li>
              <li>• BaseSwap [DEX]</li>
              <li>• MEXC</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-white font-bold mb-4">2. Listings and Updates:</h3>
            <ul className="space-y-2 ml-4">
              <li>• Coingecko</li>
              <li>• CMC</li>
              <li>• MoonTok</li>
              <li>• CN Token</li>
            </ul>
          </div>
        </div>
      ),
    },
    mission: {
      title: "BRETT'S MISSION",
      image: "/images/brett-mission.jpg",
      content: (
        <div className="text-gray-300 space-y-6 font-mono text-sm leading-relaxed">
          <p>
            Brett stands boldly against the conventional currents of the crypto world, challenging the status quo with
            every transaction. His mission is to break free from the chains of traditional investment norms, where
            speculative frenzy often overshadows true potential. Brett isn't here to follow trends; he's here to set
            them, sparking a movement where creativity, community, and courage are the new currencies. He aims to
            redefine what it means to be a meme coin, not just as a fleeting jest but as a symbol of resilience and
            innovation on the Base Network.
          </p>
        </div>
      ),
    },
    army: {
      title: "THE BASE ARMY",
      image: "/images/base-army.jpg",
      content: (
        <div className="text-gray-300 space-y-6 font-mono text-sm leading-relaxed">
          <p>
            Brett's call is not just for followers but for fellow warriors. He seeks to unite all who have faith in the
            power of memes to disrupt, innovate, and unite. Under Brett's leadership, the community isn't just a group
            of investors; it's a legion of like-minded individuals bound by the shared goal of transforming the meme
            coin landscape. Together, they aim to create a cohesive front, leveraging the strength of the Base Network
            to fight for visibility, value, and victory in the crypto wars. Brett's troop is where every member is both
            a soldier and a strategist in this grand meme coin crusade.
          </p>
        </div>
      ),
    },
    attack: {
      title: "THE ATTACK PLAN",
      image: "/images/attack-plan.jpg",
      content: (
        <div className="text-gray-300 space-y-6 font-mono text-sm leading-relaxed">
          <div>
            <h3 className="text-white font-bold mb-3">1. Uniting the Troops:</h3>
            <p className="mb-2">
              <strong>Objective:</strong> Assemble a formidable force of meme coin enthusiasts and Base Network
              believers.
            </p>
            <p>
              <strong>Strategy:</strong> Rally the scattered forces under Brett's banner. Promote unity through shared
              vision, community events, and exclusive token benefits. Establish a command center on telegram where
              strategies are discussed and camaraderie is built.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3">2. Invading the Enemy:</h3>
            <p className="mb-2">
              <strong>Objective:</strong> Disrupt the dominance of established meme coins and conquer new territories.
            </p>
            <p>
              <strong>Strategy:</strong> Launch surprise attacks via significant token burns, strategic partnerships,
              and showcasing Brett's unique features. Utilize the Base Network's speed and efficiency to outmaneuver
              competitors, capturing market share and investor interest.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3">3. Growing the Community:</h3>
            <p className="mb-2">
              <strong>Objective:</strong> Expand our ranks to include both seasoned warriors and fresh recruits.
            </p>
            <p>
              <strong>Strategy:</strong> Implement a rigorous recruitment campaign with educational content, interactive
              AMAs, and incentivized participation in community activities. Develop a loyalty program where every action
              taken by members directly contributes to the token's growth and stability.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3">4. Listing on Exchanges:</h3>
            <p className="mb-2">
              <strong>Objective:</strong> Secure strategic positions by listing on major and niche exchanges.
            </p>
            <p>
              <strong>Strategy:</strong> Engage in diplomatic talks with exchange leaders, showcasing Brett's potential
              and community support. Prepare for a coordinated assault with a series of listings to ensure broad
              accessibility and liquidity, turning each listing into a victory parade for our troops.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3">5. Guerrilla Marketing:</h3>
            <p className="mb-2">
              <strong>Objective:</strong> Wage unconventional warfare to capture the market's attention.
            </p>
            <p>
              <strong>Strategy:</strong> Deploy unexpected marketing maneuvers like flash mob events, viral social media
              campaigns, and meme contests. Use the element of surprise with pop-up events and flash giveaways in
              unexpected places, both online and offline, to keep Brett at the forefront of investors' minds.
            </p>
          </div>

          <div className="mt-8 p-4 bg-gray-800 bg-opacity-50 rounded">
            <p className="text-white font-bold">
              With these stages, BRETT ARMY aims to not only survive but thrive in the meme coin trenches, transforming
              from a mere participant to a dominant force, leading the charge towards a new era of meme coin supremacy
              on Base Network.
            </p>
          </div>
        </div>
      ),
    },
  }

  const allImages = [
    { src: "/images/brett-trench-warrior.jpg", title: "BASE TRENCH WARRIORS" },
    { src: "/images/brett-mission.jpg", title: "BRETT'S MISSION" },
    { src: "/images/base-army.jpg", title: "THE BASE ARMY" },
    { src: "/images/attack-plan.jpg", title: "THE ATTACK PLAN" },
  ]

  const handleMenuClick = (section: string) => {
    setActiveSection(section)
    setShowContent(true)
    setMobileMenuOpen(false)
  }

  const closeContent = () => {
    setShowContent(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm border-b border-gray-800">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-2">
              <Image src="/favicon.ico" alt="Brett Army" width={32} height={32} className="rounded" />
              <h1 className="text-lg font-bold">BRETT ARMY</h1>
            </div>
            <button onClick={toggleMobileMenu} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-95 backdrop-blur-sm">
            <div className="pt-20 p-6">
              {/* Mobile Navigation */}
              <nav className="mb-8">
                <div className="space-y-4 text-gray-400 text-sm font-mono">
                  <button
                    onClick={() => {
                      setShowContent(false)
                      setMobileMenuOpen(false)
                    }}
                    className="block hover:text-white transition-colors"
                  >
                    Home
                  </button>
                  <a
                    href="https://t.me/brettarmy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Basecamp(TG)
                  </a>
                  <a
                    href="https://twitter.com/brettarmy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Comms(X)
                  </a>
                  <a
                    href="https://dexscreener.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    DexScreener
                  </a>
                  <button
                    onClick={() => {
                      setShowContent(false)
                      setMobileMenuOpen(false)
                    }}
                    className="block hover:text-white transition-colors"
                  >
                    ApeStore(Buy)
                  </button>
                </div>
              </nav>

              {/* Mobile Menu Items */}
              <div className="space-y-6 font-mono">
                <button
                  onClick={() => handleMenuClick("warriors")}
                  className="block text-left text-lg text-gray-400 hover:text-white transition-colors"
                >
                  BASE TRENCH WARRIORS
                </button>
                <button
                  onClick={() => handleMenuClick("mission")}
                  className="block text-left text-lg text-gray-400 hover:text-white transition-colors"
                >
                  BRETT'S MISSION
                </button>
                <button
                  onClick={() => handleMenuClick("army")}
                  className="block text-left text-lg text-gray-400 hover:text-white transition-colors"
                >
                  THE BASE ARMY
                </button>
                <button
                  onClick={() => handleMenuClick("attack")}
                  className="block text-left text-lg text-gray-400 hover:text-white transition-colors"
                >
                  THE ATTACK PLAN
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Content */}
        <div className="pt-20">
          {!showContent ? (
            <>
              {/* Mobile Hero */}
              <div className="p-6 text-center">
                <h1 className="text-4xl sm:text-5xl font-black text-white leading-none tracking-tighter mb-4">BRETT</h1>
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-none tracking-tighter mb-8">ARMY</h2>
                <p className="text-gray-400 text-sm font-mono mb-8">
                  Base Trench Warriors - Leading the meme coin revolution
                </p>
              </div>

              {/* Mobile Image Gallery */}
              <div className="space-y-4 px-4">
                {allImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-64 w-full rounded-lg overflow-hidden group"
                    onClick={() => handleMenuClick(Object.keys(sections)[index])}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover transition-all duration-300 group-active:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-white font-bold text-lg font-mono text-center px-4">{image.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Mobile Content Display */
            <div className="p-6">
              <div className="mb-6">
                <button
                  onClick={closeContent}
                  className="text-gray-400 hover:text-white text-sm font-mono mb-4 flex items-center"
                >
                  ← Back to Menu
                </button>
                <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tighter mb-6">
                  {sections[activeSection as keyof typeof sections].title}
                </h1>
              </div>

              {/* Mobile Image */}
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <Image
                  src={sections[activeSection as keyof typeof sections].image || "/placeholder.svg"}
                  alt={sections[activeSection as keyof typeof sections].title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Mobile Content */}
              <div className="animate-fadeIn">{sections[activeSection as keyof typeof sections].content}</div>
            </div>
          )}

          {/* Mobile Footer */}
          <div className="p-6 mt-12 border-t border-gray-800">
            <div className="text-gray-500 text-xs font-mono leading-relaxed space-y-2">
              <div>©2025 BRETT ARMY. All rights reserved.</div>
              <div>BRETT ARMY is a decentralized community project on Base Network.</div>
              <div className="mt-4">
                <div className="text-white font-semibold">Contract Address (CA):</div>
                <div className="text-gray-400 italic">Coming Soon...</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Left Sidebar */}
        <div className="w-1/2 bg-black p-8 flex flex-col">
          {/* Navigation */}
          <nav className="mb-12">
            <div className="flex space-x-8 text-gray-400 text-sm font-mono">
              <button
                onClick={() => setShowContent(false)}
                className="hover:text-white transition-all duration-300 hover:scale-105 hover:glow-blue"
              >
                Home
              </button>
              <a
                href="https://t.me/brettarmy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-300 hover:scale-105 hover:glow-blue"
              >
                Basecamp(TG)
              </a>
              <a
                href="https://twitter.com/brettarmy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-300 hover:scale-105 hover:glow-blue"
              >
                Comms(X)
              </a>
              <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-300 hover:scale-105 hover:glow-blue"
              >
                DexScreener
              </a>
              <button
                onClick={() => setShowContent(false)}
                className="hover:text-white transition-all duration-300 hover:scale-105 hover:glow-blue"
              >
                ApeStore(Buy)
              </button>
            </div>
          </nav>

          {/* BRETT ARMY Logo or Content */}
          {!showContent ? (
            <div className="mb-16 animate-fadeIn">
              <h1 className="text-[80px] font-black text-white leading-none tracking-tighter hover:text-green-400 transition-colors duration-500">
                BRETT
              </h1>
              <h2 className="text-[60px] font-black text-white leading-none tracking-tighter hover:text-green-400 transition-colors duration-500">
                ARMY
              </h2>
            </div>
          ) : (
            /* Content Display */
            <div className="mb-8 animate-fadeIn">
              <h1 className="text-[48px] font-black text-white leading-none tracking-tighter mb-8">
                {sections[activeSection as keyof typeof sections].title}
              </h1>
              <div className="animate-slideIn">{sections[activeSection as keyof typeof sections].content}</div>
            </div>
          )}

          {/* Menu Items or Close Button */}
          {!showContent ? (
            <div className="space-y-8 flex-1 font-mono">
              <button
                onClick={() => handleMenuClick("warriors")}
                className="block text-left text-lg transition-all duration-500 transform hover:translate-x-4 hover:scale-105 text-gray-400 hover:text-white hover:glow-blue"
              >
                BASE TRENCH WARRIORS
              </button>

              <button
                onClick={() => handleMenuClick("mission")}
                className="block text-left text-lg transition-all duration-500 transform hover:translate-x-4 hover:scale-105 text-gray-400 hover:text-white hover:glow-blue"
              >
                BRETT'S MISSION
              </button>

              <button
                onClick={() => handleMenuClick("army")}
                className="block text-left text-lg transition-all duration-500 transform hover:translate-x-4 hover:scale-105 text-gray-400 hover:text-white hover:glow-blue"
              >
                THE BASE ARMY
              </button>

              <button
                onClick={() => handleMenuClick("attack")}
                className="block text-left text-lg transition-all duration-500 transform hover:translate-x-4 hover:scale-105 text-gray-400 hover:text-white hover:glow-blue"
              >
                THE ATTACK PLAN
              </button>
            </div>
          ) : (
            <div className="flex-1 flex items-end">
              <button
                onClick={closeContent}
                className="text-white hover:text-red-400 text-lg font-mono transition-all duration-300 hover:scale-105 animate-pulse"
              >
                ← Back to Menu
              </button>
            </div>
          )}

          {/* Footer */}
          <div className="mt-auto space-y-2 font-mono animate-fadeIn">
            <div className="text-gray-500 text-xs leading-relaxed">
              <div className="mb-2">©2025 BRETT ARMY. All rights reserved.</div>
              <div className="mb-1">
                This website and its contents are protected by copyright and other intellectual property laws.
              </div>
              <div className="mb-1">
                Unauthorized reproduction, distribution, or modification is strictly prohibited.
              </div>
              <div className="mb-4">BRETT ARMY is a decentralized community project on Base Network.</div>

              {/* Contract Address Section */}
              <div className="mt-4">
                <div className="text-white font-semibold mb-1">Contract Address (CA):</div>
                <div className="text-gray-400 italic">Coming Soon...</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="w-1/2 relative">
          {!showContent ? (
            /* Scrollable Image Gallery */
            <div className="h-screen overflow-y-auto scroll-smooth">
              <div className="space-y-0">
                {allImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-screen w-full group transition-all duration-700 hover:scale-105"
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:brightness-110"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
                    <div className="absolute top-8 left-8 transform transition-all duration-500 group-hover:translate-x-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-4 text-white drop-shadow-lg transition-all duration-300 group-hover:text-green-400">
                          →
                        </span>
                        <h2 className="text-3xl font-bold text-white font-mono drop-shadow-lg transition-all duration-300 group-hover:text-green-400">
                          {image.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Full Image Display */
            <div className="h-screen relative animate-fadeIn">
              <Image
                src={sections[activeSection as keyof typeof sections].image || "/placeholder.svg"}
                alt={sections[activeSection as keyof typeof sections].title}
                fill
                className="object-contain transition-all duration-500"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
