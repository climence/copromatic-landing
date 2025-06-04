"use client"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  ArrowRight,
  Globe,
  Database,
  Users,
  FileText,
  Mail,
  Lock,
  CreditCard,
  BookOpen,
  Headphones,
  Briefcase,
  Building,
  Zap,
  Code,
  PenTool,
  Palette,
  Server,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
  .feature-card {
    @apply p-6 border-4 border-blue-zodiac rounded-2xl;
    box-shadow: 6px 6px 0px #DDE7F5;
    transition: all 0.2s ease;
  }
  
  .feature-card:hover {
    transform: translate(2px, 2px);
    box-shadow: 4px 4px 0px #DDE7F5;
  }
  
  .solution-card {
    @apply p-6 border-4 rounded-2xl;
    transition: all 0.2s ease;
  }
  
  .solution-card.primary {
    @apply border-aqua-green;
    box-shadow: 6px 6px 0px #02DDBF;
  }
  
  .solution-card.primary:hover {
    transform: translate(2px, 2px);
    box-shadow: 4px 4px 0px #02DDBF;
  }
  
  .solution-card.secondary {
    @apply border-orangey-yellow;
    box-shadow: 6px 6px 0px #FDB803;
  }
  
  .solution-card.secondary:hover {
    transform: translate(2px, 2px);
    box-shadow: 4px 4px 0px #FDB803;
  }
  
  .solution-card.tertiary {
    @apply border-mango-tango;
    box-shadow: 6px 6px 0px #FF6B03;
  }
  
  .solution-card.tertiary:hover {
    transform: translate(2px, 2px);
    box-shadow: 4px 4px 0px #FF6B03;
  }

  .cta-section {
    background: linear-gradient(135deg, #1E2251 0%, #02DDBF 100%);
    position: relative;
  }

  .cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%);
    pointer-events: none;
  }
`}</style>

      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/images/logo-header.png" alt="Copromatic" className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-zodiac font-body transition-colors">
              Accueil
            </Link>
            <Link href="/solutions" className="text-gray-600 hover:text-blue-zodiac font-body transition-colors">
              Solutions
            </Link>
            <Link href="/academie" className="text-gray-600 hover:text-blue-zodiac font-body transition-colors">
              Formations
            </Link>
            <Link href="/equipes" className="text-gray-600 hover:text-blue-zodiac font-body transition-colors">
              Équipes
            </Link>
            <Link href="/api" className="text-gray-600 hover:text-blue-zodiac font-body transition-colors">
              API
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-zodiac font-body transition-colors">
              Contact
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-mist to-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-light-apricot text-blue-zodiac hover:bg-light-apricot font-body">
            Plateforme complète pour syndics professionnels
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-zodiac mb-6 leading-tight font-heading">
            Nos <span className="text-aqua-green">solutions</span> pour les syndics professionnels
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto font-body">
            Découvrez l'écosystème complet Copromatic : une plateforme métier, des logiciels experts et des services
            dédiés pour faire gagner du temps aux syndics en automatisant les tâches répétitives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact-rdv">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-mango-tango hover:bg-mango-tango/90 text-white font-body">
                <ArrowRight />
                Demander une démo
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que Copromatic */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Copromatic, c'est quoi ?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Une équipe, une entreprise et des outils numériques dédiés exclusivement aux gestionnaires professionnels
              de copropriété.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 font-body">
                Le logiciel principal Copromatic est conçu pour aider le syndic dans ses tâches liées à la gestion
                administrative, comptable et réglementaire des copropriétés.
              </p>
              <p className="text-lg text-gray-700 mb-6 font-body">
                En complément, Copromatic s'entoure d'outils spécialisés pour vous permettre de traiter des tâches
                spécifiques automatiquement sur tout votre portefeuille.
              </p>
              <p className="text-lg text-gray-700 mb-6 font-body">
                Certains de ces outils sont développés directement par nos équipes, d'autres par des partenaires.
              </p>
              <div className="bg-lavender-mist/30 p-6 rounded-2xl border-l-4 border-aqua-green">
                <p className="text-lg font-medium text-blue-zodiac font-body">
                  Chez Copromatic, notre mission est de faire gagner du temps aux syndics en automatisant un maximum de
                  tâches répétitives, tout en assurant la conformité légale.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-blue-zodiac font-heading">Automatisation</h3>
                  <p className="text-sm text-gray-600 font-body">
                    Automatisez les tâches répétitives pour vous concentrer sur l'essentiel
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orangey-yellow/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orangey-yellow/10 text-orangey-yellow transition-transform duration-300 group-hover:scale-110">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-blue-zodiac font-heading">Conformité</h3>
                  <p className="text-sm text-gray-600 font-body">
                    Assurez la conformité légale de toutes vos opérations
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-mango-tango/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mango-tango/10 text-mango-tango transition-transform duration-300 group-hover:scale-110">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-blue-zodiac font-heading">Données sécurisées</h3>
                  <p className="text-sm text-gray-600 font-body">
                    Vos données hébergées et sécurisées dans Datacopro
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-zodiac/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-zodiac/10 text-blue-zodiac transition-transform duration-300 group-hover:scale-110">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-blue-zodiac font-heading">Accompagnement</h3>
                  <p className="text-sm text-gray-600 font-body">
                    Une équipe dédiée pour vous accompagner au quotidien
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les espaces de travail */}
      <section className="py-16 bg-gradient-to-br from-lavender-mist/40 via-lavender-mist/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Vos espaces de travail</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Deux interfaces complémentaires pour gérer efficacement votre cabinet et vos copropriétés
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-8 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-aqua-green/20 rounded-full flex items-center justify-center mr-4 transition-transform duration-300 group-hover:scale-110">
                    <Briefcase className="w-8 h-8 text-aqua-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-zodiac font-heading">L'Espace Pro</h3>
                    <p className="text-gray-600 font-body">L'espace dédié à votre cabinet</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 font-body">
                  Votre domaine regroupe les données consolidées de vos copropriétés, ainsi que les données
                  administratives et réglementaires du cabinet. Configurez, visualisez et mettez à jour toutes ces
                  informations depuis l'Espace Pro de Copromatic.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-aqua-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-body">Accès à l'ensemble de votre portefeuille de copropriétés</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-aqua-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-body">
                        Configuration des paramètres du cabinet et des utilisateurs
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-aqua-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-body">
                        Accès rapide aux identifiants et liens vers les copropriétés
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="text-sm text-blue-zodiac font-medium font-body">Lien : https://syndic.copromatic.com/</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-8 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orangey-yellow/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-orangey-yellow/20 rounded-full flex items-center justify-center mr-4 transition-transform duration-300 group-hover:scale-110">
                    <Building className="w-8 h-8 text-orangey-yellow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-zodiac font-heading">L'App Copromatic</h3>
                    <p className="text-gray-600 font-body">Un espace dédié par copropriété</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 font-body">
                  Chaque copropriété possède un nom, un identifiant unique et un espace de travail dédié. L'App Copromatic
                  vous permet de visualiser et de travailler exclusivement sur une copropriété à la fois, sans mélanger
                  les données.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orangey-yellow mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-body">
                        Interface dédiée à chaque copropriété avec ses propres données
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orangey-yellow mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-body">
                        Gestion administrative, comptable et réglementaire complète
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orangey-yellow mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-body">
                        Accès via l'identifiant unique ou le nom de la copropriété
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="text-sm text-blue-zodiac font-medium font-body">
                  Exemple : https://app-v2.copromatic.com/sdc-les-lilas/
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-zodiac font-heading">La Copromatic Suite</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Répertomatic</h3>
                  <p className="text-gray-600 mb-4 font-body">
                    Outil dédié à la mise à jour des contacts et à la gestion du répertoire
                  </p>
                  <div className="flex items-center text-sm text-blue-zodiac font-medium">
                    <CheckCircle className="w-4 h-4 mr-2 text-aqua-green" />
                    <span className="font-body">Développé par Copromatic</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Dépomatic</h3>
                  <p className="text-gray-600 mb-4 font-body">
                    Outil dédié à la préparation des mandats de prélèvement bancaire
                  </p>
                  <div className="flex items-center text-sm text-blue-zodiac font-medium">
                    <CheckCircle className="w-4 h-4 mr-2 text-aqua-green" />
                    <span className="font-body">Développé par Copromatic</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Automatic</h3>
                  <p className="text-gray-600 mb-4 font-body">
                    Automatisation des rapprochements bancaires et saisie des opérations de trésorerie
                  </p>
                  <div className="flex items-center text-sm text-blue-zodiac font-medium">
                    <CheckCircle className="w-4 h-4 mr-2 text-aqua-green" />
                    <span className="font-body">Développé par Copromatic</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Cheatlist</h3>
                  <p className="text-gray-600 mb-4 font-body">
                    Outil pour créer de la comptabilité rapidement et efficacement
                  </p>
                  <div className="flex items-center text-sm text-blue-zodiac font-medium">
                    <CheckCircle className="w-4 h-4 mr-2 text-aqua-green" />
                    <span className="font-body">Développé par Copromatic</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2 text-blue-zodiac font-heading">mAGic</h3>
                  <p className="text-gray-600 mb-4 font-body">
                    Outil dédié à la tenue des AGs en visio, mixte ou présentiel avec saisie des votes
                  </p>
                  <div className="flex items-center text-sm text-blue-zodiac font-medium">
                    <CheckCircle className="w-4 h-4 mr-2 text-aqua-green" />
                    <span className="font-body">Développé par Copromatic</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-mango-tango/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mango-tango/10 text-mango-tango transition-transform duration-300 group-hover:scale-110">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2 text-blue-zodiac font-heading">CoproScan</h3>
                  <p className="text-gray-600 mb-4 font-body">
                    Outil d'OCR des factures entrantes pour automatiser la saisie
                  </p>
                  <div className="flex items-center text-sm text-blue-zodiac font-medium">
                    <CheckCircle className="w-4 h-4 mr-2 text-mango-tango" />
                    <span className="font-body">Développé par CoproService</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-zodiac/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-zodiac/10 text-blue-zodiac transition-transform duration-300 group-hover:scale-110">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Coffre-fort numérique</h3>
                  <p className="text-sm text-gray-600 font-body">
                    Archive tout ce que vous générez chez Copromatic et tout ce que vous y déposez
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Bancomatic</h3>
                <p className="text-sm text-gray-600 font-body">
                  Service de récupération automatique des transactions bancaires
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orangey-yellow/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orangey-yellow/10 text-orangey-yellow transition-transform duration-300 group-hover:scale-110">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Refacturation intégrée</h3>
                  <p className="text-sm text-gray-600 font-body">
                    Service de refacturation de vos honoraires, frais postaux, vacations
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-mango-tango/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mango-tango/10 text-mango-tango transition-transform duration-300 group-hover:scale-110">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Académie Copromatic</h3>
                <p className="text-sm text-gray-600 font-body">
                  Disponible jours et nuits pour vous former et vous informer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-16 bg-lavender-mist/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">
              Services inclus pour les gestionnaires
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Des services intégrés pour soulager les gestionnaires occupés et optimiser votre temps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-zodiac/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-zodiac/10 text-blue-zodiac transition-transform duration-300 group-hover:scale-110">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Service d'envoi de courriel</h3>
                <p className="text-sm text-gray-600 font-body">
                  Pour tous les courriers générés sur l'App, envoyez-les directement par email
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Service d'impression et d'envoi</h3>
                <p className="text-sm text-gray-600 font-body">
                  Impression, mise sous pli et envoi de courrier postal simple et recommandé
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orangey-yellow/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orangey-yellow/10 text-orangey-yellow transition-transform duration-300 group-hover:scale-110">
                  <PenTool className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Signature électronique (Paraf)</h3>
                <p className="text-sm text-gray-600 font-body">
                  Service intégré pour la signature électronique de vos documents
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-mango-tango/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mango-tango/10 text-mango-tango transition-transform duration-300 group-hover:scale-110">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Avis électroniques</h3>
                <p className="text-sm text-gray-600 font-body">
                  Service d'envoi d'avis électroniques pour vos communications
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-zodiac/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-zodiac/10 text-blue-zodiac transition-transform duration-300 group-hover:scale-110">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Coffre-fort numérique</h3>
                <p className="text-sm text-gray-600 font-body">
                  Archive tout ce que vous générez chez Copromatic et tout ce que vous y déposez
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Bancomatic</h3>
              <p className="text-sm text-gray-600 font-body">
                Service de récupération automatique des transactions bancaires
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orangey-yellow/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orangey-yellow/10 text-orangey-yellow transition-transform duration-300 group-hover:scale-110">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Refacturation intégrée</h3>
                <p className="text-sm text-gray-600 font-body">
                  Service de refacturation de vos honoraires, frais postaux, vacations
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-zodiac/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-zodiac/10 text-blue-zodiac transition-transform duration-300 group-hover:scale-110">
                  <Headphones className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Équipe Support dédiée</h3>
                <p className="text-sm text-gray-600 font-body">
                  Pour vous accompagner dans votre quotidien et prendre le relais si besoin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personnalisation et marque blanche */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-light-apricot text-blue-zodiac font-body">Personnalisation avancée</Badge>
              <h2 className="text-3xl font-bold mb-6 text-blue-zodiac font-heading">Votre marque, votre identité</h2>
              <p className="text-lg text-gray-700 mb-6 font-body">
                Copromatic s'adapte à votre identité visuelle et vous permet de personnaliser entièrement l'expérience
                de vos clients.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Marque blanche complète</h4>
                    <p className="text-gray-600 font-body">
                      Personnalisez l'interface avec vos couleurs, logo et charte graphique
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Nom de domaine personnalisé</h4>
                    <p className="text-gray-600 font-body">
                      Utilisez votre propre nom de domaine pour un accès transparent
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Gestion des emails</h4>
                    <p className="text-gray-600 font-body">
                      Envoyez des communications depuis votre propre adresse email
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Production documentaire brandée</h4>
                    <p className="text-gray-600 font-body">
                      Tous les documents générés respectent votre identité visuelle
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">API pour personnaliser vos outils</h4>
                    <p className="text-gray-600 font-body">
                      Intégrez Copromatic à vos propres outils grâce à notre API ouverte
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/contact-rdv">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-aqua-green hover:bg-aqua-green/90 text-white font-body">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 border-4 border-blue-zodiac rounded-2xl shadow-[6px_6px_0px_#DDE7F5] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#DDE7F5]">
                <Globe className="w-10 h-10 text-aqua-green mb-4" />
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Nom de domaine</h3>
                <p className="text-sm text-gray-600 font-body">syndic.votreentreprise.com</p>
              </div>
              <div className="p-6 border-4 border-blue-zodiac rounded-2xl shadow-[6px_6px_0px_#DDE7F5] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#DDE7F5]">
                <Mail className="w-10 h-10 text-orangey-yellow mb-4" />
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Emails</h3>
                <p className="text-sm text-gray-600 font-body">contact@votreentreprise.com</p>
              </div>
              <div className="p-6 border-4 border-blue-zodiac rounded-2xl shadow-[6px_6px_0px_#DDE7F5] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#DDE7F5]">
                <Palette className="w-10 h-10 text-mango-tango mb-4" />
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Charte graphique</h3>
                <p className="text-sm text-gray-600 font-body">Vos couleurs, votre logo</p>
              </div>
              <div className="p-6 border-4 border-blue-zodiac rounded-2xl shadow-[6px_6px_0px_#DDE7F5] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#DDE7F5]">
                <Code className="w-10 h-10 text-blue-zodiac mb-4" />
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">API</h3>
                <p className="text-sm text-gray-600 font-body">Intégration personnalisée</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Datacopro */}
      <section className="py-16 bg-gradient-to-r from-light-apricot/30 to-lavender-mist/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl border-4 border-blue-zodiac p-8 shadow-[8px_8px_0px_#02DDBF]">
                <Server className="w-16 h-16 text-blue-zodiac mx-auto mb-6" />
                <h3 className="text-xl font-bold text-center mb-4 text-blue-zodiac font-heading">Datacopro</h3>
                <p className="text-gray-700 mb-6 font-body">
                  Base de données autonome qui héberge, sécurise et met à disposition toutes les données de vos
                  copropriétés : contacts, contrats, factures, écritures comptables, archives, avis de mutation...
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-lavender-mist/30 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-zodiac mb-2 font-heading">Interopérabilité</h4>
                    <p className="text-sm text-gray-600 font-body">
                      Données accessibles via API pour intégration avec d'autres outils
                    </p>
                  </div>
                  <div className="bg-lavender-mist/30 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-zodiac mb-2 font-heading">Sécurité</h4>
                    <p className="text-sm text-gray-600 font-body">
                      Données hébergées en France avec sauvegardes régulières
                    </p>
                  </div>
                  <div className="bg-lavender-mist/30 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-zodiac mb-2 font-heading">Portabilité</h4>
                    <p className="text-sm text-gray-600 font-body">
                      Export facile des données en cas de changement de prestataire
                    </p>
                  </div>
                  <div className="bg-lavender-mist/30 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-zodiac mb-2 font-heading">Conformité RGPD</h4>
                    <p className="text-sm text-gray-600 font-body">
                      Traitement des données conforme aux réglementations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-aqua-green text-white font-body">Architecture des données</Badge>
              <h2 className="text-3xl font-bold mb-6 text-blue-zodiac font-heading">
                Datacopro : vos données sécurisées et interopérables
              </h2>
              <p className="text-lg text-gray-700 mb-6 font-body">
                Chez Copromatic, nous avons créé des outils où les données du syndicat sont interopérables : elles sont
                hébergées, sécurisées et mises à votre disposition depuis une base de données autonome appelée
                Datacopro.
              </p>
              <p className="text-lg text-gray-700 mb-6 font-body">
                Les données brutes sont accessibles via une API et peuvent être partagées facilement avec des tiers si
                besoin, notamment lors d'un changement de mandat où elles doivent être exportées et transmises à un·e
                confrère·soeur.
              </p>
              <Link href="/contact-rdv">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-mango-tango hover:bg-mango-tango/90 text-white font-body">
                  Découvrir l'architecture technique
                  <ArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 cta-section text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Prêt à transformer votre gestion de copropriété ?</h2>
          <p className="text-xl mb-8 opacity-90 font-body">
            Rejoignez les centaines de syndics qui font confiance à Copromatic
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-rdv">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-mango-tango hover:bg-mango-tango/90 text-white font-body">
                Demander une démo
              </button>
            </Link>
            <Link href="/contact-rdv">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-body">
                Être recontacté·e
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-zodiac text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/images/logo-header.png" alt="Copromatic" className="h-8 w-auto" />
              </div>
              <p className="text-gray-300 font-body">La plateforme complète des syndics professionnels</p>
            </div>
            <div>
              <h3 className="font-bold mb-4 font-heading">Solutions</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/solutions" className="hover:text-white font-body transition-colors text-lavender-mist">
                    Plateforme métier
                  </Link>
                </li>
                <li>
                  <Link href="/equipes" className="hover:text-white font-body transition-colors text-lavender-mist">
                    Équipes & Services
                  </Link>
                </li>
                <li>
                  <Link href="/academie" className="hover:text-white font-body transition-colors text-lavender-mist">
                    Formations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 font-heading">Ressources</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white font-body transition-colors text-lavender-mist">
                    Centre d'aide
                  </a>
                </li>
                <li>
                  <Link href="/api" className="hover:text-white font-body transition-colors text-lavender-mist">
                    API Documentation
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-body transition-colors text-lavender-mist">
                    Blog
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.welcometothejungle.com/fr/companies/copromatic" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white font-body transition-colors text-lavender-mist"
                  >
                    Recrutement
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 font-heading">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="font-body text-lavender-mist">support@copromatic.com</li>
                <li className="font-body text-lavender-mist">01 23 45 67 89</li>
                <li>
                  <a href="#" className="hover:text-white font-body transition-colors text-lavender-mist">
                    Politique RGPD
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          </div>
        </div>
      </footer>
    </div>
  )
}
