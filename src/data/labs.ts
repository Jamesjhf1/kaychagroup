export interface Lab {
  id: string
  state: string
  city: string
  isHQ?: boolean
  capabilities: string
  coordinates: { x: number; y: number }
}

export const labs: Lab[] = [
  {
    id: 'fl-miramar',
    state: 'Florida',
    city: 'Miramar',
    isHQ: true,
    capabilities: 'Full panel \u2014 potency, terpenes, pesticides, heavy metals, microbials, mycotoxins, residual solvents, moisture, foreign matter',
    coordinates: { x: 79, y: 82 },
  },
  {
    id: 'fl-davie',
    state: 'Florida',
    city: 'Davie',
    capabilities: 'Full panel \u2014 potency, terpenes, pesticides, heavy metals, microbials, mycotoxins, residual solvents, moisture, foreign matter',
    coordinates: { x: 79, y: 81 },
  },
  {
    id: 'co-denver',
    state: 'Colorado',
    city: 'Denver',
    capabilities: 'Full panel \u2014 potency, terpenes, pesticides, heavy metals, microbials, mycotoxins, residual solvents, moisture, foreign matter',
    coordinates: { x: 35, y: 40 },
  },
  {
    id: 'ny-buffalo',
    state: 'New York',
    city: 'Buffalo',
    capabilities: 'Full panel \u2014 potency, terpenes, pesticides, heavy metals, microbials, mycotoxins, residual solvents, moisture, foreign matter',
    coordinates: { x: 74, y: 25 },
  },
  {
    id: 'ma-lynn',
    state: 'Massachusetts',
    city: 'Lynn',
    capabilities: 'Full panel \u2014 potency, terpenes, pesticides, heavy metals, microbials, mycotoxins, residual solvents, moisture, foreign matter',
    coordinates: { x: 84, y: 24 },
  },
  {
    id: 'nv-lasvegas',
    state: 'Nevada',
    city: 'Las Vegas',
    capabilities: 'Full panel \u2014 potency, terpenes, pesticides, heavy metals, microbials, mycotoxins, residual solvents, moisture, foreign matter',
    coordinates: { x: 20, y: 48 },
  },
  {
    id: 'az-phoenix',
    state: 'Arizona',
    city: 'Phoenix',
    capabilities: 'Full panel \u2014 potency, terpenes, pesticides, heavy metals, microbials, mycotoxins, residual solvents, moisture, foreign matter',
    coordinates: { x: 22, y: 58 },
  },
  {
    id: 'nj-southbrunswick',
    state: 'New Jersey',
    city: 'South Brunswick',
    capabilities: 'Full panel \u2014 potency, terpenes, pesticides, heavy metals, microbials, mycotoxins, residual solvents, moisture, foreign matter',
    coordinates: { x: 80, y: 32 },
  },
  {
    id: 'md-rockville',
    state: 'Maryland',
    city: 'Rockville',
    capabilities: 'Full panel \u2014 potency, terpenes, pesticides, heavy metals, microbials, mycotoxins, residual solvents, moisture, foreign matter',
    coordinates: { x: 77, y: 36 },
  },
  {
    id: 'nc-raleigh',
    state: 'North Carolina',
    city: 'Raleigh',
    capabilities: 'Full panel \u2014 potency, terpenes, pesticides, heavy metals, microbials, mycotoxins, residual solvents, moisture, foreign matter',
    coordinates: { x: 76, y: 48 },
  },
]

export const stats = [
  { label: 'Laboratories', value: 10, prefix: '' },
  { label: 'States', value: 9, prefix: '' },
  { label: 'Employees', value: 200, prefix: '', suffix: '+' },
  { label: 'Annual Revenue', value: 50, prefix: '~$', suffix: 'M' },
  { label: 'Samples Tested', value: 1, prefix: '', suffix: 'M+' },
]
