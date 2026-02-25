import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import ScrollReveal from '../components/ScrollReveal'

export default function Services() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">Analytical Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Testing Services</h1>
          <p className="text-silver-light text-lg max-w-2xl leading-relaxed">
            Comprehensive analytical testing to ensure safety, compliance, and quality across the cannabis supply chain.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6">Industry-Leading Turnaround</h2>
                <p className="text-silver-dark leading-relaxed mb-4">
                  With an average turnaround time of 48 hours, Kaycha delivers results faster than industry averages without compromising analytical rigor. Our PureLIMS\u00ae platform automates workflows and eliminates manual bottlenecks.
                </p>
                <p className="text-silver-dark leading-relaxed">
                  Electronic COA delivery ensures results reach clients immediately upon approval, keeping products moving through the supply chain.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6">Quality Assurance</h2>
                <p className="text-silver-dark leading-relaxed mb-4">
                  Every Kaycha laboratory maintains ISO 17025 accreditation and operates under rigorous quality management systems. Our scientists follow standardized SOPs, participate in proficiency testing programs, and undergo continuous training.
                </p>
                <p className="text-silver-dark leading-relaxed">
                  Method validation, instrument calibration, and internal audits ensure the accuracy and reproducibility of every result we report.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
