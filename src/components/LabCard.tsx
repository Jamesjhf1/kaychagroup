import { MapPin, Award, FlaskConical } from 'lucide-react'
import type { Lab } from '../data/labs'
import ScrollReveal from './ScrollReveal'

interface LabCardProps {
  lab: Lab
  index: number
}

export default function LabCard({ lab, index }: LabCardProps) {
  return (
    <ScrollReveal delay={index * 80}>
      <div className={`bg-white rounded-xl border ${lab.isHQ ? 'border-gold/30 shadow-lg shadow-gold/5' : 'border-gray-200'} p-6 hover:shadow-lg transition-shadow h-full`}>
        {lab.isHQ && (
          <span className="inline-block bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Headquarters
          </span>
        )}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
            <MapPin size={20} className="text-navy" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy">{lab.city}, {lab.state}</h3>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2 text-silver-dark">
            <Award size={14} className="shrink-0 text-gold" />
            <span>ISO 17025 Accredited</span>
          </div>
          <div className="flex items-start gap-2 text-silver-dark">
            <FlaskConical size={14} className="shrink-0 mt-0.5 text-gold" />
            <span className="leading-relaxed">{lab.capabilities}</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
