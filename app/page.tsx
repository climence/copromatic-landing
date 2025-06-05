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
import { HeroSection } from "@/components/HeroSection"
import { PricingSection } from "@/components/pricing-section"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/Footer"

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
      <HeroSection />

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

      {/* Stats Section */}
      <StatsSection />

      {/* Pricing Section */}
      <PricingSection />

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

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
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
      <section className="py-12 bg-white">
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

      {/* Footer */}
      <Footer />
    </div>
  )
} 