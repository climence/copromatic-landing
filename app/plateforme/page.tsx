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
  Shield,
  Settings,
  Linkedin,
  Twitter,
  Play,
  Download,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function PlateformePage() {
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

      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-12 bg-gradient-to-br from-lavender-mist to-white">
        {/* Background gradient */}
        <div className="relative h-full bg-gradient-to-br from-slate-50 via-white to-cyan-50/30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <Badge className="mb-3 bg-orange-100 text-orange-800 hover:bg-orange-100 px-4 py-2 text-sm font-medium">
              Plateforme Copromatic
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Notre plateforme pour les{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">syndics professionnels</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Découvrez l'écosystème complet Copromatic : une plateforme métier, des logiciels experts et des services dédiés pour faire gagner du temps aux syndics en automatisant les tâches répétitives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Demandez à voir !
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Télécharger le catalogue
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Section */}
      <section className="py-16 mt-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Toutes les fonctionnalités dont vous avez besoin</h2>
            <p className="text-lg text-gray-600 font-body">Une suite complète d'outils métier pour optimiser votre gestion quotidienne</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Colonne 1: Comptabilité */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-lavender-mist rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calculator"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h8"/><path d="M8 18h8"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-zodiac font-heading">Comptabilité</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Clôtures automatisées</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Appels de fonds</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Répartition des charges</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">États financiers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Budgets prévisionnels</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Suivi des impayés</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Rapprochements bancaires</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Export comptable</span>
                </li>
              </ul>
            </div>

            {/* Colonne 2: Gestion */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-light-apricot rounded-full flex items-center justify-center mx-auto mb-6">
                 <Users className="w-8 h-8 text-blue-zodiac" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-zodiac font-heading">Gestion</h3>
              <ul className="space-y-2 text-left">
                 <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Gestion des copropriétaires</span>
                </li>
                 <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Mutations & ventes</span>
                </li>
                 <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Contrats & prestataires</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Travaux & devis</span>
                </li>
                 <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Sinistres & assurances</span>
                </li>
                 <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Documents partagés</span>
                </li>
                 <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Courriers automatiques</span>
                </li>
                 <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Relances personnalisées</span>
                </li>
              </ul>
            </div>

            {/* Colonne 3: Assemblées */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-lavender-mist rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#EEDEF3' }}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale"><path d="m16 16 3-8 3 8c-2.3 0-3.5-.5-6 0z"/><path d="m2 16 3-8 3 8c-2.3 0-3.5-.5-6 0z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-zodiac font-heading">Assemblées</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Convocations automatiques</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Ordres du jour</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Procès-verbaux</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Vote électronique</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Quorum en temps réel</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Pouvoirs dématérialisés</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Diffusion des résultats</span>
                </li>
                 <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Archives numériques</span>
                </li>
              </ul>
            </div>

            {/* Colonne 4: Digital & API */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-light-apricot rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#FEE2CE' }}>
                 <Code className="w-8 h-8 text-blue-zodiac" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-zodiac font-heading">Digital & API</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Espace copropriétaire</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Application mobile</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Paiements en ligne</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">OCR factures</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Signature électronique</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">API ouverte</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Intégrations bancaires</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-2 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Connecteurs métier</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-blue-zodiac hover:bg-blue-zodiac/90 text-white font-bold font-body px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Voir toutes les fonctionnalités
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Vos espaces de travail */}
      <section className="py-20 bg-gradient-to-br from-lavender-mist/40 via-lavender-mist/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-aqua-green text-white font-body">Interface intuitive</Badge>
            <h2 className="text-4xl font-bold mb-6 text-blue-zodiac font-heading">Vos espaces de travail</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Une expérience utilisateur optimisée avec deux interfaces complémentaires pour une gestion efficace
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Espace Pro */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-aqua-green to-blue-zodiac rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-8 border-4 border-aqua-green">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-aqua-green/20 rounded-2xl flex items-center justify-center mr-6">
                    <Briefcase className="w-10 h-10 text-aqua-green" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-zodiac font-heading">L'Espace Pro</h3>
                    <p className="text-gray-600 font-body">Votre cockpit de gestion</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-8 font-body">
                  Votre hub central pour gérer l'ensemble de votre portefeuille. Un espace dédié qui regroupe toutes les données de vos copropriétés et les paramètres de votre cabinet.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-lavender-mist/30 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-zodiac mb-2 font-heading">Vue d'ensemble</h4>
                    <p className="text-sm text-gray-600 font-body">
                      Tableau de bord personnalisable avec KPIs clés
                    </p>
                  </div>
                  <div className="bg-lavender-mist/30 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-zodiac mb-2 font-heading">Configuration</h4>
                    <p className="text-sm text-gray-600 font-body">
                      Paramètres du cabinet et gestion des utilisateurs
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-blue-zodiac font-medium">
                  <Globe className="w-4 h-4 mr-2 text-aqua-green" />
                  <span className="font-body">https://syndic.copromatic.com/</span>
                </div>
              </div>
            </div>
            {/* App Copromatic */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orangey-yellow to-mango-tango rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-8 border-4 border-orangey-yellow">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-orangey-yellow/20 rounded-2xl flex items-center justify-center mr-6">
                    <Building className="w-10 h-10 text-orangey-yellow" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-zodiac font-heading">L'App Copromatic</h3>
                    <p className="text-gray-600 font-body">Interface par copropriété</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-8 font-body">
                  Une interface dédiée pour chaque copropriété, permettant une gestion précise et isolée de toutes les opérations administratives, comptables et réglementaires.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-lavender-mist/30 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-zodiac mb-2 font-heading">Gestion complète</h4>
                    <p className="text-sm text-gray-600 font-body">
                      Toutes les fonctionnalités pour une copropriété
                    </p>
                  </div>
                  <div className="bg-lavender-mist/30 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-zodiac mb-2 font-heading">Navigation simple</h4>
                    <p className="text-sm text-gray-600 font-body">
                      Accès rapide via identifiant unique
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-blue-zodiac font-medium">
                  <Globe className="w-4 h-4 mr-2 text-orangey-yellow" />
                  <span className="font-body">https://app.copromatic.com/</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La Copromatic Suite */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-mango-tango text-white font-body">Écosystème complet</Badge>
            <h2 className="text-4xl font-bold mb-6 text-blue-zodiac font-heading">La Copromatic Suite</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Une suite d'outils spécialisés pour automatiser vos tâches quotidiennes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Outils développés par Copromatic */}
            <div className="col-span-3">
              <h3 className="text-2xl font-bold mb-8 text-blue-zodiac font-heading">Outils développés par Copromatic</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl feature-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                      <Users className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold mb-2 text-blue-zodiac font-heading">Répertomatic</h4>
                    <p className="text-gray-600 mb-4 font-body">
                      Mise à jour automatique des contacts et gestion du répertoire
                    </p>
                    <div className="flex items-center text-sm text-blue-zodiac font-medium">
                      <CheckCircle className="w-4 h-4 mr-2 text-aqua-green" />
                      <span className="font-body">Développé par Copromatic</span>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl feature-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold mb-2 text-blue-zodiac font-heading">Dépomatic</h4>
                    <p className="text-gray-600 mb-4 font-body">
                      Préparation automatisée des mandats de prélèvement
                    </p>
                    <div className="flex items-center text-sm text-blue-zodiac font-medium">
                      <CheckCircle className="w-4 h-4 mr-2 text-aqua-green" />
                      <span className="font-body">Développé par Copromatic</span>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl feature-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold mb-2 text-blue-zodiac font-heading">Bancomatic</h4>
                    <p className="text-gray-600 mb-4 font-body">
                      Gestion et rapprochement bancaire automatisé.
                    </p>
                    <div className="flex items-center text-sm text-blue-zodiac font-medium">
                      <CheckCircle className="w-4 h-4 mr-2 text-aqua-green" />
                      <span className="font-body">Développé par Copromatic</span>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl feature-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale"><path d="m16 16 3-8 3 8c-2.3 0-3.5-.5-6 0z"/><path d="m2 16 3-8 3 8c-2.3 0-3.5-.5-6 0z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
                    </div>
                    <h4 className="font-bold mb-2 text-blue-zodiac font-heading">mAGic</h4>
                    <p className="text-gray-600 mb-4 font-body">
                      Outil d'assistance pour les Assemblées Générales.
                    </p>
                    <div className="flex items-center text-sm text-blue-zodiac font-medium">
                      <CheckCircle className="w-4 h-4 mr-2 text-aqua-green" />
                      <span className="font-body">Développé par Copromatic</span>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl feature-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                      <PenTool className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold mb-2 text-blue-zodiac font-heading">Paraf</h4>
                    <p className="text-gray-600 mb-4 font-body">
                      Solution de signature électronique intégrée.
                    </p>
                    <div className="flex items-center text-sm text-blue-zodiac font-medium">
                      <CheckCircle className="w-4 h-4 mr-2 text-aqua-green" />
                      <span className="font-body">Développé par Copromatic</span>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl feature-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold mb-2 text-blue-zodiac font-heading">Automatic</h4>
                    <p className="text-gray-600 mb-4 font-body">
                      Automatisation de tâches diverses.
                    </p>
                    <div className="flex items-center text-sm text-blue-zodiac font-medium">
                      <CheckCircle className="w-4 h-4 mr-2 text-aqua-green" />
                      <span className="font-body">Développé par Copromatic</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outils partenaires */}
            <div className="col-span-3 mt-12">
              <h3 className="text-2xl font-bold mb-8 text-blue-zodiac font-heading">Outils partenaires</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-mango-tango/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mango-tango/10 text-mango-tango transition-transform duration-300 group-hover:scale-110">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold mb-2 text-blue-zodiac font-heading">CoproScan</h4>
                    <p className="text-gray-600 mb-4 font-body">
                      OCR intelligent pour la saisie automatique des factures
                    </p>
                    <div className="flex items-center text-sm text-blue-zodiac font-medium">
                      <CheckCircle className="w-4 h-4 mr-2 text-mango-tango" />
                      <span className="font-body">Développé par CoproService</span>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-6 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-mango-tango/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mango-tango/10 text-mango-tango transition-transform duration-300 group-hover:scale-110">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold mb-2 text-blue-zodiac font-heading">CoproPay</h4>
                    <p className="text-gray-600 mb-4 font-body">
                      Paiement en ligne sécurisé des charges de copropriété
                    </p>
                    <div className="flex items-center text-sm text-blue-zodiac font-medium">
                      <CheckCircle className="w-4 h-4 mr-2 text-mango-tango" />
                      <span className="font-body">Développé par CoproService</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-20 bg-gradient-to-br from-lavender-mist/40 via-lavender-mist/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-zodiac text-white font-body">Services intégrés</Badge>
            <h2 className="text-4xl font-bold mb-6 text-blue-zodiac font-heading">Services inclus pour les gestionnaires</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              Des services complémentaires pour optimiser votre temps et améliorer votre productivité
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-8 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-zodiac/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-zodiac/10 text-blue-zodiac transition-transform duration-300 group-hover:scale-110">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-zodiac font-heading">Communication</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 flex-shrink-0" />
                    <span className="text-gray-600 font-body">Envoi de courriels automatisé</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 flex-shrink-0" />
                    <span className="text-gray-600 font-body">Service d'impression et d'envoi postal</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 flex-shrink-0" />
                    <span className="text-gray-600 font-body">Avis électroniques</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-8 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-aqua-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-aqua-green/10 text-aqua-green transition-transform duration-300 group-hover:scale-110">
                  <Lock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-zodiac font-heading">Sécurité</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-aqua-green mt-1 flex-shrink-0" />
                    <span className="text-gray-600 font-body">Coffre-fort numérique</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-aqua-green mt-1 flex-shrink-0" />
                    <span className="text-gray-600 font-body">Signature électronique (Paraf)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-aqua-green mt-1 flex-shrink-0" />
                    <span className="text-gray-600 font-body">Archivage sécurisé</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-lavender-mist p-8 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orangey-yellow/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orangey-yellow/10 text-orangey-yellow transition-transform duration-300 group-hover:scale-110">
                  <Headphones className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-zodiac font-heading">Support</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orangey-yellow mt-1 flex-shrink-0" />
                    <span className="text-gray-600 font-body">Équipe Support dédiée</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orangey-yellow mt-1 flex-shrink-0" />
                    <span className="text-gray-600 font-body">Formation continue</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orangey-yellow mt-1 flex-shrink-0" />
                    <span className="text-gray-600 font-body">Centre d'aide en ligne</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personnalisation avancée */}
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
              <Link href="/contact">
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
              <Link href="/contact">
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
      <section className="py-16 bg-blue-zodiac/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Prêt à transformer votre gestion de copropriété ?</h2>
          <p className="text-xl mb-8 opacity-90 font-body">
            Rejoignez les centaines de syndics qui font confiance à Copromatic
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-mango-tango hover:bg-mango-tango/90 text-white font-body">
                Demander une démo
              </button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-body">
                Être recontacté·e
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 