import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Check, Calculator } from "lucide-react"

const features = [
  "Logiciel métier complet (AG, comptabilité, appels de fonds...)",
  "Accompagnement humain dédié",
  "Formation continue via l'Académie",
  "Support prioritaire 24/7",
  "API complète et intégrations",
  "Migrations et formations incluses",
  "Mises à jour automatiques",
  "Sauvegarde et sécurité garanties",
]

const volumeTiers = [
  { range: "Jusqu'à 500 lots", price: "À partir de 89€/mois" },
  { range: "500 à 1 500 lots", price: "À partir de 149€/mois" },
  { range: "1 500 à 5 000 lots", price: "À partir de 249€/mois" },
  { range: "Plus de 5 000 lots", price: "Tarif sur mesure" },
]

export function PricingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Une formule, tout inclus</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des tarifs transparents adaptés à votre volume d'activité. Toutes les fonctionnalités incluses, sans
            surprise.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main pricing card */}
          <Card className="border-2 border-cyan-500 shadow-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500" />

            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-3xl font-bold text-slate-800 mb-4">Copromatic Pro</CardTitle>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                La solution complète qui s'adapte à la taille de votre cabinet. Toutes les fonctionnalités incluses,
                tarif basé sur votre volume de lots.
              </p>
            </CardHeader>

            <CardContent className="px-8 pb-12">
              {/* Features grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Volume-based pricing */}
              <div className="bg-slate-50 rounded-xl p-8 mb-8">
                <div className="flex items-center justify-center mb-6">
                  <Calculator className="w-6 h-6 text-cyan-500 mr-2" />
                  <h3 className="text-xl font-semibold text-slate-800">Tarification par volume</h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {volumeTiers.map((tier, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 text-center border border-gray-200">
                      <div className="text-sm text-gray-600 mb-2">{tier.range}</div>
                      <div className="font-semibold text-slate-800">{tier.price}</div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-500 text-center mt-4">
                  * Tarifs dégressifs selon le volume total de lots gérés par votre cabinet
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg">
                  Calculer mon tarif
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg"
                >
                  Demander une démo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Value proposition */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Tout inclus</h3>
              <p className="text-gray-600 text-sm">
                Aucun module payant en plus, toutes les fonctionnalités disponibles
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Tarif adapté</h3>
              <p className="text-gray-600 text-sm">
                Prix dégressif selon votre volume, payez juste ce dont vous avez besoin
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 flex items-center justify-center font-bold text-sm">∞</div>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Sans limite</h3>
              <p className="text-gray-600 text-sm">
                Utilisateurs illimités, pas de restriction sur les fonctionnalités
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 