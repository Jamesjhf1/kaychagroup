import { Link } from 'react-router-dom'
import {
  Globe,
  Cpu,
  Award,
  Zap,
  Clock,
  Layers,
  ArrowRight,
  Building2,
  FlaskConical,
  Shield,
  Network,
} from 'lucide-react'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import LabMap from '../components/LabMap'
import ScrollReveal from '../components/ScrollReveal'

const advantages = [
  {
    icon: Globe,
    title: 'Largest Multi-State Footprint',
    desc: 'Unmatched geographic reach with 10 laboratories across 9 states, providing regulatory optionality and client proximity.',
  },
  {
    icon: Cpu,
    title: 'Proprietary LIMS Technology',
    desc: 'PureLIMS\u00ae delivers real-time sample tracking, automated reporting, and electronic COA delivery across all locations.',
  },
  {
    icon: Award,
    title: 'ISO 17025 Accredited',
    desc: 'Every laboratory maintains ISO 17025 accreditation \u2014 the international gold standard for testing and calibration.',
  },
  {
    icon: Network,
    title: 'Metrc Validated Integration',
    desc: 'Direct electronic integration with state track-and-trace systems ensures seamless compliance and data integrity.',
  },
  {
    icon: Clock,
    title: '48-Hour Average Turnaround',
    desc: 'Industry-leading turnaround times keep clients\u2019 products moving through the supply chain without delay.',
  },
  {
    icon: Layers,
    title: 'Vertically Integrated Stack',
    desc: 'End-to-end technology ownership creates operational leverage, switching costs, and continuous improvement.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* Company Overview */}
      <section id="overview" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">Company Overview</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Analytical Excellence at Scale
              </h2>
              <p className="text-silver-dark text-lg leading-relaxed">
                Founded in 2016 in South Florida by James Horvath and Christopher Martinez, Kaycha Group has grown into the largest multi-state cannabis testing laboratory operator in the United States. Headquartered in Miramar, Florida, we provide full-service analytical testing to cultivators, processors, manufacturers, and dispensaries across regulated markets.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Building2, label: 'Founded', value: '2016', sub: 'South Florida' },
              { icon: FlaskConical, label: 'Testing Services', value: '10+', sub: 'Analytical Panels' },
              { icon: Shield, label: 'Accreditation', value: 'ISO 17025', sub: 'All Locations' },
              { icon: Zap, label: 'Integration', value: 'Metrc', sub: 'Validated API' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <item.icon size={28} className="text-gold mx-auto mb-3" />
                  <p className="text-xs text-silver uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-2xl font-bold text-navy">{item.value}</p>
                  <p className="text-sm text-silver-dark mt-1">{item.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* National Footprint Map */}
      <section className="py-20 sm:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LabMap />
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">Why Kaycha</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Competitive Advantages
              </h2>
              <p className="text-silver-dark text-lg">
                A differentiated platform built on geographic scale, proprietary technology, and scientific rigor.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 80}>
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <a.icon size={28} className="text-gold mb-4" />
                  <h3 className="text-base font-semibold text-navy mb-2">{a.title}</h3>
                  <p className="text-silver-dark text-sm leading-relaxed">{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Teaser */}
      <section className="py-20 sm:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">Technology</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Powered by PureLIMS&reg;
              </h2>
              <p className="text-silver-light text-lg leading-relaxed mb-8">
                Our proprietary Laboratory Information Management System is deployed across all locations, delivering real-time sample tracking, automated workflows, and electronic COA delivery through an API-first architecture.
              </p>
              <Link
                to="/technology"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Investor CTA */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 lg:p-16 text-center">
              <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">Investor Relations</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                The Cannabis Testing Market Leader
              </h2>
              <p className="text-silver-dark text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                With the largest multi-state footprint, proprietary technology, and established profitability, Kaycha Group represents a compelling opportunity in the rapidly growing cannabis testing market.
              </p>
              <Link
                to="/investors"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
              >
                Investor Overview <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
