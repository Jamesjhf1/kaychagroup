import { labs } from '../data/labs'
import ScrollReveal from './ScrollReveal'

interface MapPin {
  state: string
  city: string
  isHQ?: boolean
  cx: number
  cy: number
}

const mapPins: MapPin[] = [
  { state: 'Florida', city: 'Miramar', isHQ: true, cx: 780, cy: 490 },
  { state: 'Florida', city: 'Davie', cx: 778, cy: 485 },
  { state: 'Colorado', city: 'Denver', cx: 358, cy: 290 },
  { state: 'New York', city: 'Buffalo', cx: 720, cy: 190 },
  { state: 'Massachusetts', city: 'Lynn', cx: 800, cy: 170 },
  { state: 'Nevada', city: 'Las Vegas', cx: 230, cy: 330 },
  { state: 'Arizona', city: 'Phoenix', cx: 265, cy: 390 },
  { state: 'New Jersey', city: 'S. Brunswick', cx: 770, cy: 230 },
  { state: 'Maryland', city: 'Rockville', cx: 745, cy: 260 },
  { state: 'North Carolina', city: 'Raleigh', cx: 735, cy: 330 },
]

export default function LabMap() {
  return (
    <ScrollReveal>
      <div className="relative bg-navy-light rounded-2xl p-6 sm:p-8 lg:p-12 overflow-hidden">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">National Footprint</h3>
        <p className="text-silver text-center mb-8">
          {labs.length} laboratories across {new Set(labs.map(l => l.state)).size} states
        </p>

        <div className="relative max-w-4xl mx-auto">
          <svg viewBox="0 0 960 600" className="w-full h-auto" aria-label="US map showing Kaycha laboratory locations">
            <path
              d="M 120 120 L 200 100 L 300 80 L 400 85 L 500 90 L 600 80 L 700 75 L 800 100 L 850 130 L 860 180 L 850 230 L 830 280 L 810 300 L 790 350 L 780 400 L 790 450 L 800 500 L 770 520 L 730 510 L 700 490 L 650 470 L 600 450 L 550 440 L 500 430 L 450 420 L 400 410 L 350 400 L 300 390 L 250 380 L 200 350 L 170 320 L 150 280 L 130 240 L 120 200 Z"
              fill="rgba(201, 168, 76, 0.05)"
              stroke="rgba(201, 168, 76, 0.2)"
              strokeWidth="1.5"
            />

            {[150, 250, 350, 450, 550, 650, 750].map(x => (
              <line key={`v${x}`} x1={x} y1="70" x2={x} y2="530" stroke="rgba(201,168,76,0.04)" strokeWidth="0.5" />
            ))}
            {[150, 250, 350, 450].map(y => (
              <line key={`h${y}`} x1="110" y1={y} x2="870" y2={y} stroke="rgba(201,168,76,0.04)" strokeWidth="0.5" />
            ))}

            {mapPins.map((pin, i) => (
              <g key={`${pin.state}-${pin.city}`}>
                {pin.isHQ && (
                  <circle cx={pin.cx} cy={pin.cy} r="18" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1">
                    <animate attributeName="r" from="10" to="24" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle
                  cx={pin.cx}
                  cy={pin.cy}
                  r={pin.isHQ ? 8 : 6}
                  fill={pin.isHQ ? '#C9A84C' : 'rgba(201,168,76,0.8)'}
                  stroke="#0A1628"
                  strokeWidth="2"
                  className="cursor-pointer"
                >
                  <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin={`${i * 0.1}s`} fill="freeze" />
                </circle>
                <text
                  x={pin.cx}
                  y={pin.cy - (pin.isHQ ? 16 : 12)}
                  textAnchor="middle"
                  className="fill-white text-[11px] font-medium"
                  style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                >
                  {pin.city}{pin.isHQ ? ' (HQ)' : ''}, {pin.state.slice(0, 2).toUpperCase()}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {mapPins.map((pin) => (
            <div
              key={`${pin.state}-${pin.city}-label`}
              className={`text-center py-3 px-2 rounded-lg ${
                pin.isHQ ? 'bg-gold/10 border border-gold/20' : 'bg-white/5'
              }`}
            >
              <p className="text-white text-sm font-medium">{pin.city}</p>
              <p className="text-silver text-xs">{pin.state}{pin.isHQ ? ' (HQ)' : ''}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
