import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Users,
  Award,
  CheckCircle,
  Play,
  Download,
  Target,
  Calendar,
  FileText,
  Video,
  Star,
  ChevronRight,
  User,
  Calculator,
  Scale,
  Home,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"

export default function GestionnaireSyndicPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <section className="py-4 bg-lavender-mist/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-body">
            <Link href="/" className="text-gray-600 hover:text-blue-zodiac">
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/formations" className="text-gray-600 hover:text-blue-zodiac">
              Formations
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-blue-zodiac font-medium">Gestionnaire Syndic</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orangey-yellow/20 to-lavender-mist">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-orangey-yellow text-blue-zodiac hover:bg-orangey-yellow font-body">
                Parcours Certifiant • 25 heures
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-zodiac mb-6 leading-tight font-heading">
                Formation <span className="text-orangey-yellow">Gestionnaire Syndic</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 font-body">
                Maîtrisez tous les aspects de la gestion de copropriété : comptabilité, assemblées générales, gestion
                technique et aspects juridiques. Un parcours complet pour devenir un gestionnaire expert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-orangey-yellow hover:bg-orangey-yellow/90 text-blue-zodiac font-bold font-body"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    COMMENCER LA FORMATION
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-zodiac text-blue-zodiac hover:bg-lavender-mist font-body"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger la brochure
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/80 rounded-lg p-3">
                  <div className="text-2xl font-bold text-orangey-yellow">25h</div>
                  <div className="text-sm text-gray-600 font-body">de formation</div>
                </div>
                <div className="bg-white/80 rounded-lg p-3">
                  <div className="text-2xl font-bold text-aqua-green">8</div>
                  <div className="text-sm text-gray-600 font-body">modules</div>
                </div>
                <div className="bg-white/80 rounded-lg p-3">
                  <div className="text-2xl font-bold text-mango-tango">100%</div>
                  <div className="text-sm text-gray-600 font-body">en ligne</div>
                </div>
                <div className="bg-white/80 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-zodiac">
                    <Award className="w-6 h-6 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-600 font-body">Certifiant</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-orangey-yellow">
                <div className="w-full h-80 bg-gradient-to-br from-orangey-yellow/20 to-lavender-mist rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Target className="w-20 h-20 text-orangey-yellow mx-auto mb-4" />
                    <p className="text-blue-zodiac font-heading font-bold text-lg">Formation Interactive</p>
                    <p className="text-sm text-gray-600 mt-2">Plateforme MeltingSpot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs et compétences */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Objectifs de la formation</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body">
              À l'issue de cette formation, vous maîtriserez tous les aspects essentiels du métier de gestionnaire
              syndic
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-t-4 border-t-orangey-yellow hover:shadow-lg transition-shadow">
              <Calculator className="w-12 h-12 text-orangey-yellow mb-4" />
              <h3 className="font-bold mb-3 text-blue-zodiac font-heading">Comptabilité de copropriété</h3>
              <p className="text-gray-600 font-body text-sm">
                Maîtriser les écritures comptables, les clôtures et la gestion budgétaire
              </p>
            </Card>
            <Card className="p-6 border-t-4 border-t-aqua-green hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-aqua-green mb-4" />
              <h3 className="font-bold mb-3 text-blue-zodiac font-heading">Assemblées générales</h3>
              <p className="text-gray-600 font-body text-sm">
                Organiser, animer et suivre les AG en respectant les procédures légales
              </p>
            </Card>
            <Card className="p-6 border-t-4 border-t-mango-tango hover:shadow-lg transition-shadow">
              <Home className="w-12 h-12 text-mango-tango mb-4" />
              <h3 className="font-bold mb-3 text-blue-zodiac font-heading">Gestion technique</h3>
              <p className="text-gray-600 font-body text-sm">
                Superviser les travaux, contrats et maintenance des parties communes
              </p>
            </Card>
            <Card className="p-6 border-t-4 border-t-blue-zodiac hover:shadow-lg transition-shadow">
              <Scale className="w-12 h-12 text-blue-zodiac mb-4" />
              <h3 className="font-bold mb-3 text-blue-zodiac font-heading">Aspects juridiques</h3>
              <p className="text-gray-600 font-body text-sm">
                Connaître le cadre légal et réglementaire de la copropriété
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programme détaillé */}
      <section className="py-16 bg-lavender-mist/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Programme de formation</h2>
            <p className="text-xl text-gray-700 font-body">
              8 modules progressifs pour une montée en compétence complète
            </p>
          </div>

          <Tabs defaultValue="module1" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
              <TabsTrigger value="module1" className="text-xs">
                Module 1
              </TabsTrigger>
              <TabsTrigger value="module2" className="text-xs">
                Module 2
              </TabsTrigger>
              <TabsTrigger value="module3" className="text-xs">
                Module 3
              </TabsTrigger>
              <TabsTrigger value="module4" className="text-xs">
                Module 4
              </TabsTrigger>
              <TabsTrigger value="module5" className="text-xs">
                Module 5
              </TabsTrigger>
              <TabsTrigger value="module6" className="text-xs">
                Module 6
              </TabsTrigger>
              <TabsTrigger value="module7" className="text-xs">
                Module 7
              </TabsTrigger>
              <TabsTrigger value="module8" className="text-xs">
                Module 8
              </TabsTrigger>
            </TabsList>

            <TabsContent value="module1">
              <Card className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-orangey-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-orangey-yellow" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-blue-zodiac font-heading">
                        Module 1 : Fondamentaux de la copropriété
                      </h3>
                      <Badge className="bg-orangey-yellow/20 text-orangey-yellow">3h • Débutant</Badge>
                    </div>
                    <p className="text-gray-700 mb-6 font-body">
                      Découvrez les bases juridiques et organisationnelles de la copropriété française.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-3 text-blue-zodiac font-heading">Contenu du module</h4>
                        <ul className="space-y-2 text-gray-600 font-body">
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-orangey-yellow mr-2" />
                            Loi du 10 juillet 1965 et décret de 1967
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-orangey-yellow mr-2" />
                            Règlement de copropriété et état descriptif
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-orangey-yellow mr-2" />
                            Organes de la copropriété
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-orangey-yellow mr-2" />
                            Parties communes et privatives
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3 text-blue-zodiac font-heading">Ressources pédagogiques</h4>
                        <ul className="space-y-2 text-gray-600 font-body">
                          <li className="flex items-center">
                            <Video className="w-4 h-4 text-blue-zodiac mr-2" />4 vidéos explicatives (45 min)
                          </li>
                          <li className="flex items-center">
                            <FileText className="w-4 h-4 text-blue-zodiac mr-2" />
                            Fiches pratiques téléchargeables
                          </li>
                          <li className="flex items-center">
                            <Target className="w-4 h-4 text-blue-zodiac mr-2" />
                            Quiz d'évaluation (20 questions)
                          </li>
                          <li className="flex items-center">
                            <Download className="w-4 h-4 text-blue-zodiac mr-2" />
                            Modèles de documents
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="module2">
              <Card className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-aqua-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-8 h-8 text-aqua-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-blue-zodiac font-heading">
                        Module 2 : Comptabilité de base
                      </h3>
                      <Badge className="bg-aqua-green/20 text-aqua-green">4h • Intermédiaire</Badge>
                    </div>
                    <p className="text-gray-700 mb-6 font-body">
                      Maîtrisez les principes comptables spécifiques à la copropriété.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-3 text-blue-zodiac font-heading">Contenu du module</h4>
                        <ul className="space-y-2 text-gray-600 font-body">
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-aqua-green mr-2" />
                            Plan comptable de la copropriété
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-aqua-green mr-2" />
                            Écritures courantes et spécifiques
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-aqua-green mr-2" />
                            Gestion des appels de fonds
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-aqua-green mr-2" />
                            Rapprochements bancaires
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3 text-blue-zodiac font-heading">Cas pratiques</h4>
                        <ul className="space-y-2 text-gray-600 font-body">
                          <li className="flex items-center">
                            <Target className="w-4 h-4 text-blue-zodiac mr-2" />
                            Exercices sur Copromatic
                          </li>
                          <li className="flex items-center">
                            <Calculator className="w-4 h-4 text-blue-zodiac mr-2" />
                            Simulation de clôture
                          </li>
                          <li className="flex items-center">
                            <FileText className="w-4 h-4 text-blue-zodiac mr-2" />
                            Analyse d'états financiers
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Autres modules similaires... */}
            <TabsContent value="module3">
              <Card className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-mango-tango/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-mango-tango" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-blue-zodiac font-heading">
                        Module 3 : Assemblées générales
                      </h3>
                      <Badge className="bg-mango-tango/20 text-mango-tango">3h • Intermédiaire</Badge>
                    </div>
                    <p className="text-gray-700 mb-6 font-body">
                      Organisez et animez efficacement les assemblées générales de copropriétaires.
                    </p>
                    <div className="text-center py-8">
                      <p className="text-gray-500 font-body">Contenu détaillé disponible dans la formation complète</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Modules 4-8 avec contenu similaire mais condensé */}
            {[4, 5, 6, 7, 8].map((num) => (
              <TabsContent key={`module${num}`} value={`module${num}`}>
                <Card className="p-8">
                  <div className="text-center py-8">
                    <h3 className="text-2xl font-bold text-blue-zodiac font-heading mb-4">Module {num}</h3>
                    <p className="text-gray-500 font-body">Contenu détaillé disponible dans la formation complète</p>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Méthodes pédagogiques */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Méthodes pédagogiques</h2>
            <p className="text-xl text-gray-700 font-body">
              Une approche moderne et interactive pour un apprentissage optimal
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orangey-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-orangey-yellow" />
              </div>
              <h3 className="font-bold mb-3 text-blue-zodiac font-heading">Vidéos interactives</h3>
              <p className="text-gray-600 font-body mb-4">
                Cours en vidéo avec quiz intégrés et possibilité de poser des questions
              </p>
              <ul className="text-sm text-gray-600 space-y-1 font-body">
                <li>• 32 vidéos de 5-15 minutes</li>
                <li>• Sous-titres disponibles</li>
                <li>• Vitesse de lecture ajustable</li>
              </ul>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-aqua-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-aqua-green" />
              </div>
              <h3 className="font-bold mb-3 text-blue-zodiac font-heading">Cas pratiques</h3>
              <p className="text-gray-600 font-body mb-4">
                Exercices concrets sur la plateforme Copromatic avec données réelles
              </p>
              <ul className="text-sm text-gray-600 space-y-1 font-body">
                <li>• 15 cas pratiques</li>
                <li>• Environnement de test</li>
                <li>• Correction automatique</li>
              </ul>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-mango-tango/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-mango-tango" />
              </div>
              <h3 className="font-bold mb-3 text-blue-zodiac font-heading">Accompagnement</h3>
              <p className="text-gray-600 font-body mb-4">
                Support pédagogique et communauté d'apprenants pour échanger
              </p>
              <ul className="text-sm text-gray-600 space-y-1 font-body">
                <li>• Forum de discussion</li>
                <li>• Sessions Q&A mensuelles</li>
                <li>• Support par email</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Formateurs */}
      <section className="py-16 bg-lavender-mist/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Vos formateurs experts</h2>
            <p className="text-xl text-gray-700 font-body">Des professionnels reconnus du secteur de la copropriété</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-20 h-20 bg-orangey-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-orangey-yellow" />
              </div>
              <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Marie Lecomte</h3>
              <p className="text-sm text-gray-600 mb-3 font-body">Expert-comptable spécialisé copropriété</p>
              <p className="text-xs text-gray-500 font-body">15 ans d'expérience • Formatrice certifiée</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-20 h-20 bg-aqua-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-aqua-green" />
              </div>
              <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Jean-Pierre Dubois</h3>
              <p className="text-sm text-gray-600 mb-3 font-body">Juriste en droit immobilier</p>
              <p className="text-xs text-gray-500 font-body">20 ans d'expérience • Auteur de référence</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-20 h-20 bg-mango-tango/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-mango-tango" />
              </div>
              <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Sophie Martin</h3>
              <p className="text-sm text-gray-600 mb-3 font-body">Directrice de cabinet syndic</p>
              <p className="text-xs text-gray-500 font-body">12 ans d'expérience • Spécialiste AG</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Témoignages d'apprenants</h2>
            <p className="text-xl text-gray-700 font-body">Ils ont suivi la formation et partagent leur expérience</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orangey-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 font-body">
                "Formation très complète qui m'a permis de passer d'assistante à gestionnaire en 6 mois. Les cas
                pratiques sur Copromatic sont parfaits pour se mettre en situation réelle."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-lavender-mist rounded-full mr-3 flex items-center justify-center">
                  <span className="text-blue-zodiac font-bold text-sm">AL</span>
                </div>
                <div>
                  <p className="font-medium text-blue-zodiac font-body">Amélie Leclerc</p>
                  <p className="text-sm text-gray-500 font-body">Gestionnaire • Cabinet Immobilier Lyon</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orangey-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 font-body">
                "Excellent programme de formation. J'ai particulièrement apprécié la flexibilité et la qualité des
                contenus. La certification est un vrai plus pour la carrière."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-lavender-mist rounded-full mr-3 flex items-center justify-center">
                  <span className="text-blue-zodiac font-bold text-sm">TD</span>
                </div>
                <div>
                  <p className="font-medium text-blue-zodiac font-body">Thomas Durand</p>
                  <p className="text-sm text-gray-500 font-body">Gestionnaire • Syndic Professionnel Paris</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tarifs et modalités */}
      <section className="py-16 bg-gradient-to-r from-orangey-yellow/20 to-lavender-mist/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Tarifs et modalités</h2>
            <p className="text-xl text-gray-700 font-body">Choisissez la formule qui vous convient</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-orangey-yellow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-zodiac font-heading mb-2">Formation Individuelle</h3>
                <div className="text-4xl font-bold text-orangey-yellow mb-2">1 290€</div>
                <p className="text-gray-600 font-body">HT par personne</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orangey-yellow mr-3" />
                  <span className="font-body">Accès illimité pendant 6 mois</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orangey-yellow mr-3" />
                  <span className="font-body">Certification incluse</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orangey-yellow mr-3" />
                  <span className="font-body">Support pédagogique</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orangey-yellow mr-3" />
                  <span className="font-body">Accès communauté</span>
                </li>
              </ul>
              <Button className="w-full bg-orangey-yellow hover:bg-orangey-yellow/90 text-blue-zodiac font-body">
                S'inscrire maintenant
              </Button>
            </Card>

            <Card className="p-8 border-2 border-aqua-green bg-aqua-green/5">
              <div className="text-center mb-6">
                <Badge className="mb-2 bg-aqua-green text-white">Recommandé</Badge>
                <h3 className="text-2xl font-bold text-blue-zodiac font-heading mb-2">Formation Équipe</h3>
                <div className="text-4xl font-bold text-aqua-green mb-2">990€</div>
                <p className="text-gray-600 font-body">HT par personne (min. 3 personnes)</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-aqua-green mr-3" />
                  <span className="font-body">Tout de la formule individuelle</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-aqua-green mr-3" />
                  <span className="font-body">Tableau de bord manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-aqua-green mr-3" />
                  <span className="font-body">Session de lancement dédiée</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-aqua-green mr-3" />
                  <span className="font-body">Suivi personnalisé</span>
                </li>
              </ul>
              <Button className="w-full bg-aqua-green hover:bg-aqua-green/90 text-white font-body">
                Demander un devis
              </Button>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 font-body">
              Formation éligible aux dispositifs de financement professionnel • Devis personnalisé sur demande
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-zodiac font-heading">Questions fréquentes</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="font-bold mb-2 text-blue-zodiac font-heading">
                Quels sont les prérequis pour cette formation ?
              </h3>
              <p className="text-gray-600 font-body">
                Aucun prérequis technique. Une expérience dans l'immobilier ou la gestion est recommandée mais pas
                obligatoire. La formation s'adresse aux débutants comme aux professionnels souhaitant se perfectionner.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2 text-blue-zodiac font-heading">Comment se déroule la certification ?</h3>
              <p className="text-gray-600 font-body">
                La certification se compose d'un examen final de 60 questions et d'un projet pratique à réaliser sur la
                plateforme Copromatic. Un score minimum de 80% est requis pour obtenir la certification.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold mb-2 text-blue-zodiac font-heading">
                Puis-je suivre la formation à mon rythme ?
              </h3>
              <p className="text-gray-600 font-body">
                Oui, la formation est 100% en ligne et accessible 24h/24. Vous avez 6 mois pour la compléter à votre
                rythme. Nous recommandons 3-4 heures par semaine pour un apprentissage optimal.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-blue-zodiac text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Prêt à devenir un expert gestionnaire syndic ?</h2>
          <p className="text-xl mb-8 opacity-90 font-body">
            Rejoignez plus de 500 professionnels déjà formés avec l'Académie Copromatic
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-orangey-yellow text-blue-zodiac hover:bg-orangey-yellow/90 font-body">
                <Play className="w-5 h-5 mr-2" />
                Commencer la formation
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-zodiac font-body"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Planifier un entretien
            </Button>
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
              <h3 className="font-bold mb-4 font-heading">Formations</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/formations" className="hover:text-white font-body transition-colors">
                    Tous les parcours
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-body transition-colors">
                    Assistant(e) Syndic
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-body transition-colors">
                    Directeur Syndic
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 font-heading">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white font-body transition-colors">
                    Centre d'aide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-body transition-colors">
                    Support technique
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-body transition-colors">
                    Communauté
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 font-heading">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="font-body">formation@copromatic.com</li>
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
