"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Users,
  BookOpen,
  Headphones,
  Code,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Zap,
  Target,
  Globe,
  Palette,
  Mail,
  Linkedin,
  Twitter,
  ChevronDown,
  Settings,
  DollarSign,
  Phone,
  Award,
  TrendingUp,
  ExternalLink,
  Building,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import { useState } from "react"

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqItems = [
    {
      question: "À qui s'adresse Copromatic ?",
      answer: "Aux syndics professionnels, aux gestionnaires indépendants, aux cabinets en croissance, et à toutes les structures qui souhaitent moderniser leur organisation sans complexifier leur quotidien."
    },
    {
      question: "Peut-on impliquer les conseils syndicaux via la plateforme ?",
      answer: "Oui. Les conseils syndicaux peuvent accéder à un extranet dédié, leur permettant de suivre les données comptables, les documents importants, tout en gardant un historique clair."
    },
    {
      question: "Et en cas de question, quel support est proposé ?",
      answer: "Copromatic met à votre disposition un accompagnement complet et basé en France, via plusieurs canaux : hotline téléphonique pour une assistance directe, support par email pour les demandes plus détaillées, et chat intégré à la plateforme pour des réponses rapides et efficaces. En complément, une base de connaissance en ligne est accessible 24h/24, avec des articles, guides pratiques et procédures pas à pas. Notre académie propose également des parcours de formation thématiques (assemblées générales, relances, carnet d'entretien…), en e-learning ou en sessions live."
    },
    {
      question: "Est-ce que la migration depuis un autre logiciel est compliquée ?",
      answer: "Non. Nous avons mis en place un accompagnement personnalisé à la migration, avec récupération des données essentielles et limitation des ressaisies. C'est une priorité, car nous savons que la migration est l'un des principaux freins identifiés par les gestionnaires."
    },
    {
      question: "Quel est le niveau de sécurité de vos solutions ?",
      answer: "La sécurité est notre priorité. Nos solutions sont hébergées en France, conformes au RGPD, avec des sauvegardes régulières et un chiffrement des données. Nous proposons également des fonctionnalités de signature électronique et de coffre-fort numérique pour une gestion sécurisée de vos documents."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100">
              Plateforme complète pour syndics professionnels
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Le logiciel qui <span className="text-aqua-green">équipe</span> et{" "}
              <span className="text-aqua-green">forme</span> les syndics professionnels
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-zodiac mb-4 font-heading">Les 3 volets de notre succès</h2>
            <p className="text-xl text-gray-600 font-body">Découvrez notre approche complète pour une gestion performante</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-gray-200 rounded-xl hover:border-blue-zodiac transition-colors duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-lavender-mist rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-zodiac" />
                </div>
                <h3 className="text-xl font-bold text-blue-zodiac mb-3 font-heading">Logiciel métier</h3>
                <p className="text-gray-600 mb-6 font-body">
                  AG, comptabilité, appels de fonds, mutations... Tous vos outils en un seul endroit.
                </p>
                <div className="flex items-center justify-center text-aqua-green font-medium font-body">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  <span>En savoir plus</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border border-gray-200 rounded-xl hover:border-blue-zodiac transition-colors duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-light-apricot rounded-full flex items-center justify-center mx-auto mb-6">
                  <Headphones className="w-8 h-8 text-blue-zodiac" />
                </div>
                <h3 className="text-xl font-bold text-blue-zodiac mb-3 font-heading">Accompagnement humain</h3>
                <p className="text-gray-600 mb-6 font-body">
                  Support réactif, équipe migration dédiée, service de sous-traitance disponible.
                </p>
                <div className="flex items-center justify-center text-aqua-green font-medium font-body">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  <span>En savoir plus</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border border-gray-200 rounded-xl hover:border-blue-zodiac transition-colors duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-lavender-mist rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-blue-zodiac" />
                </div>
                <h3 className="text-xl font-bold text-blue-zodiac mb-3 font-heading">Académie de formation</h3>
                <p className="text-gray-600 mb-6 font-body">
                  Formations structurées, quiz, parcours personnalisés pour faire progresser vos équipes.
                </p>
                <div className="flex items-center justify-center text-aqua-green font-medium font-body">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  <span>En savoir plus</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Section */}
      <section className="py-16 bg-white">
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
                  <span className="text-gray-600 font-body">& assurances</span>
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

      {/* Support Section */}
      <section id="accompagnement" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Une équipe métier à vos côtés</h2>
            <p className="text-xl text-slate-600">Pas qu'un simple support technique, une vraie expertise syndic</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Migration sécurisée</h3>
                <p className="text-slate-600 text-sm">
                  Reprise comptable, documentaire et suivi jusqu'à votre première clôture
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Support réactif</h3>
                <p className="text-slate-600 text-sm">Équipe interne basée en France, spécialisée syndic, multicanal</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Développements continus</h3>
                <p className="text-slate-600 text-sm">Fonctionnalités co-construites, mises à jour régulières</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Sous-traitance</h3>
                <p className="text-slate-600 text-sm">Service de sous-traitance comptable disponible</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Un modèle tarifaire simple et transparent</h2>
            <p className="text-xl text-slate-600">Payez uniquement en fonction de votre portefeuille, sans surprise</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Pricing Model Explanation */}
            <Card className="border-0 shadow-xl mb-12 bg-white">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">€</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Tarification basée sur votre portefeuille</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Un modèle économique transparent qui s'adapte à la taille de votre cabinet. Plus vous gérez de lots,
                  plus le coût unitaire diminue.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-800 mb-2">Tout inclus</div>
                    <p className="text-sm text-slate-600">Toutes les fonctionnalités, support, formation</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-800 mb-2">Sans engagement</div>
                    <p className="text-sm text-slate-600">Résiliable à tout moment, facturation mensuelle</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-800 mb-2">Évolutif</div>
                    <p className="text-sm text-slate-600">S'adapte automatiquement à votre croissance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Examples */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-slate-200 hover:border-blue-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-slate-500 text-sm mb-2">Cabinet débutant</div>
                  <div className="text-3xl font-bold text-slate-800 mb-4">500 lots</div>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    Sur devis<span className="text-lg text-slate-500"></span>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Plateforme complète</li>
                    <li>• Migration incluse</li>
                    <li>• Support prioritaire</li>
                    <li>• Formation équipe</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-300 bg-blue-50 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white">Le plus populaire</Badge>
                </div>
                <CardContent className="p-6 text-center">
                  <div className="text-slate-500 text-sm mb-2">Cabinet établi</div>
                  <div className="text-3xl font-bold text-slate-800 mb-4">2 000 lots</div>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    Sur devis<span className="text-lg text-slate-500"></span>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Tout inclus</li>
                    <li>• API & intégrations</li>
                    <li>• Account manager dédié</li>
                    <li>• Développements sur mesure</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200 hover:border-blue-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-slate-500 text-sm mb-2">Groupe / Réseau</div>
                  <div className="text-3xl font-bold text-slate-800 mb-4">5 000+ lots</div>
                  <div className="text-2xl font-bold text-blue-600 mb-4">Sur mesure</div>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Tarifs dégressifs</li>
                    <li>• Multi-agences</li>
                    <li>• Intégration SI</li>
                    <li>• Support 24/7</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* What's Included */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Inclus dans tous les forfaits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-700">Migration complète prise en charge</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-700">Formation illimitée sur l'Académie</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-700">Support technique réactif</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-700">Mises à jour automatiques</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-700">Sauvegarde et sécurité</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-700">Accès API Datacopro</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-700">Espace copropriétaire inclus</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-700">Conformité réglementaire</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-12">
              <p className="text-slate-600 mb-6">
                Besoin d'un devis personnalisé ? Notre équipe commerciale vous accompagne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Demander un devis
                </Button>
                <Button size="lg" variant="outline">
                  Calculer mes économies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section id="academie" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Académie Copromatic</Badge>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Formez vos équipes, en toute autonomie</h2>
              <p className="text-xl text-slate-600 mb-8">
                Cours interactifs courts, quiz et vidéos. Parcours par profil : assistant·e, gestionnaire, direction.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-slate-700">Parcours personnalisés par métier</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-slate-700">Suivi des progrès en temps réel</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-slate-700">Plateforme collaborative MeltingSpot</span>
                </div>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Découvrir l'Académie
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Interface Académie Copromatic"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* API & Ecosystem */}
      <section id="api" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Copromatic, une plateforme ouverte</h2>
            <p className="text-xl text-slate-600">API Datacopro et écosystème d'intégrations natives</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">API Datacopro</h3>
              <p className="text-slate-600 mb-6">
                Documentation claire, endpoints disponibles, mises à jour en continu. Interconnexion possible avec vos
                outils internes (BI, CRM, facturation).
              </p>
              <Button variant="outline" className="mb-8">
                <ExternalLink className="w-4 h-4 mr-2" />
                Consulter la documentation
              </Button>
            </div>
            <div className="bg-slate-800 text-white p-6 rounded-xl">
              <pre className="text-sm overflow-x-auto">
                {`// Exemple d'utilisation API Datacopro
const response = await fetch('/api/syndics', {
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json'
  }
});

const syndics = await response.json();`}
              </pre>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Bancomatic", desc: "Intégration bancaire" },
              { name: "Depomatic", desc: "Gestion SEPA" },
              { name: "CoproScan", desc: "OCR factures" },
              { name: "CoproPay", desc: "Solutions de paiement" },
              { name: "AG Magic", desc: "Vote & AG digitales" },
              { name: "Votre outil", desc: "Intégration sur mesure" },
            ].map((integration, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-slate-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-1">{integration.name}</h4>
                  <p className="text-sm text-slate-600">{integration.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <Badge className="mb-3 bg-light-apricot text-blue-zodiac hover:bg-light-apricot font-body">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Questions Fréquentes</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-300">
                <div 
                  className="flex justify-between items-center cursor-pointer py-6"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-medium text-gray-800 font-body">{item.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </div>
                {openFaq === index && (
                  <div className="pb-6">
                    <p className="text-gray-600 font-body">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrousel de logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden">
            <div className="flex animate-marquee space-x-8">
              {[
                { src: "/Logo-clients/my-syndic-paris-logo.png", alt: "My Syndic Paris" },
                { src: "/Logo-clients/logis_gest_srl_bv_logo.jpeg", alt: "Logis Gest" },
                { src: "/Logo-clients/Logo-APPIA-IMMOBILIER-couleurs.png", alt: "Appia Immobilier" },
                { src: "/Logo-clients/Aubry+gestion+logo.png", alt: "Aubry Gestion" },
                { src: "/Logo-clients/logo-arpenterre.png", alt: "Arpenterre" },
                { src: "/Logo-clients/immo-valley-logo_ce90ae25d_3bd9eaf066096e270b2ea7c549d9bbc4.jpg", alt: "Immo Valley" },
              ].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-24 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
                  <img src={logo.src} alt={logo.alt} className="h-12 w-auto transition-all" />
                </div>
              ))}
              {/* Duplication des logos pour l'effet infini */}
              {[
                { src: "/Logo-clients/my-syndic-paris-logo.png", alt: "My Syndic Paris" },
                { src: "/Logo-clients/logis_gest_srl_bv_logo.jpeg", alt: "Logis Gest" },
                { src: "/Logo-clients/Logo-APPIA-IMMOBILIER-couleurs.png", alt: "Appia Immobilier" },
                { src: "/Logo-clients/Aubry+gestion+logo.png", alt: "Aubry Gestion" },
                { src: "/Logo-clients/logo-arpenterre.png", alt: "Arpenterre" },
                { src: "/Logo-clients/immo-valley-logo_ce90ae25d_3bd9eaf066096e270b2ea7c549d9bbc4.jpg", alt: "Immo Valley" },
              ].map((logo, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-48 h-24 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
                  <img src={logo.src} alt={logo.alt} className="h-12 w-auto transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Témoignages */}
      <section className="py-16 bg-lavender-mist/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-zodiac font-heading">
            "Copromatic a transformé notre façon de travailler"
          </h2>

          {/* Témoignages en 3 blocs */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-aqua-green transition-colors group">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orangey-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 font-body italic">
                "Migration réussie en 3 semaines. L'équipe nous a accompagnés à chaque étape."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-lavender-mist rounded-full mr-4 flex items-center justify-center">
                  <span className="text-blue-zodiac font-bold text-sm">MD</span>
                </div>
                <div>
                  <p className="font-medium text-blue-zodiac font-body">Marie Dubois</p>
                  <p className="text-sm text-gray-500 font-body">Syndic Immobilier Paris</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 hover:border-aqua-green transition-colors group">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orangey-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 font-body italic">
                "Gain de temps de 40% sur nos clôtures comptables grâce à l'automatisation."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-lavender-mist rounded-full mr-4 flex items-center justify-center">
                  <span className="text-blue-zodiac font-bold text-sm">PM</span>
                </div>
                <div>
                  <p className="font-medium text-blue-zodiac font-body">Pierre Martin</p>
                  <p className="text-sm text-gray-500 font-body">Cabinet Gestion Lyon</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 hover:border-aqua-green transition-colors group">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orangey-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 font-body italic">
                "L'Académie a permis à nos équipes de monter rapidement en compétence."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-lavender-mist rounded-full mr-4 flex items-center justify-center">
                  <span className="text-blue-zodiac font-bold text-sm">SL</span>
                </div>
                <div>
                  <p className="font-medium text-blue-zodiac font-body">Sophie Laurent</p>
                  <p className="text-sm text-gray-500 font-body">Directrice Syndic Marseille</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-zodiac text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 font-heading">Copromatic</h3>
              <p className="text-gray-300 mb-4 font-body">
                La plateforme complète pour les syndics professionnels
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-heading">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/plateforme" className="text-gray-300 hover:text-white font-body">
                    Plateforme
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-gray-300 hover:text-white font-body">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/equipes" className="text-gray-300 hover:text-white font-body">
                    Équipes
                  </Link>
                </li>
                <li>
                  <Link href="/accompagnement" className="text-gray-300 hover:text-white font-body">
                    Accompagnement
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-heading">Ressources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white font-body">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="text-gray-300 hover:text-white font-body">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-300 hover:text-white font-body">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-heading">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white font-body">
                    Nous contacter
                  </Link>
                </li>
                <li>
                  <Link href="/contact-rdv" className="text-gray-300 hover:text-white font-body">
                    Demander une démo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-300 font-body">
              © {new Date().getFullYear()} Copromatic. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 