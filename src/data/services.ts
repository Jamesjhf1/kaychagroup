import {
  FlaskConical,
  Leaf,
  Bug,
  Atom,
  Microscope,
  AlertTriangle,
  Wind,
  Droplets,
  Search,
  Beaker,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  name: string
  description: string
  methodology: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'potency',
    name: 'Potency Analysis',
    description: 'Comprehensive cannabinoid profiling including THC, CBD, CBG, CBN, and minor cannabinoids to ensure accurate labeling and regulatory compliance.',
    methodology: 'HPLC (High-Performance Liquid Chromatography)',
    icon: FlaskConical,
  },
  {
    id: 'terpenes',
    name: 'Terpene Profiling',
    description: 'Full-spectrum terpene analysis identifying the aromatic compounds that define strain characteristics and therapeutic properties.',
    methodology: 'GC-MS/FID (Gas Chromatography-Mass Spectrometry / Flame Ionization Detection)',
    icon: Leaf,
  },
  {
    id: 'pesticides',
    name: 'Pesticide Screening',
    description: 'Multi-residue pesticide analysis detecting hundreds of compounds to ensure products are free from harmful agricultural chemicals.',
    methodology: 'LC-MS/MS and GC-MS/MS',
    icon: Bug,
  },
  {
    id: 'heavy-metals',
    name: 'Heavy Metals',
    description: 'Quantitative analysis of lead, arsenic, mercury, and cadmium \u2014 critical contaminants that can accumulate in cannabis through soil and water.',
    methodology: 'ICP-MS (Inductively Coupled Plasma Mass Spectrometry)',
    icon: Atom,
  },
  {
    id: 'microbial',
    name: 'Microbial Testing',
    description: 'Comprehensive microbial screening including total yeast & mold, total aerobic count, bile-tolerant gram-negative bacteria, E. coli, Salmonella, and STEC.',
    methodology: 'qPCR and Plating Methods',
    icon: Microscope,
  },
  {
    id: 'mycotoxins',
    name: 'Mycotoxin Testing',
    description: 'Detection and quantification of aflatoxins and ochratoxin A \u2014 dangerous fungal metabolites that pose serious health risks.',
    methodology: 'LC-MS/MS',
    icon: AlertTriangle,
  },
  {
    id: 'residual-solvents',
    name: 'Residual Solvents',
    description: 'Full-panel residual solvent analysis to ensure extraction processes leave no harmful chemical residues in finished products.',
    methodology: 'Headspace GC-MS',
    icon: Wind,
  },
  {
    id: 'moisture',
    name: 'Moisture & Water Activity',
    description: 'Precise moisture content and water activity measurements critical for product stability, shelf life, and microbial safety.',
    methodology: 'Karl Fischer Titration and Water Activity Meters',
    icon: Droplets,
  },
  {
    id: 'foreign-matter',
    name: 'Foreign Matter Inspection',
    description: 'Visual and microscopic inspection to identify and quantify any foreign material contamination in cannabis products.',
    methodology: 'Visual and Microscopic Inspection',
    icon: Search,
  },
  {
    id: 'custom-rd',
    name: 'Custom & R&D Testing',
    description: 'Tailored analytical services including stability studies, shelf life testing, and custom method development for specialized needs.',
    methodology: 'Custom Methodologies',
    icon: Beaker,
  },
]
