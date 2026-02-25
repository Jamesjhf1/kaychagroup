import {
  Monitor,
  Link as LinkIcon,
  BarChart3,
  FileText,
  Workflow,
  Database,
  Cpu,
  Brain,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const features = [
  {
    icon: Monitor,
    title: 'Real-Time Sample Tracking',
    desc: 'Complete chain of custody from sample intake through final report, with real-time status visibility for clients and laboratory staff.',
  },
  {
    icon: Workflow,
    title: 'Automated Workflows',
    desc: 'Standardized SOPs encoded into automated workflows that ensure consistency and eliminate manual errors across all locations.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Dashboards',
    desc: 'Operational dashboards providing instant visibility into laboratory throughput, turnaround times, and quality metrics.',
  },
  {
    icon: FileText,
    title: 'Electronic COA Delivery',
    desc: 'Automated certificate of analysis generation and delivery. Results reach clients immediately upon scientific approval.',
  },
  {
    icon: LinkIcon,
    title: 'State System Integration',
    desc: 'Validated API integrations with Metrc and BioTrack for seamless compliance reporting and track-and-trace data exchange.',
  },
  {
    icon: Database,
    title: 'Client API Access',
    desc: 'RESTful APIs enabling clients to integrate testing data directly into their own platforms and business intelligence systems.',
  },
]

export default function Technology() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">Technology Platform</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">PureLIMS&reg;</h1>
          <p className="text-silver-light text-lg max-w-2xl leading-relaxed">
            Our proprietary Laboratory Information Management System \u2014 the operational backbone of the Kaycha platform, deployed across all 10 laboratories.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl font-bold text-navy mb-6">Platform Overview</h2>
              <p className="text-silver-dark text-lg leading-relaxed mb-4">
                PureLIMS\u00ae is Kaycha Group's proprietary LIMS, purpose-built for cannabis analytical testing at scale. Unlike generic off-the-shelf solutions, PureLIMS was designed from the ground up to address the unique regulatory, operational, and data management requirements of multi-state cannabis testing.
              </p>
              <p className="text-silver-dark text-lg leading-relaxed">
                Built on an API-first architecture, PureLIMS integrates seamlessly with analytical instruments, state regulatory systems, and client platforms \u2014 creating an end-to-end digital workflow from sample intake through certified result delivery.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 80}>
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <feature.icon size={28} className="text-gold mb-4" />
                  <h3 className="text-base font-semibold text-navy mb-2">{feature.title}</h3>
                  <p className="text-silver-dark text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">Interface</p>
              <h2 className="text-3xl font-bold text-white mb-4">Purpose-Built for Scale</h2>
              <p className="text-silver text-lg max-w-2xl mx-auto">
                Intuitive interfaces designed for laboratory scientists, operations managers, and client stakeholders.
              </p>
            </div>

            <div className="bg-navy-light rounded-2xl border border-white/10 p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[
                  { label: 'Sample Dashboard', desc: 'Real-time sample status, chain of custody, and test progress tracking.' },
                  { label: 'COA Portal', desc: 'Automated certificate generation with digital signatures and compliant formatting.' },
                  { label: 'Analytics', desc: 'Operational KPIs, turnaround metrics, and laboratory performance dashboards.' },
                ].map((screen) => (
                  <div key={screen.label} className="bg-navy-lighter/50 rounded-xl p-6 border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                    <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center mb-4">
                      <Cpu size={32} className="text-white/20" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{screen.label}</h3>
                    <p className="text-silver text-sm">{screen.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                <Brain size={32} className="text-gold" />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-navy mb-3">AI-Powered Analytics</h3>
                <p className="text-silver-dark leading-relaxed">
                  Kaycha is actively developing AI-powered quality assurance and predictive analytics capabilities within PureLIMS\u00ae, leveraging our proprietary dataset of over one million tested samples to enhance accuracy, detect anomalies, and drive operational efficiency.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors shrink-0"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
