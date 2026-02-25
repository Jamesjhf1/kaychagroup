import type { LucideIcon } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface InvestorHighlightProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function InvestorHighlight({ icon: Icon, title, description, index }: InvestorHighlightProps) {
  return (
    <ScrollReveal delay={index * 80}>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-gold/20 transition-all h-full">
        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
          <Icon size={24} className="text-gold" />
        </div>
        <h3 className="text-base font-semibold text-navy mb-2">{title}</h3>
        <p className="text-silver-dark text-sm leading-relaxed">{description}</p>
      </div>
    </ScrollReveal>
  )
}
