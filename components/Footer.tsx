import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#222544] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-white text-[#222544] font-bold text-lg px-3 py-1 mr-2">CO</div>
              
            </div>
            <p className="text-sm">
              La plateforme complète des syndics professionnels
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/plateforme" className="hover:underline">
                  Logiciel syndic pro
                </Link>
              </li>
              <li>
                <Link href="/accompagnement" className="hover:underline">
                  Équipes & Services
                </Link>
              </li>
              <li>
                <Link href="/academie" className="hover:underline">
                  Formations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/academie" className="hover:underline">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link href="/api" className="hover:underline">
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Notre mode de travail</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <div>
                  <strong>100% Télétravail & semaine de 4 jours</strong>
                  <br />
                  <span className="text-gray-400">Une équipe distribuée partout en France</span>
                </div>
              </li>
              <li className="flex items-start">
                <div>
                  <strong>Culture d'entreprise</strong>
                  <br />
                  <a 
                    href="https://www.welcometothejungle.com/fr/companies/copromatic" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Notre page RH & recrutement
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
} 