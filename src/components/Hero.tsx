import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToOverview = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in-up">
          <p className="text-gold font-medium text-sm sm:text-base uppercase tracking-[0.2em] mb-6">
            Kaycha Group Inc.
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            The Gold Standard in
            <br />
            <span className="text-gold">Cannabis Testing</span>
          </h1>
          <p className="text-lg sm:text-xl text-silver-light max-w-3xl mx-auto mb-12 leading-relaxed">
            Operating the largest network of ISO 17025 accredited cannabis testing laboratories in the United States
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={scrollToOverview}
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors text-base"
          >
            Explore Our Platform
          </button>
          <Link
            to="/investors"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors text-base"
          >
            Investor Relations
          </Link>
        </div>

        <button
          onClick={scrollToOverview}
          className="animate-bounce text-white/40 hover:text-white/70 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}
