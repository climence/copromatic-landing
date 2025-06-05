import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Headphones,
  Target,
  Code,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  Award,
  FileText,
  Database,
  Settings,
  GraduationCap,
  GitBranch,
  Package,
  Play,
  Download,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function AccompagnementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-lavender-mist to-white relative">
        {/* Background gradient */}
        <div className="relative h-full bg-gradient-to-br from-slate-50 via-white to-cyan-50/30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100 px-4 py-2 text-sm font-medium">
              Accompagnement
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Nous accompagnons vos équipes{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">au quotidien</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Une équipe d'experts à votre service pour vous accompagner dans la mise en place et l'utilisation de nos solutions.
              Formation, support et conseil personnalisés.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 mt-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Nos services d'accompagnement</h2>
              <p className="text-xl text-gray-700 font-body">
                Une expertise métier au service de votre transformation
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-t-aqua-green">
              <Target className="w-12 h-12 text-aqua-green mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Migration clé en main</h3>
              <p className="text-sm text-gray-600 font-body">
                Reprise complète de vos données, formation équipes, accompagnement jusqu'à autonomie
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-t-orangey-yellow">
              <Headphones className="w-12 h-12 text-orangey-yellow mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Support expert</h3>
              <p className="text-sm text-gray-600 font-body">
                Équipe interne spécialisée syndic, support multicanal, résolution rapide
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-t-mango-tango">
              <Code className="w-12 h-12 text-mango-tango mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Développement continu</h3>
              <p className="text-sm text-gray-600 font-body">
                Roadmap co-construite, nouvelles fonctionnalités, évolutions réglementaires
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-t-light-apricot">
              <Shield className="w-12 h-12 text-light-apricot mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Conformité garantie</h3>
              <p className="text-sm text-gray-600 font-body">
                Veille légale, mises à jour automatiques, audit de conformité
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Équipes détaillées */}
      <section className="py-16 bg-lavender-mist/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Nos équipes spécialisées</h2>
            <p className="text-xl text-gray-700 font-body">Des experts métier dédiés à votre accompagnement</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 hover:shadow-lg transition-shadow" data-v0-t="card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-zodiac/20 rounded-full flex items-center justify-center mr-4">
                  <Settings className="w-8 h-8 text-blue-zodiac" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-zodiac font-heading">Équipe Intégration</h3>
                  <p className="text-gray-600 font-body">Experts comptables</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Création des copropriétés gagnées</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Mise en place des structures de copropriétés dans le système
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Intégration des données administratives</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Reprise et relecture des PV et données administratives
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Audit et reprise comptable complète</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Migration des balances, soldes, clés de répartition, historiques depuis le dernier exercice
                    </p>
                  </div>
                </li>
              </ul>
              <div className="bg-blue-zodiac/10 rounded-lg p-4">
                <p className="text-sm text-blue-zodiac font-body">
                  <strong>Délai moyen :</strong> 2-3 jours selon les données
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 hover:shadow-lg transition-shadow" data-v0-t="card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-aqua-green/20 rounded-full flex items-center justify-center mr-4">
                  <Database className="w-8 h-8 text-aqua-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-zodiac font-heading">Équipe Migration</h3>
                  <p className="text-gray-600 font-body">Experts data et onboarding</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Migration de données complète</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Reprise de vos données existantes depuis tout type de logiciel
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Accompagnement personnalisé</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Suivi dédié pendant toute la phase de transition
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Suivi jusqu'à la première clôture</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Accompagnement personnalisé pendant 3 mois minimum
                    </p>
                  </div>
                </li>
              </ul>
              <div className="bg-aqua-green/10 rounded-lg p-4">
                <p className="text-sm text-aqua-green font-body">
                  <strong>Délai moyen :</strong> 3-4 semaines
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 hover:shadow-lg transition-shadow" data-v0-t="card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orangey-yellow/20 rounded-full flex items-center justify-center mr-4">
                  <Headphones className="w-8 h-8 text-orangey-yellow" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-zodiac font-heading">Équipe Support</h3>
                  <p className="text-gray-600 font-body">Expert métier syndic</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orangey-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Support multicanal</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Téléphone, email, chat, visioconférence selon vos préférences
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orangey-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Expertise métier</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Équipe formée aux spécificités du syndic professionnel
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orangey-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Réactivité garantie</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Réponse sous 2h en moyenne, résolution rapide des incidents
                    </p>
                  </div>
                </li>
              </ul>
              <div className="bg-orangey-yellow/10 rounded-lg p-4">
                <p className="text-sm text-orangey-yellow font-body">
                  <strong>Disponibilité :</strong> 9h-18h
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 hover:shadow-lg transition-shadow" data-v0-t="card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-mango-tango/20 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-8 h-8 text-mango-tango" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-zodiac font-heading">Équipe Formation</h3>
                  <p className="text-gray-600 font-body">Experts pédagogiques</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-mango-tango mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Formation</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Formation de vos équipes sur la plateforme
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-mango-tango mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Suivi personnalisé</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Accompagnement individuel pour une meilleure prise en main
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-mango-tango mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Évaluation des compétences</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Suivi de la progression et identification des besoins
                    </p>
                  </div>
                </li>
              </ul>
              <div className="bg-mango-tango/10 rounded-lg p-4">
                <p className="text-sm text-mango-tango font-body">
                  <strong>Certification :</strong> NDA & Qualiopi en cours de certification
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 hover:shadow-lg transition-shadow" data-v0-t="card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-light-apricot/20 rounded-full flex items-center justify-center mr-4">
                  <GitBranch className="w-8 h-8 text-light-apricot" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-zodiac font-heading">Équipe Développement</h3>
                  <p className="text-gray-600 font-body">Experts techniques</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-light-apricot mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Co-construction</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Développement des fonctionnalités en collaboration avec nos clients
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-light-apricot mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Mise en conformité</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Adaptation continue aux évolutions réglementaires
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-light-apricot mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Amélioration continue</h4>
                    <p className="text-gray-600 font-body text-sm">
                      R&D et innovation technologique pour optimiser vos processus métier
                    </p>
                  </div>
                </li>
              </ul>
              <div className="bg-light-apricot/10 rounded-lg p-4">
                <p className="text-sm text-light-apricot font-body">
                  <strong>Releases :</strong> Hebdomadaires
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 hover:shadow-lg transition-shadow" data-v0-t="card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-zodiac/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-blue-zodiac" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-zodiac font-heading">Équipe Optimisation & Relations Partenaires</h3>
                  <p className="text-gray-600 font-body">Experts partenariats</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Gestion des partenariats</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Développement et suivi des relations avec nos partenaires sous-traitants (prestataires courriers, e-avis, signature électronique, etc.)
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Optimisation des coûts</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Négociation continue et mise en concurrence pour garantir un service continu et compétitif (économies d'échelle)
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Maintenance des outils</h4>
                    <p className="text-gray-600 font-body text-sm">
                      Suivi et maintenance des outils partenaires pour garantir leur performance et leur fiabilité
                    </p>
                  </div>
                </li>
              </ul>
              <div className="bg-blue-zodiac/10 rounded-lg p-4">
                <p className="text-sm text-blue-zodiac font-body">
                  <strong>Objectif :</strong> SLA 98%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Étapes d'accompagnement */}
      <section className="py-16 bg-gradient-to-br from-lavender-mist to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-light-apricot text-blue-zodiac hover:bg-light-apricot font-body">
              Notre méthodologie
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Un accompagnement sur mesure en 4 étapes</h2>
            <p className="text-xl text-gray-700 font-body">
              Un parcours structuré pour votre réussite
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-zodiac to-blue-zodiac/80 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-zodiac/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-blue-zodiac">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-zodiac font-heading">Analyse & Diagnostic</h3>
                </div>
                <p className="text-gray-600 font-body">
                  Compréhension approfondie de vos processus et identification des opportunités d'optimisation
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-zodiac/80 to-blue-zodiac/60 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-zodiac/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-blue-zodiac">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-zodiac font-heading">Stratégie & Planification</h3>
                </div>
                <p className="text-gray-600 font-body">
                  Définition d'une stratégie adaptée à vos enjeux avec des objectifs concrets
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-zodiac/60 to-blue-zodiac/40 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-zodiac/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-blue-zodiac">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-zodiac font-heading">Mise en œuvre</h3>
                </div>
                <p className="text-gray-600 font-body">
                  Déploiement progressif des solutions avec un suivi personnalisé
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-zodiac/40 to-blue-zodiac/20 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-zodiac/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-blue-zodiac">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-zodiac font-heading">Transfert & Autonomie</h3>
                </div>
                <p className="text-gray-600 font-body">
                  Formation complète et transfert de compétences pour garantir votre indépendance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services complémentaires */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Services complémentaires</h2>
              <p className="text-xl text-gray-700 mb-6 font-body">
                Un accompagnement temporaire pour vous aider à restructurer et optimiser votre cabinet de syndic
              </p>
              <div className="bg-blue-zodiac/5 rounded-lg p-6">
                <p className="text-lg text-gray-700 font-body">
                  Des solutions sur mesure pour répondre à vos besoins spécifiques. Ces services peuvent être activés 
                  ponctuellement selon vos besoins, en complément de votre abonnement. Ils sont réalisés soit par nos équipes, 
                  soit par des prestataires tiers ayant intégré nos cahiers des charges et méthodes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-t-orangey-yellow">
                <Package className="w-12 h-12 text-orangey-yellow mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Sous-traitance comptable</h3>
                <p className="text-sm text-gray-600 font-body">
                  Externalisation de tout ou partie de votre comptabilité de copropriété
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mt-4 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orangey-yellow mr-2" />
                    Saisie des écritures
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orangey-yellow mr-2" />
                    Rapprochements bancaires
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orangey-yellow mr-2" />
                    Contrôles qualité
                  </li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-t-mango-tango">
                <Package className="w-12 h-12 text-mango-tango mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Formation des nouveaux collaborateurs</h3>
                <p className="text-sm text-gray-600 font-body">
                  Accompagnement personnalisé pour l'intégration de vos nouveaux collaborateurs
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mt-4 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-mango-tango mr-2" />
                    Suivi personnalisé
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-mango-tango mr-2" />
                    Formation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-mango-tango mr-2" />
                    Évaluation des compétences
                  </li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-t-blue-zodiac">
                <Package className="w-12 h-12 text-blue-zodiac mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Audit des coûts portefeuilles</h3>
                <p className="text-sm text-gray-600 font-body">
                  Audit et négociation de vos contrats fournisseurs pour réduire les charges de copropriété
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mt-4 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-zodiac mr-2" />
                    Négociation contrats
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-zodiac mr-2" />
                    Mise en concurrence
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-zodiac mr-2" />
                    Suivi des économies
                  </li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-t-aqua-green">
                <Package className="w-12 h-12 text-aqua-green mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Migration et optimisation des archives</h3>
                <p className="text-sm text-gray-600 font-body">
                  Gestion complète de vos archives et documents de copropriété
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mt-4 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-aqua-green mr-2" />
                    Audit et classification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-aqua-green mr-2" />
                    Standardisation des nomenclatures
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-aqua-green mr-2" />
                    Identification et récupération des documents manquants
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-zodiac/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Prêt à démarrer votre transformation digitale ?</h2>
          <p className="text-xl mb-8 opacity-90 font-body">
            Nos équipes sont là pour vous accompagner à chaque étape
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-mango-tango hover:bg-mango-tango/90 text-white font-body">
                Rencontrer nos équipes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 