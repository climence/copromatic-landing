"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  CheckCircle,
  Users,
  BookOpen,
  Zap,
  Shield,
  ArrowRight,
  Star,
  Quote,
  Code,
  Headphones,
  TrendingUp,
  Award,
  Building,
  Phone,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HooomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-slate-800 text-white px-2 py-1 rounded text-sm font-bold">CO</div>
              <span className="text-xl font-bold text-slate-800">Copromatic</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#solutions" className="text-slate-600 hover:text-slate-800 transition-colors">
                Solutions
              </Link>
              <Link href="#accompagnement" className="text-slate-600 hover:text-slate-800 transition-colors">
                Accompagnement
              </Link>
              <Link href="#academie" className="text-slate-600 hover:text-slate-800 transition-colors">
                Académie
              </Link>
              <Link href="#api" className="text-slate-600 hover:text-slate-800 transition-colors">
                API
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                Connexion
              </Button>
              <Button size="sm" className="bg-slate-800 hover:bg-slate-700">
                Voir une démo
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100">
              Plateforme complète pour syndics professionnels
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Le logiciel qui <span className="text-cyan-500">équipe</span> et{" "}
              <span className="text-cyan-500">forme</span> les syndics professionnels
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Une plateforme métier complète qui associe outils puissants, accompagnement humain et formation continue
              pour faire progresser vos équipes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-lg px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                Voir une démo
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Être recontacté·e
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nos 3 piliers d'excellence</h2>
            <p className="text-xl text-slate-600">Une approche complète pour votre réussite</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Logiciel métier</h3>
                <p className="text-slate-600 mb-6">
                  AG, comptabilité, appels de fonds, mutations... Tous vos outils en un seul endroit.
                </p>
                <div className="flex items-center justify-center text-cyan-500 font-medium">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Gérer efficacement
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Headphones className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Accompagnement humain</h3>
                <p className="text-slate-600 mb-6">
                  Support réactif, équipe migration dédiée, service de sous-traitance disponible.
                </p>
                <div className="flex items-center justify-center text-cyan-500 font-medium">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Être bien accompagné
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Académie de formation</h3>
                <p className="text-slate-600 mb-6">
                  Formations structurées, quiz, parcours personnalisés pour faire progresser vos équipes.
                </p>
                <div className="flex items-center justify-center text-cyan-500 font-medium">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Faire progresser vos équipes
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Toutes les fonctionnalités dont vous avez besoin</h2>
            <p className="text-xl text-slate-600">
              Une suite complète d'outils métier pour optimiser votre gestion quotidienne
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Comptabilité */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Comptabilité</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Clôtures automatisées",
                  "Appels de fonds",
                  "Répartition des charges",
                  "États financiers",
                  "Budgets prévisionnels",
                  "Suivi des impayés",
                  "Rapprochements bancaires",
                  "Export comptable",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gestion */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Gestion</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Gestion des copropriétaires",
                  "Mutations & ventes",
                  "Contrats & prestataires",
                  "Travaux & devis",
                  "Sinistres & assurances",
                  "Documents partagés",
                  "Courriers automatiques",
                  "Relances personnalisées",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Assemblées */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Assemblées</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Convocations automatiques",
                  "Ordres du jour",
                  "Procès-verbaux",
                  "Vote électronique",
                  "Quorum en temps réel",
                  "Pouvoirs dématérialisés",
                  "Diffusion des résultats",
                  "Archives numériques",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Digital & Intégrations */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Digital & API</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Espace copropriétaire",
                  "Application mobile",
                  "Paiements en ligne",
                  "OCR factures",
                  "Signature électronique",
                  "API ouverte",
                  "Intégrations bancaires",
                  "Connecteurs métier",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 