import { useState } from 'react'
import { Send } from 'lucide-react'

const inquiryTypes = [
  'General Inquiry',
  'Testing Services',
  'Investor Relations',
  'Partnership Opportunities',
  'Career Opportunities',
  'Media & Press',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
          <Send size={28} className="text-gold" />
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Thank You</h3>
        <p className="text-silver-dark">Your message has been received. We will respond within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-8">
      <h3 className="text-xl font-bold text-navy mb-6">Send Us a Message</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold text-sm"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold text-sm"
            placeholder="john@company.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">
            Company
          </label>
          <input
            id="company"
            type="text"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold text-sm"
            placeholder="Company Name"
          />
        </div>
        <div>
          <label htmlFor="inquiry" className="block text-sm font-medium text-navy mb-1.5">
            Inquiry Type <span className="text-red-500">*</span>
          </label>
          <select
            id="inquiry"
            required
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold text-sm bg-white"
          >
            <option value="">Select...</option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold text-sm resize-none"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
      >
        <Send size={16} />
        Send Message
      </button>
    </form>
  )
}
