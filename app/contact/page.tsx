"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, Phone, Mail, CheckCircle, ArrowLeft, Video, MessageSquare, Users, Send } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    employeeCount: "",
    currentSoftware: "",
    subject: "",
    message: "",
    newsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        {/* Success Message */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-aqua-green" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Message envoyé avec succès !</h1>
            <p className="text-xl text-gray-600 mb-8 font-body">
              Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
            </p>
            <div className="bg-lavender-mist rounded-lg p-6 mb-8">
              <h3 className="font-bold text-blue-zodiac mb-2 font-heading">Prochaines étapes :</h3>
              <ul className="text-left text-blue-800 space-y-2 font-body">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-aqua-green" />
                  Un expert Copromatic vous contactera sous 24h
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-aqua-green" />
                  Analyse de vos besoins spécifiques
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-aqua-green" />
                  Proposition de solution adaptée
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <button className="px-6 py-3 bg-white text-blue-zodiac font-bold rounded-2xl border-4 border-blue-zodiac font-body shadow-[6px_6px_0px_#02DDBF] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#02DDBF] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0px_#02DDBF] transition-all duration-200 inline-flex items-center justify-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à l'accueil
                </button>
              </Link>
              <button className="px-6 py-3 bg-aqua-green text-white font-bold rounded-2xl border-4 border-blue-zodiac font-body shadow-[6px_6px_0px_#1E2251] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#1E2251] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0px_#1E2251] transition-all duration-200 inline-flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                Planifier un RDV
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-lavender-mist to-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-light-apricot text-blue-zodiac hover:bg-light-apricot font-body">
            Contactez-nous
          </Badge>
          <h1 className="text-4xl font-bold text-blue-zodiac mb-4 leading-tight font-heading">
            Parlons de votre projet
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto font-body">
            Notre équipe est là pour vous accompagner dans votre transformation digitale
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="rdv" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
              <TabsTrigger value="rdv" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Planifier un RDV
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Nous contacter
              </TabsTrigger>
            </TabsList>

            {/* Onglet RDV */}
            <TabsContent value="rdv">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Informations RDV */}
                <div className="space-y-6">
                  <Card className="p-6 border-2 hover:border-aqua-green transition-colors">
                    <div className="flex items-start space-x-4">
                      <Video className="w-6 h-6 text-blue-zodiac mt-1" />
                      <div>
                        <h3 className="font-bold text-blue-zodiac mb-2 font-heading">Types de rendez-vous</h3>
                        <ul className="space-y-3 text-sm font-body">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-aqua-green mr-2 mt-0.5" />
                            <div>
                              <strong>Démonstration (60 min)</strong>
                              <br />
                              <span className="text-gray-600">Présentation personnalisée de la plateforme</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-aqua-green mr-2 mt-0.5" />
                            <div>
                              <strong>Consultation (45 min)</strong>
                              <br />
                              <span className="text-gray-600">Analyse de vos besoins et recommandations</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-aqua-green mr-2 mt-0.5" />
                            <div>
                              <strong>Formation (15 min)</strong>
                              <br />
                              <span className="text-gray-600">Présentation de l'Académie Copromatic</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-2 hover:border-aqua-green transition-colors">
                    <div className="flex items-start space-x-4">
                      <Users className="w-6 h-6 text-blue-zodiac mt-1" />
                      <div>
                        <h3 className="font-bold text-blue-zodiac mb-2 font-heading">Nos experts</h3>
                        <div className="space-y-3 text-sm font-body">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-aqua-green/20 rounded-full mr-3 flex items-center justify-center">
                              <span className="text-aqua-green font-bold text-xs">RD</span>
                            </div>
                            <div>
                              <p className="font-medium">Rémi Darricau</p>
                              <p className="text-gray-600">Expert métier & dirigeant</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-orangey-yellow/20 rounded-full mr-3 flex items-center justify-center">
                              <span className="text-orangey-yellow font-bold text-xs">CG</span>
                            </div>
                            <div>
                              <p className="font-medium">Clémence Guilluy</p>
                              <p className="text-gray-600">Responsable migration et onboarding</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Widget Calendly */}
                <Card className="p-6 border-2">
                  <h3 className="text-xl font-bold mb-6 font-heading">Choisissez votre créneau</h3>
                  <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                    {/* Calendly inline widget */}
                    <div 
                      className="calendly-inline-widget" 
                      data-url="https://calendly.com/copromatic/30min" 
                      style={{ minWidth: "320px", height: "700px" }}
                    />
                    <script 
                      type="text/javascript" 
                      src="https://assets.calendly.com/assets/external/widget.js" 
                      async
                    />
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Onglet Contact */}
            <TabsContent value="contact">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <Card className="p-6 border-2 hover:border-aqua-green transition-colors">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-blue-zodiac mt-1" />
                      <div>
                        <h3 className="font-bold text-blue-zodiac mb-2 font-heading">Contactez-nous</h3>
                        <ul className="space-y-3 text-sm font-body">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-aqua-green mr-2 mt-0.5" />
                            <div>
                              <strong>Commercial</strong>
                              <br />
                              <span className="text-gray-600">sales@copromatic.com</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-aqua-green mr-2 mt-0.5" />
                            <div>
                              <strong>Formation</strong>
                              <br />
                              <span className="text-gray-600">formations@copromatic.com</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-aqua-green mr-2 mt-0.5" />
                            <div>
                              <strong>Presse & gains aux jeux</strong>
                              <br />
                              <span className="text-gray-600">contact@copromatic.com</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-2 hover:border-aqua-green transition-colors">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-blue-zodiac mt-1" />
                      <div>
                        <h3 className="font-bold text-blue-zodiac mb-2 font-heading">Téléphone</h3>
                        <div className="space-y-3 text-sm font-body">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-aqua-green/20 rounded-full mr-3 flex items-center justify-center">
                              <span className="text-aqua-green font-bold text-xs">ST</span>
                            </div>
                            <div>
                              <p className="font-medium">Standard</p>
                              <p className="text-gray-600">04 28 29 95 00</p>
                              <p className="text-sm text-gray-500">de 9h à 17h</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-2 hover:border-aqua-green transition-colors">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-blue-zodiac mt-1" />
                      <div>
                        <h3 className="font-bold text-blue-zodiac mb-2 font-heading">Notre mode de travail</h3>
                        <div className="space-y-3 text-sm font-body">
                          <div className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-aqua-green mr-2 mt-0.5" />
                            <div>
                              <strong>100% Télétravail</strong>
                              <br />
                              <span className="text-gray-600">Une équipe distribuée partout en France</span>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-aqua-green mr-2 mt-0.5" />
                            <div>
                              <strong>Culture d'entreprise</strong>
                              <br />
                              <a 
                                href="https://www.welcometothejungle.com/fr/companies/copromatic" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-aqua-green hover:text-aqua-green/80 transition-colors"
                              >
                                Notre page RH & recrutement
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Contact Form */}
                <Card className="p-6 border-2">
                  <h3 className="text-xl font-bold mb-6 font-heading">Envoyez-nous un message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-body">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-green"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-body">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-green"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 font-body">
                        Sujet
                      </label>
                      <select
                        id="subject"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-green"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="support">Support technique</option>
                        <option value="commercial">Commercial</option>
                        <option value="formation">Formation</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-body">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-green"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-blue-zodiac hover:bg-blue-zodiac/90 text-white font-body">
                      Envoyer le message
                    </Button>
                  </form>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
} 