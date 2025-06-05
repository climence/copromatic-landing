import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-lavender-mist to-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100 px-4 py-2 text-sm font-medium">
            Plateforme complète pour syndics professionnels
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Le logiciel qui{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">équipe</span> et{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">forme</span>
            <br />
            les syndics professionnels
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Une plateforme métier complète qui associe outils puissants, accompagnement humain et formation continue
            pour faire progresser vos équipes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Voir une démo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Être recontacté·e
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Ils nous font confiance</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">MANDA</div>
              <div className="text-2xl font-bold text-gray-400">MYSYNDIC</div>
              <div className="text-2xl font-bold text-gray-400">DOOR-IN</div>
              <div className="text-2xl font-bold text-gray-400">ORPI</div>
              <div className="text-2xl font-bold text-gray-400">GROUPE KLEPIERRE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 