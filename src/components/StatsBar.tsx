import { useEffect, useRef, useState } from 'react'

interface Stat {
  label: string
  value: number
  prefix?: string
  suffix?: string
}

const stats: Stat[] = [
  { label: 'Laboratories', value: 10 },
  { label: 'States', value: 9 },
  { label: 'Employees', value: 200, suffix: '+' },
  { label: 'Annual Revenue', value: 50, prefix: '~$', suffix: 'M' },
  { label: 'Samples Tested', value: 1, suffix: 'M+' },
]

function AnimatedNumber({ stat, isVisible }: { stat: Stat; isVisible: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    const duration = 1500
    const steps = 40
    const increment = stat.value / steps
    let current = 0
    let step = 0
    const timer = setInterval(() => {
      step++
      current = Math.min(current + increment, stat.value)
      setDisplay(Math.round(current))
      if (step >= steps) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isVisible, stat.value])

  return (
    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums">
      {stat.prefix || ''}{display}{stat.suffix || ''}
    </span>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="bg-navy-light py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedNumber stat={stat} isVisible={isVisible} />
              <p className="text-silver text-sm mt-2 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
