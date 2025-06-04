import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/images/logo-header.png" alt="Copromatic" className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/plateforme" className="text-gray-600 hover:text-blue-zodiac font-body transition-colors">
            Plateforme
          </Link>
          <Link href="/academie" className="text-gray-600 hover:text-blue-zodiac font-body transition-colors">
            Académie
          </Link>
          <Link href="/accompagnement" className="text-gray-600 hover:text-blue-zodiac font-body transition-colors">
            Accompagnement
          </Link>
          <Link href="/api" className="text-gray-600 hover:text-blue-zodiac font-body transition-colors">
            API
          </Link>
        </nav>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="border-blue-zodiac text-blue-zodiac hover:bg-lavender-mist font-body"
          >
            Connexion
          </Button>
          <Link href="/contact">
            <Button size="sm" className="bg-blue-zodiac hover:bg-blue-zodiac/90 font-body">
              Voir une démo
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
} 