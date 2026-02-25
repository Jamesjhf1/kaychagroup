import { labs } from '../data/labs'
import LabCard from '../components/LabCard'
import LabMap from '../components/LabMap'
import ScrollReveal from '../components/ScrollReveal'

export default function Laboratories() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">Our Network</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Laboratories</h1>
          <p className="text-silver-light text-lg max-w-2xl leading-relaxed">
            The largest network of ISO 17025 accredited cannabis testing laboratories in the United States, delivering consistent quality across every market we serve.
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LabMap />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-12">All Locations</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map((lab, i) => (
              <LabCard key={lab.id} lab={lab} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-navy mb-6">Standardized Excellence</h2>
              <p className="text-silver-dark text-lg leading-relaxed">
                Every Kaycha laboratory operates under standardized SOPs, shares access to our PureLIMS&reg; platform, and maintains ISO 17025 accreditation. This ensures consistent, reliable results regardless of which location serves your market.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
