import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import ScrollReveal from '../components/ScrollReveal'

const contacts = [
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '3451 Commerce Pkwy\nMiramar, FL 33025',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(833) KAYCHA-1\n(833) 529-2421',
    href: 'tel:+18335292421',
  },
  {
    icon: Mail,
    label: 'General',
    value: 'info@kaychagroup.com',
    href: 'mailto:info@kaychagroup.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday \u2013 Friday\n8:00 AM \u2013 6:00 PM EST',
  },
]

const emails = [
  { label: 'General Inquiries', email: 'info@kaychagroup.com' },
  { label: 'Investor Relations', email: 'investors@kaychagroup.com' },
  { label: 'Careers', email: 'careers@kaychagroup.com' },
]

export default function Contact() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium text-sm uppercase tracking-[0.15em] mb-4">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-silver-light text-lg max-w-2xl leading-relaxed">
            We welcome inquiries from clients, investors, partners, and prospective team members.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contacts.map((c, i) => (
              <ScrollReveal key={c.label} delay={i * 100}>
                <div className="bg-gray-50 rounded-xl p-6 text-center h-full">
                  <c.icon size={24} className="text-gold mx-auto mb-3" />
                  <p className="text-xs text-silver uppercase tracking-wider mb-2">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-navy font-medium text-sm hover:text-gold transition-colors whitespace-pre-line">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-navy font-medium text-sm whitespace-pre-line">{c.value}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <ContactForm />
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal delay={150}>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-navy mb-4">Email Contacts</h3>
                  <div className="space-y-4">
                    {emails.map((e) => (
                      <div key={e.email}>
                        <p className="text-xs text-silver uppercase tracking-wider mb-1">{e.label}</p>
                        <a href={`mailto:${e.email}`} className="text-navy font-medium text-sm hover:text-gold transition-colors">
                          {e.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <div className="bg-gray-50 rounded-xl p-6 overflow-hidden">
                  <h3 className="text-lg font-semibold text-navy mb-4">Headquarters</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      title="Kaycha Group Headquarters - Miramar, FL"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.2!2d-80.2325!3d25.9836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU5JzAxLjAiTiA4MMKwMTMnNTcuMCJX!5e0!3m2!1sen!2sus!4v1700000000000"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
