import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Target,
  TrendingUp,
  Shield,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"

export default function FormationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-light-apricot/30 to-lavender-mist">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-light-apricot text-blue-zodiac hover:bg-light-apricot font-body">
            Académie Copromatic
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-zodiac mb-6 leading-tight font-heading">
            Formez vos équipes aux métiers du <span className="text-aqua-green">syndic professionnel</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto font-body">
            Plateforme de formation dédiée aux syndics : parcours certifiants, modules à la carte, veille réglementaire.
            Développez l'expertise de vos collaborateurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="bg-aqua-green hover:bg-aqua-green/90 text-white font-bold font-body">
                <Play className="w-5 h-5 mr-2" />
                ACCÉDER À L'ACADÉMIE
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-zodiac text-blue-zodiac hover:bg-lavender-mist font-body"
            >
              <Download className="w-5 h-5 mr-2" />
              Télécharger le catalogue
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-aqua-green mb-2">+80</div>
              <p className="text-gray-600 font-body">Modules de formation</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orangey-yellow mb-2">120+</div>
              <p className="text-gray-600 font-body">Professionnels formés</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-zodiac mb-2">24h</div>
              <p className="text-gray-600 font-body">Accès 24h/24</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours de formation */}
      <section className="py-16 bg-lavender-mist/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Parcours de formation par métier</h2>
            <p className="text-xl text-gray-700 font-body">
              Des formations adaptées à chaque niveau et fonction dans votre cabinet
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-t-4 border-t-aqua-green">
              <div className="w-16 h-16 bg-aqua-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-aqua-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-zodiac font-heading text-center">Assistant(e) Syndic</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-3 flex-shrink-0" />
                  <span className="font-body text-sm">Bases de la copropriété</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-3 flex-shrink-0" />
                  <span className="font-body text-sm">Gestion administrative</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-3 flex-shrink-0" />
                  <span className="font-body text-sm">Relation copropriétaires</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-aqua-green mr-3 flex-shrink-0" />
                  <span className="font-body text-sm">Outils Copromatic</span>
                </li>
              </ul>
              <div className="text-center">
                <Badge className="bg-aqua-green/20 text-aqua-green mb-4">15 heures • Certification</Badge>
                <br />
                <Button className="bg-aqua-green hover:bg-aqua-green/90 text-white font-body">
                  Découvrir le parcours
                </Button>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-t-4 border-t-orangey-yellow">
              <div className="w-16 h-16 bg-orangey-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-orangey-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-zodiac font-heading text-center">Gestionnaire Syndic</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orangey-yellow mr-3 flex-shrink-0" />
                  <span className="font-body text-sm">Comptabilité de copropriété</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orangey-yellow mr-3 flex-shrink-0" />
                  <span className="font-body text-sm">Assemblées générales</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orangey-yellow mr-3 flex-shrink-0" />
                  <span className="font-body text-sm">Gestion technique</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orangey-yellow mr-3 flex-shrink-0" />
                  <span className="font-body text-sm">Aspects juridiques</span>
                </li>
              </ul>
              <div className="text-center">
                <Badge className="bg-orangey-yellow/20 text-orangey-yellow mb-4">25 heures • Certification</Badge>
                <br />
                <Button className="bg-blue-zodiac hover:bg-blue-zodiac/90 text-white font-body">
                  Découvrir le parcours
                </Button>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-t-4 border-t-mango-tango">
              <div className="w-16 h-16 bg-mango-tango/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-mango-tango" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-zodiac font-heading text-center">Directeur Syndic</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-mango-tango mr-3 flex-shrink-0" />
                  <span className="font-body text-sm">Management d'équipe</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-mango-tango mr-3 flex-shrink-0" />
                  <span className="font-body text-sm">Développement commercial</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-mango-tango mr-3 flex-shrink-0" />
                  <span className="font-body text-sm">Stratégie digitale</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-mango-tango mr-3 flex-shrink-0" />
                  <span className="font-body text-sm">Conformité réglementaire</span>
                </li>
              </ul>
              <div className="text-center">
                <Badge className="bg-mango-tango/20 text-mango-tango mb-4">20 heures • Certification</Badge>
                <br />
                <Button className="bg-aqua-green hover:bg-aqua-green/90 text-white font-body">
                  Découvrir le parcours
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules à la carte */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Modules de formation à la carte</h2>
            <p className="text-xl text-gray-700 font-body">Complétez vos compétences avec nos modules spécialisés</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Transition énergétique",
                duration: "3h",
                level: "Intermédiaire",
                icon: Lightbulb,
                color: "text-aqua-green",
                bgColor: "bg-aqua-green/20",
              },
              {
                title: "Droit de la copropriété",
                duration: "5h",
                level: "Avancé",
                icon: Shield,
                color: "text-blue-zodiac",
                bgColor: "bg-blue-zodiac/20",
              },
              {
                title: "Comptabilité avancée",
                duration: "4h",
                level: "Expert",
                icon: TrendingUp,
                color: "text-orangey-yellow",
                bgColor: "bg-orangey-yellow/20",
              },
              {
                title: "Gestion de crise",
                duration: "2h",
                level: "Tous niveaux",
                icon: Target,
                color: "text-mango-tango",
                bgColor: "bg-mango-tango/20",
              },
            ].map((module, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${module.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <module.icon className={`w-6 h-6 ${module.color}`} />
                </div>
                <h3 className="font-bold mb-2 text-blue-zodiac font-heading">{module.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {module.duration}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {module.level}
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full font-body">
                  Voir le module
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plateforme de formation */}
      <section className="py-16 bg-gradient-to-r from-light-apricot/30 to-lavender-mist/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-zodiac font-heading">Plateforme MeltingSpot dédiée</h2>
              <p className="text-xl text-gray-700 mb-6 font-body">
                Interface moderne et intuitive pour un apprentissage optimal. Suivez vos progrès, obtenez vos
                certifications, échangez avec la communauté.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Apprentissage adaptatif</h4>
                    <p className="text-gray-600 font-body">
                      Parcours personnalisés selon votre niveau et vos objectifs
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Suivi des progrès</h4>
                    <p className="text-gray-600 font-body">Tableaux de bord détaillés pour managers et apprenants</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Communauté d'experts</h4>
                    <p className="text-gray-600 font-body">Échangez avec d'autres professionnels du secteur</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Certifications reconnues</h4>
                    <p className="text-gray-600 font-body">Validez vos acquis avec des certifications métier</p>
                  </div>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-blue-zodiac hover:bg-blue-zodiac/90 text-white font-body">
                  Demander un accès
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-full h-80 bg-gradient-to-br from-lavender-mist to-light-apricot rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-20 h-20 text-blue-zodiac mx-auto mb-4" />
                    <p className="text-blue-zodiac font-heading font-bold text-lg">Interface MeltingSpot</p>
                    <p className="text-sm text-gray-600 mt-2">Plateforme de formation interactive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veille réglementaire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Veille réglementaire continue</h2>
            <p className="text-xl text-gray-700 font-body">
              Restez informés des évolutions légales et réglementaires du secteur
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-zodiac/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-zodiac" />
              </div>
              <h3 className="font-bold mb-3 text-blue-zodiac font-heading">Alertes réglementaires</h3>
              <p className="text-gray-600 font-body">
                Notifications automatiques des nouvelles réglementations impactant votre activité
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-orangey-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-orangey-yellow" />
              </div>
              <h3 className="font-bold mb-3 text-blue-zodiac font-heading">Webinaires experts</h3>
              <p className="text-gray-600 font-body">
                Sessions mensuelles avec des juristes spécialisés en droit de la copropriété
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-aqua-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-aqua-green" />
              </div>
              <h3 className="font-bold mb-3 text-blue-zodiac font-heading">Documentation</h3>
              <p className="text-gray-600 font-body">
                Fiches pratiques, modèles de documents, guides d'application des nouvelles lois
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 cta-section text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Prêt à transformer votre gestion de copropriété ?</h2>
          <p className="text-xl mb-8 opacity-90 font-body">Rejoignez les centaines de syndics qui font confiance à Copromatic</p>
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
                  <Link href="/" className="hover:text-white font-body transition-colors">
                    Plateforme métier
                  </Link>
                </li>
                <li>
                  <Link href="/equipes" className="hover:text-white font-body transition-colors">
                    Équipes & Services
                  </Link>
                </li>
                <li>
                  <Link href="/formations" className="hover:text-white font-body transition-colors">
                    Formations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 font-heading">Ressources</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white font-body transition-colors">
                    Centre d'aide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-body transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-body transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 font-heading">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="font-body">support@copromatic.com</li>
                <li className="font-body">01 23 45 67 89</li>
                <li>
                  <a href="#" className="hover:text-white font-body transition-colors">
                    Politique RGPD
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p className="font-body">&copy; 2024 Copromatic. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
