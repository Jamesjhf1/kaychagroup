import {
  TrendingUp,
  Globe,
  Cpu,
  BarChart3,
  Scale,
  Users,
  Target,
  ArrowRight,
  Mail,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import InvestorHighlight from '../components/InvestorHighlight'
import ScrollReveal from '../components/ScrollReveal'

const highlights = [
  {
    icon: Globe,
    title: 'Market Leader',
    desc: 'Largest multi-state cannabis testing platform in the United States with 10 laboratories across 9 states.',
  },
  {
    icon: BarChart3,
    title: '$50M Revenue Run Rate',
    desc: 'Established revenue scale with demonstrated profitability and strong unit economics across the platform.',
  },
  {
    icon: Cpu,
    title: 'Proprietary Technology',
    desc: 'PureLIMS\u00ae creates meaningful switching costs and operational leverage, differentiating Kaycha from fragmented competitors.',
  },
  {
    icon: TrendingUp,
    title: 'Secular Tailwinds',
    desc: 'Federal reform (SAFE Banking, rescheduling) and continued state legalization drive market expansion and TAM growth.',
  },
  {
    icon: Target,
    title: 'Geographic Diversification',
    desc: '10 laboratories provide regulatory optionality and insulation from single-state policy risk.',
  },
  {
    icon: Users,
    title: 'Experienced Management',
    desc: 'Proven leadership team with track records in scaling technology businesses and laboratory operations.',
  },
]

const marketData = [
  { label: 'US Cannabis Testing TAM (2028E)', value: '$3B+' },
  { label: 'Legal States (Medical or Adult-Use)', value: '40+' },
  { label: 'Kaycha Market Position', value: '#1' },
  { label: 'Annual Samples Tested', value: '1M+' },
]

export default function Investors() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">Investor Relations</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Investment Opportunity</h1>
          <p className="text-silver-light text-lg max-w-2xl leading-relaxed">
            The dominant platform in cannabis analytical testing \u2014 combining market leadership, proprietary technology, and exposure to one of the fastest-growing segments of the U.S. economy.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">Investment Highlights</h2>
              <p className="text-silver-dark text-lg">
                A differentiated investment thesis anchored by scale, technology, and secular market growth.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <InvestorHighlight key={h.title} icon={h.icon} title={h.title} description={h.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">Market Opportunity</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">A Large & Growing Market</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {marketData.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className="bg-navy-light rounded-xl p-6 text-center border border-white/5">
                  <p className="text-3xl sm:text-4xl font-bold text-gold mb-2">{item.value}</p>
                  <p className="text-silver text-sm">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4 text-silver-light leading-relaxed">
                <p>The U.S. cannabis testing market is projected to exceed $3 billion by 2028, driven by mandatory testing requirements in every legal state, continued state-level legalization expanding the total addressable market, and the growing emphasis on consumer safety and product quality.</p>
                <p>Federal rescheduling or descheduling of cannabis would represent a transformational catalyst, potentially creating nationwide testing mandates and accelerating market growth. SAFE Banking legislation would further normalize the industry and improve access to capital.</p>
                <p>The cannabis testing landscape remains highly fragmented, with most operators limited to single-state operations. Kaycha's multi-state platform and proprietary technology position the company to drive industry consolidation and capture disproportionate market share as the regulatory environment evolves.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">Competitive Position</h2>
              <p className="text-silver-dark text-lg">Kaycha Group's platform advantages create durable competitive moats.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Scale,
                title: 'Scale Advantage',
                points: [
                  '10 laboratories \u2014 more than any competitor',
                  'Centralized procurement reduces COGS',
                  'Shared R&D and method development',
                  'Cross-state operational best practices',
                ],
              },
              {
                icon: Cpu,
                title: 'Technology Moat',
                points: [
                  'Proprietary PureLIMS\u00ae platform',
                  'High switching costs for embedded clients',
                  'Automated workflows reduce labor intensity',
                  'API-first architecture enables integrations',
                ],
              },
              {
                icon: Target,
                title: 'Regulatory Positioning',
                points: [
                  'Licensed in 9 states across regulatory frameworks',
                  'ISO 17025 at every location',
                  'Metrc validated integrator status',
                  'Deep relationships with state regulators',
                ],
              },
            ].map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 100}>
                <div className="bg-gray-50 rounded-xl p-8 h-full">
                  <section.icon size={28} className="text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-navy mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-silver-dark">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-white rounded-xl border border-gray-200 p-8 h-full">
                <h3 className="text-2xl font-bold text-navy mb-4">Financial Information</h3>
                <p className="text-silver-dark leading-relaxed mb-6">
                  For detailed financial information, please contact our investor relations team. We welcome the opportunity to discuss Kaycha Group's financial performance, growth trajectory, and strategic outlook.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-dark transition-colors">
                  Contact Us <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="bg-navy rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-4">Investor Contact</h3>
                <p className="text-silver leading-relaxed mb-6">
                  Kaycha Group welcomes inquiries from qualified institutional investors and strategic partners.
                </p>
                <div className="flex items-center gap-3 text-silver-light mb-4">
                  <Mail size={18} className="text-gold" />
                  <a href="mailto:investors@kaychagroup.com" className="hover:text-white transition-colors">
                    investors@kaychagroup.com
                  </a>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-silver text-sm">
                    Kaycha Group Inc.<br />
                    3451 Commerce Pkwy<br />
                    Miramar, FL 33025
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
