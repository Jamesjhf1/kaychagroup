export interface Leader {
  id: string
  name: string
  title: string
  bio: string
  credentials?: string[]
}

export const leadership: Leader[] = [
  {
    id: 'james-horvath',
    name: 'James J. Horvath',
    title: 'CEO, Co-Founder & Chairman',
    bio: 'U.S. Air Force veteran with over 30 years of technology and business leadership experience. Co-founded Revelex Corporation, a travel technology company processing over $4 billion annually. Holds an MBA from Western Governors University.',
    credentials: ['CGEIT', 'CISA', 'CISSP', 'PMP'],
  },
  {
    id: 'chris-martinez',
    name: 'Christopher Martinez',
    title: 'President, Co-Founder & COO',
    bio: 'Leads day-to-day operations across all laboratory locations with deep expertise in laboratory operations and regulatory compliance. Instrumental in scaling Kaycha from a single laboratory to the largest multi-state cannabis testing platform in the United States.',
  },
]
