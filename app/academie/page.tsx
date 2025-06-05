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
  MessageSquare,
  Video,
  FileText,
  Calendar,
  Bookmark,
  MessageCircle,
  Newspaper,
  GraduationCap,
  VideoIcon,
  Users2,
  Star,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function AcademiePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-lavender-mist to-white">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100 px-4 py-2 text-sm font-medium">
              Académie Copromatic
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Formez vos équipes{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">efficacement</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Une plateforme complète pour accompagner vos nouveaux collaborateurs et développer les compétences de vos équipes.
              Des parcours personnalisés, une communauté active et des contenus enrichis.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                DÉCOUVRIR LA PLATEFORME
              </Button>
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

      {/* Stats Section */}
      <section className="py-16 mt-16 bg-white">
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

      {/* Parcours par cas d'usage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Parcours de e-learning par cas d'usage</h2>
            <p className="text-xl text-gray-700 font-body">
              Des parcours adaptés à vos besoins spécifiques
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-zodiac/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-zodiac font-heading">Intégration des nouveaux collaborateurs</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Parcours d'intégration</h4>
                    <p className="text-gray-600 font-body">Formation Copromatic sur-mesure pour vos nouveaux recrutements selon leurs postes</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Mentorat</h4>
                    <p className="text-gray-600 font-body">Organisation de travail avec votre cabinet, règles de nomenclatures, habitudes : si nous les connaissons, nous les transmettrons à vos nouveaux arrivants</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Projets pratiques</h4>
                    <p className="text-gray-600 font-body">Efficace dès les premiers cours</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-blue-zodiac/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-zodiac font-heading">Développement des compétences cabinet</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orangey-yellow mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Formation continue</h4>
                    <p className="text-gray-600 font-body">Veille métier et actualités réglementaires</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orangey-yellow mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Soft skills et pratiques vertueuses</h4>
                    <p className="text-gray-600 font-body">Développement des savoir-être et partage de bonnes pratiques</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orangey-yellow mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Harmonisation des méthodes</h4>
                    <p className="text-gray-600 font-body">Standardisation des processus et des outils pour une cohérence des pratiques de travail</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-blue-zodiac/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-zodiac font-heading">Prise en main de postes clés en cabinet</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-mango-tango mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Administration et assistanat gestionnaire</h4>
                    <p className="text-gray-600 font-body">Formation aux fondamentaux de la gestion de portefeuille</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-mango-tango mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Gestionnaire de copropriété</h4>
                    <p className="text-gray-600 font-body">Formation aux outils quotidien et avancés du gestionnaire sur nos plateformes</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-mango-tango mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Responsable comptable</h4>
                    <p className="text-gray-600 font-body">Formation aux outils de contrôle de gestion portefeuille, pointes de trésorerie & audit de garantie financière</p>
                  </div>
                </li>
              </ul>
            </div>
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
                    <h4 className="font-bold text-blue-zodiac font-heading">Collections</h4>
                    <p className="text-gray-600 font-body">
                      Organisez et partagez vos ressources pédagogiques favorites
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Discussions</h4>
                    <p className="text-gray-600 font-body">Échangez avec la communauté et partagez vos expériences</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Blog</h4>
                    <p className="text-gray-600 font-body">Articles et actualités du secteur de la copropriété</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Cours en ligne</h4>
                    <p className="text-gray-600 font-body">Modules interactifs et contenus enrichis</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Lives & Webinaires</h4>
                    <p className="text-gray-600 font-body">Sessions en direct avec des experts du secteur</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-aqua-green mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-zodiac font-heading">Communauté</h4>
                    <p className="text-gray-600 font-body">Réseau de professionnels pour échanger et collaborer</p>
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

      {/* Organisme de formation */}
      <section className="py-16 bg-lavender-mist/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Formations à Copromatic avec Copromatic</h2>
            <p className="text-xl text-gray-700 font-body">
              Une formation professionnelle de qualité pour développer les compétences de vos équipes
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orangey-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-orangey-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-zodiac font-heading text-center">Reconnu Organisme de formation</h3>
              <p className="text-gray-600 font-body text-center mb-6">
                Des parcours adaptés aux besoins des professionnels de la copropriété, avec un accompagnement sur mesure.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orangey-yellow mr-3" />
                  <span className="font-body">Parcours sur-mesure</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orangey-yellow mr-3" />
                  <span className="font-body">Formateurs experts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orangey-yellow mr-3" />
                  <span className="font-body">Évaluation ludiques</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-aqua-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-aqua-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-zodiac font-heading text-center">Certification Qualiopi en cours</h3>
              <p className="text-gray-600 font-body text-center mb-6">
                Nous sommes en cours d'obtention de la certification Qualiopi, garantissant la qualité de nos formations professionnelles.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-aqua-green mr-3" />
                  <span className="font-body">Financement OPCO éligible</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-aqua-green mr-3" />
                  <span className="font-body">Suivi personnalisé</span>
                </li>
              </ul>
            </Card>
          </div>
          <div className="mt-8 max-w-6xl mx-auto space-y-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 border-l-4 border-l-aqua-green">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-orangey-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-zodiac font-heading">Programme de formation</h3>
              <h4 className="text-lg font-medium mb-4 text-blue-zodiac font-heading">Initiation à l'assistance au syndic avec Copromatic</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-blue-zodiac mb-3 font-heading">Public visé</h4>
                  <p className="text-gray-600 mb-6 font-body">
                    Collaborateur débutant dans un cabinet de syndic, en soutien aux gestionnaires de copropriété.
                  </p>
                  <h4 className="font-bold text-blue-zodiac mb-3 font-heading">Objectifs pédagogiques</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 font-body">Comprendre les fondamentaux du métier de syndic</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 font-body">Se repérer dans les obligations légales et les documents de gestion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 font-body">Utiliser Copromatic pour exécuter les tâches clés d'un assistant syndic</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-zodiac mb-3 font-heading">Rythme et accompagnement</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 font-body">Durée estimée : 9 heures sur 3–4 semaines (2–3h/semaine)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 font-body">Accompagnement pédagogique par visio et messagerie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 font-body">Évaluation continue (quiz, manipulation, autoévaluation)</span>
                    </li>
                  </ul>
                  <h4 className="font-bold text-blue-zodiac mb-3 font-heading">Modalités financières</h4>
                  <p className="text-gray-600 mb-6 font-body">
                    Coût total : 2200 € HT<br />
                    Prise en charge possible via OPCO
                  </p>
                </div>
              </div>
              <div className="text-center mt-6 flex gap-4 justify-center">
                <Button className="bg-blue-zodiac hover:bg-blue-zodiac/90 text-white font-body">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger la fiche programme
                </Button>
                <Link href="/contact">
                  <Button className="bg-aqua-green hover:bg-aqua-green/90 text-white font-body">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Adapter ce programme pour moi
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-gray-100 text-card-foreground shadow-sm p-6 border-l-4 border-l-gray-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-orangey-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-zodiac font-heading">Programme de formation</h3>
              <h4 className="text-lg font-medium mb-4 text-blue-zodiac font-heading">Optimisation du poste de gestionnaire avec les automatismes Copromatic (programme en cours d'élaboration)</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-blue-zodiac mb-3 font-heading">Public visé</h4>
                  <p className="text-gray-600/70 mb-6 font-body">
                    Gestionnaire de copropriété expérimenté souhaitant rationaliser ses processus et gagner en efficacité grâce aux automatisations proposées par Copromatic.
                  </p>
                  <h4 className="font-bold text-blue-zodiac mb-3 font-heading">Objectifs pédagogiques</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600/70 font-body">Identifier les axes d'optimisation dans l'exercice quotidien du métier de gestionnaire</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600/70 font-body">Maîtriser les fonctionnalités avancées et automatisations de Copromatic</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600/70 font-body">Réduire la charge administrative en s'appuyant sur les outils de production (AG, appels, relances, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600/70 font-body">Renforcer la conformité et la traçabilité des actions via Copromatic</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-zodiac mb-3 font-heading">Rythme et accompagnement</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600/70 font-body">Durée estimée : 6 heures sur 3 semaines (2–3h/semaine)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600/70 font-body">Accompagnement personnalisé via visio et messagerie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-zodiac mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600/70 font-body">Évaluation continue (cas pratiques, quiz, autoévaluation)</span>
                    </li>
                  </ul>
                  <h4 className="font-bold text-blue-zodiac mb-3 font-heading">Modalités financières</h4>
                  <p className="text-gray-600/70 mb-6 font-body">
                    Coût total : 1800 € HT<br />
                    Prise en charge possible via OPCO
                  </p>
                </div>
              </div>
              <div className="text-center mt-6 flex gap-4 justify-center">
                <Button className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-body">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger la fiche programme
                </Button>
                <Button className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-body">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Adapter ce programme pour moi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-zodiac/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Prêt à développer vos compétences ?</h2>
          <p className="text-xl mb-8 opacity-90 font-body">
            Rejoignez notre communauté de professionnels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-mango-tango hover:bg-mango-tango/90 text-white font-body">
                Demander une démo
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