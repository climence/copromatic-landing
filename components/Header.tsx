"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md h-16" : "bg-white h-20"
    }`}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo-header.png" 
              alt="Copromatic" 
              className={`transition-all duration-300 ${isScrolled ? "h-6" : "h-8"}`} 
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/plateforme" className="text-gray-600 hover:text-blue-zodiac font-body">
              Plateforme
            </Link>
            <Link href="/academie" className="text-gray-600 hover:text-blue-zodiac font-body">
              Académie
            </Link>
            <Link href="/accompagnement" className="text-gray-600 hover:text-blue-zodiac font-body">
              Accompagnement
            </Link>
            <Link href="/api" className="text-gray-600 hover:text-blue-zodiac font-body">
              API
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <Button variant="ghost" className="text-gray-600 hover:text-blue-zodiac font-body">
                Contact
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-zodiac to-aqua-green hover:from-blue-zodiac/90 hover:to-aqua-green/90 text-white font-body px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Demander une démo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 