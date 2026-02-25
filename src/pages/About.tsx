import { Award, Shield, FileCheck, Fingerprint } from 'lucide-react'
import { leadership } from '../data/leadership'
import LeadershipCard from '../components/LeadershipCard'
import ScrollReveal from '../components/ScrollReveal'

const certifications = [
  { icon: Award, name: 'ISO 17025', desc: 'Accredited at all laboratory locations' },
  { icon: Shield, name: 'State Licenses', desc: 'Licensed in every operating state' },
  { icon: FileCheck, name: 'DEA Registered', desc: 'Federal registration for controlled substances' },
  { icon: Fingerprint, name: 'Metrc Validated', desc: 'Validated API integrator for track-and-trace' },
]

export default function About() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">About Kaycha Group</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Story</h1>
          <p className="text-silver-light text-lg max-w-2xl leading-relaxed">
            From a single Florida laboratory to the largest multi-state cannabis testing network in the United States.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-navy mb-6">Building the Gold Standard</h2>
              <div className="space-y-4 text-silver-dark leading-relaxed">
                <p>Founded in 2016 with a mission to establish the gold standard in cannabis analytical testing, Kaycha Group has grown from a single Florida laboratory into the largest multi-state cannabis testing platform in the nation through a combination of organic growth and strategic acquisition.</p>
                <p>Co-founded by James Horvath, a U.S. Air Force veteran and serial technology entrepreneur, and Christopher Martinez, an experienced operations leader, Kaycha was built on the conviction that the emerging cannabis industry deserved the same analytical rigor and scientific integrity found in pharmaceutical and food safety testing.</p>
                <p>Today, Kaycha Group operates 10 laboratories across 9 states, employs over 200 scientists and professionals, and has tested more than one million samples. Our proprietary PureLIMS&reg; technology platform, ISO 17025 accreditation at every location, and deep regulatory expertise position us as the trusted analytical partner for cultivators, processors, manufacturers, and dispensaries across the country.</p>
                <p>Our vision: Enable a safe, transparent, and well-regulated cannabis industry through world-class analytical science.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">Leadership</p>
            <h2 className="text-3xl font-bold text-navy mb-12">Executive Team</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {leadership.map((leader, i) => (
              <LeadershipCard key={leader.id} leader={leader} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">Governance</p>
              <h2 className="text-3xl font-bold text-navy mb-6">Board & Corporate Governance</h2>
              <p className="text-silver-dark leading-relaxed">
                Kaycha Group maintains institutional-grade corporate governance with an experienced board of directors overseeing strategic direction and fiduciary responsibilities. Our governance framework reflects the standards expected of a market-leading analytical services platform.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">Compliance</p>
            <h2 className="text-3xl font-bold text-navy mb-12">Certifications & Accreditations</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.name} delay={i * 100}>
                <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition-shadow h-full">
                  <cert.icon size={32} className="text-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-navy mb-1">{cert.name}</h3>
                  <p className="text-silver-dark text-sm">{cert.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
