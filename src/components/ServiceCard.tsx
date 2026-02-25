import type { Service } from '../data/services'
import ScrollReveal from './ScrollReveal'

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon
  return (
    <ScrollReveal delay={index * 60}>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-gold/20 transition-all h-full group">
        <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
          <Icon size={24} className="text-navy group-hover:text-gold transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-navy mb-2">{service.name}</h3>
        <p className="text-silver-dark text-sm leading-relaxed mb-4">{service.description}</p>
        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs text-silver uppercase tracking-wider">Methodology</p>
          <p className="text-sm text-navy font-medium mt-1">{service.methodology}</p>
        </div>
      </div>
    </ScrollReveal>
  )
}
