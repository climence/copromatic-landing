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

export default function CopromaticLanding() {
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

          <div className="text-center mt-12">
            <Button size="lg" className="bg-slate-800 hover:bg-slate-700">
              Voir toutes les fonctionnalités
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              "Copromatic a transformé notre façon de travailler"
            </h2>
            <p className="text-xl text-slate-600">Découvrez l'impact concret sur nos clients</p>
          </div>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center mb-16 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src={`/placeholder.svg?height=60&width=120&query=logo cabinet syndic ${i}`}
                  alt={`Client ${i}`}
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Migration réussie en 3 semaines. L'équipe nous a accompagnés à chaque étape.",
                author: "Marie Dubois",
                role: "Syndic Immobilier Paris",
                rating: 5,
              },
              {
                text: "Gain de temps de 40% sur nos clôtures comptables grâce à l'automatisation.",
                author: "Pierre Martin",
                role: "Cabinet Gestion Lyon",
                rating: 5,
              },
              {
                text: "L'Académie a permis à nos équipes de monter rapidement en compétence.",
                author: "Sophie Laurent",
                role: "Directrice Syndic Marseille",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-300 mb-4" />
                  <p className="text-slate-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-slate-600">
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.author}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              <Image
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à transformer votre gestion de syndic ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Rejoignez les centaines de syndics qui font confiance à Copromatic pour optimiser leur gestion quotidienne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-800 hover:bg-slate-100">
              <Play className="w-5 h-5 mr-2" />
              Demander une démo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
              <Phone className="w-5 h-5 mr-2" />
              Être recontacté·e
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-white text-slate-900 px-2 py-1 rounded text-sm font-bold">CO</div>
                <span className="text-xl font-bold">Copromatic</span>
              </div>
              <p className="text-slate-400 mb-4">La plateforme complète pour les syndics professionnels</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Plateforme
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Équipes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Accompagnement
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ressources</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Nous contacter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Demander une démo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Se connecter
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Copromatic. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
