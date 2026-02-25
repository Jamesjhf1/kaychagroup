import { Link } from 'react-router-dom'
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', path: '/about' },
      { label: 'Laboratories', path: '/laboratories' },
      { label: 'Services', path: '/services' },
      { label: 'Technology', path: '/technology' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Investors', path: '/investors' },
      { label: 'Contact', path: '/contact' },
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Use', path: '#' },
    ],
  },
]

const labLocations = [
  'Miramar, FL (HQ)',
  'Davie, FL',
  'Denver, CO',
  'Buffalo, NY',
  'Lynn, MA',
  'Las Vegas, NV',
  'Phoenix, AZ',
  'South Brunswick, NJ',
  'Rockville, MD',
  'Raleigh, NC',
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-gold font-black text-xl">KAYCHA</span>
              <span className="text-white font-light text-xl">GROUP</span>
            </Link>
            <p className="text-silver text-sm leading-relaxed mb-6">
              Operating the largest network of ISO 17025 accredited cannabis testing laboratories in the United States.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/kaycha-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-silver text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-silver">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>3451 Commerce Pkwy<br />Miramar, FL 33025</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+18335292421" className="hover:text-white transition-colors">
                  (833) 529-2421
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@kaychagroup.com" className="hover:text-white transition-colors">
                  info@kaychagroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="text-xs text-silver/60">
              <p className="font-medium text-silver/80 mb-2">Laboratory Locations</p>
              <p>{labLocations.join(' \u00b7 ')}</p>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-silver/50">
            &copy; {new Date().getFullYear()} Kaycha Group Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
