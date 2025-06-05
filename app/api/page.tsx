"use client"

import { Badge } from "@/components/ui/badge"
import {
  Code,
  ArrowRight,
  Server,
  Database,
  Lock,
  Zap,
  FileText,
  CheckCircle,
  Shield,
  Play,
  Download,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function APIPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 bg-gradient-to-br from-lavender-mist to-white">
        {/* Background gradient */}
        <div className="relative h-full bg-gradient-to-br from-slate-50 via-white to-cyan-50/30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <Badge className="mb-3 bg-orange-100 text-orange-800 hover:bg-orange-100 px-4 py-2 text-sm font-medium">
              API Copromatic
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-3 leading-tight">
              Intégrez nos services{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">à votre système</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Une API RESTful complète pour intégrer nos services à votre système d'information.
              Documentation détaillée, exemples de code et support technique.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center items-center">
              <a 
                href="https://api.copromatic.com/swagger" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & Intégrations */}
      <section className="py-16 mt-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <Badge className="mb-4 mt-0 bg-aqua-green text-white font-body rounded-full">Architecture</Badge>
              <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">
                Une architecture ouverte et évolutive
              </h2>
              <p className="text-xl text-gray-700 font-body mb-8">
                Connectez vos outils métier à Copromatic grâce à notre API RESTful
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">API RESTful</h4>
                    <p className="text-gray-600 font-body">
                      Documentation interactive avec tests en direct et exemples de code
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Webhooks</h4>
                    <p className="text-gray-600 font-body">
                      Authentification OAuth 2.0 avec HTTPS obligatoire et rate limiting
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">SDKs</h4>
                    <p className="text-gray-600 font-body">
                      Temps de réponse optimal avec 99.9% uptime et mise en cache intelligente
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Support technique</h4>
                    <p className="text-gray-600 font-body">
                      Un groupe Slack dédié aux support des clients techniques
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg -mt-8">
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-gray-800">
                  {`// Exemple d'utilisation de l'API Datacopro
const response = await fetch('https://api.datacopro.org/v1/coproprietes/12345/factures', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    montant: 1500.00,
    date: '2024-03-20',
    fournisseur: 'Ascenseurs Express',
    description: 'Maintenance trimestrielle',
    categorie: 'ascenseur'
  })
});

const facture = await response.json();`}
                </code>
              </pre>
            </div>
          </div>

          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold mb-6 text-blue-zodiac font-heading">Exemples d'intégrations existantes</h3>
            <p className="text-xl text-gray-700 font-body mb-8">
              Découvrez les intégrations déjà disponibles pour enrichir votre expérience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 bg-white/50 p-8 rounded-2xl">
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-blue-zodiac/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-zodiac/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="w-full h-48 bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
                  <img src="/api-exemples/bancomatic.png" alt="Exemple d'intégration Bancomatic" className="w-full h-full object-cover rounded-xl" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-blue-zodiac font-heading text-center group-hover:text-blue-zodiac/90 transition-colors">Bancomatic</h4>
                <p className="text-gray-600 font-body mb-6">
                  Synchronisation automatique des opérations bancaires avec la comptabilité de copropriété
                </p>
                <ul className="text-sm text-gray-600 space-y-3 mb-4">
                  <li className="flex items-center group/item">
                    <div className="w-6 h-6 bg-blue-zodiac/10 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-blue-zodiac/20 transition-colors">
                      <CheckCircle className="w-4 h-4 text-blue-zodiac" />
                    </div>
                    <span className="group-hover/item:text-blue-zodiac transition-colors">Synchronisation des relevés bancaires</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-6 h-6 bg-blue-zodiac/10 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-blue-zodiac/20 transition-colors">
                      <CheckCircle className="w-4 h-4 text-blue-zodiac" />
                    </div>
                    <span className="group-hover/item:text-blue-zodiac transition-colors">Passerelles bancaires redondantes</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-6 h-6 bg-blue-zodiac/10 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-blue-zodiac/20 transition-colors">
                      <CheckCircle className="w-4 h-4 text-blue-zodiac" />
                    </div>
                    <span className="group-hover/item:text-blue-zodiac transition-colors">Détection des anomalies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-orangey-yellow/20">
              <div className="absolute inset-0 bg-gradient-to-br from-orangey-yellow/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="w-full h-48 bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
                  <img src="/api-exemples/coproscan.png" alt="Exemple d'intégration CoproScan" className="w-full h-full object-cover rounded-xl" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-blue-zodiac font-heading text-center group-hover:text-blue-zodiac/90 transition-colors">CoproScan</h4>
                <p className="text-gray-600 font-body mb-6">
                  Reconnaissance optique de caractères (OCR) pour l'extraction automatique des données de vos factures
                </p>
                <ul className="text-sm text-gray-600 space-y-3 mb-4">
                  <li className="flex items-center group/item">
                    <div className="w-6 h-6 bg-orangey-yellow/10 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-orangey-yellow/20 transition-colors">
                      <CheckCircle className="w-4 h-4 text-orangey-yellow" />
                    </div>
                    <span className="group-hover/item:text-orangey-yellow transition-colors">Extraction automatique des données de factures</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-6 h-6 bg-orangey-yellow/10 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-orangey-yellow/20 transition-colors">
                      <CheckCircle className="w-4 h-4 text-orangey-yellow" />
                    </div>
                    <span className="group-hover/item:text-orangey-yellow transition-colors">Traitement des factures PDF</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-6 h-6 bg-orangey-yellow/10 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-orangey-yellow/20 transition-colors">
                      <CheckCircle className="w-4 h-4 text-orangey-yellow" />
                    </div>
                    <span className="group-hover/item:text-orangey-yellow transition-colors">Injection enrichie vers Datacopro</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-mango-tango/20">
              <div className="absolute inset-0 bg-gradient-to-br from-mango-tango/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="w-full h-48 bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
                  <img src="/api-exemples/mAGic.png" alt="Exemple d'intégration mAGic" className="w-full h-full object-cover rounded-xl" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-blue-zodiac font-heading text-center group-hover:text-blue-zodiac/90 transition-colors">mAGic</h4>
                <p className="text-gray-600 font-body mb-6">
                  Gestion automatisée des assemblées générales et des documents associés
                </p>
                <ul className="text-sm text-gray-600 space-y-3 mb-4">
                  <li className="flex items-center group/item">
                    <div className="w-6 h-6 bg-mango-tango/10 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-mango-tango/20 transition-colors">
                      <CheckCircle className="w-4 h-4 text-mango-tango" />
                    </div>
                    <span className="group-hover/item:text-mango-tango transition-colors">Gestion des assemblées générales</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-6 h-6 bg-mango-tango/10 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-mango-tango/20 transition-colors">
                      <CheckCircle className="w-4 h-4 text-mango-tango" />
                    </div>
                    <span className="group-hover/item:text-mango-tango transition-colors">Authentification et logs</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-6 h-6 bg-mango-tango/10 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-mango-tango/20 transition-colors">
                      <CheckCircle className="w-4 h-4 text-mango-tango" />
                    </div>
                    <span className="group-hover/item:text-mango-tango transition-colors">Suivi des décisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-16 bg-lavender-mist/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-aqua-green text-white font-body">Documentation</Badge>
              <h2 className="text-3xl font-bold mb-6 text-blue-zodiac font-heading">
                Une documentation complète pour démarrer rapidement
              </h2>
              <p className="text-lg text-gray-700 mb-6 font-body">
                Notre équipe technique vous guide pas à pas dans l'intégration de l'API Datacopro. Vous trouverez des exemples de code, des tutoriels et des guides de bonnes pratiques.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Guides d'intégration</h4>
                    <p className="text-gray-600 font-body">
                      Support technique & assistance personnalisée
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Référence API</h4>
                    <p className="text-gray-600 font-body">
                      Documentation de tous les endpoints
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Exemples de code</h4>
                    <p className="text-gray-600 font-body">
                      Exemples concrets d'utilisation de l'API
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Environnements de test</h4>
                    <p className="text-gray-600 font-body">
                      Sandbox dédiée pour tester vos intégrations
                    </p>
                  </div>
                </li>
              </ul>
              <a href="https://swagger.datacopro.org/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-mango-tango hover:bg-mango-tango/90 text-white font-body">
                  Accéder à la documentation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
            <div className="bg-white rounded-2xl border-4 border-blue-zodiac p-8 shadow-[8px_8px_0px_#02DDBF]">
              <Code className="w-16 h-16 text-blue-zodiac mx-auto mb-6" />
              <h3 className="text-xl font-bold text-center mb-4 text-blue-zodiac font-heading">Exemple de requête</h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-gray-800">
                  {`curl -X GET \\
  'https://api.copromatic.com/v1/coproprietes' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json'`}
                </code>
              </pre>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-lavender-mist/30 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-zodiac mb-2 font-heading">Rate Limiting</h4>
                  <p className="text-sm text-gray-600 font-body">
                    1000 requêtes par heure par clé API
                  </p>
                </div>
                <div className="bg-lavender-mist/30 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-zodiac mb-2 font-heading">Format</h4>
                  <p className="text-sm text-gray-600 font-body">
                    JSON pour toutes les réponses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-zodiac/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Prêt à intégrer vos outils ?</h2>
          <p className="text-xl mb-8 opacity-90 font-body">
            Obtenez votre clé API Datacopro et commencez l'intégration dès aujourd'hui
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-mango-tango hover:bg-mango-tango/90 text-white font-body">
                Obtenir une clé API
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