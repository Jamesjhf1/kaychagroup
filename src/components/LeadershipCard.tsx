import { User } from 'lucide-react'
import type { Leader } from '../data/leadership'
import ScrollReveal from './ScrollReveal'

interface LeadershipCardProps {
  leader: Leader
  index: number
}

export default function LeadershipCard({ leader, index }: LeadershipCardProps) {
  return (
    <ScrollReveal delay={index * 150}>
      <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
            <User size={36} className="text-navy/40" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-navy">{leader.name}</h3>
            <p className="text-gold font-medium text-sm mt-1">{leader.title}</p>
            {leader.credentials && (
              <div className="flex flex-wrap gap-2 mt-3">
                {leader.credentials.map((c) => (
                  <span
                    key={c}
                    className="text-xs bg-navy/5 text-navy font-medium px-2.5 py-1 rounded"
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}
            <p className="text-silver-dark text-sm leading-relaxed mt-4">{leader.bio}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
