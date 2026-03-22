import { PHONE, WA_BASE } from '../data/constants'
import useScrollReveal from '../components/useScrollReveal'

function DeliveryZoneSVG() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
      <svg viewBox="0 0 400 400" width="100%" style={{ maxWidth: 380 }} aria-label="Delivery zone map">
        {/* Outer ring - paid zone */}
        <circle cx="200" cy="200" r="175" fill="rgba(230,81,0,0.08)" stroke="#E65100" strokeWidth="2" strokeDasharray="8 4" />
        {/* Inner circle - free zone */}
        <circle cx="200" cy="200" r="100" fill="rgba(27,94,32,0.12)" stroke="#1B5E20" strokeWidth="2.5" />
        {/* Center pin */}
        <circle cx="200" cy="200" r="14" fill="#1B5E20" />
        <circle cx="200" cy="200" r="6" fill="white" />
        {/* Pulse rings */}
        <circle cx="200" cy="200" r="22" fill="none" stroke="#1B5E20" strokeWidth="1.5" opacity="0.4" />
        <circle cx="200" cy="200" r="30" fill="none" stroke="#1B5E20" strokeWidth="1" opacity="0.2" />

        {/* Free zone label */}
        <text x="200" y="148" textAnchor="middle" fill="#1B5E20" fontSize="11" fontFamily="Poppins, sans-serif" fontWeight="700">FREE DELIVERY</text>
        <text x="200" y="162" textAnchor="middle" fill="#1B5E20" fontSize="10" fontFamily="Poppins, sans-serif">0 – 5 km</text>

        {/* Free zone areas */}
        <text x="200" y="230" textAnchor="middle" fill="#1B5E20" fontSize="9" fontFamily="Poppins, sans-serif">Vanasthalipuram</text>
        <text x="200" y="243" textAnchor="middle" fill="#1B5E20" fontSize="9" fontFamily="Poppins, sans-serif">Hastina Puram</text>
        <text x="155" y="195" textAnchor="middle" fill="#1B5E20" fontSize="9" fontFamily="Poppins, sans-serif">LB Nagar</text>
        <text x="248" y="195" textAnchor="middle" fill="#1B5E20" fontSize="9" fontFamily="Poppins, sans-serif">Kothapet</text>
        <text x="200" y="178" textAnchor="middle" fill="#1B5E20" fontSize="9" fontFamily="Poppins, sans-serif">Saroornagar</text>

        {/* Paid zone areas */}
        <text x="200" y="60" textAnchor="middle" fill="#E65100" fontSize="10" fontFamily="Poppins, sans-serif" fontWeight="600">Dilsukhnagar</text>
        <text x="340" y="200" textAnchor="middle" fill="#E65100" fontSize="10" fontFamily="Poppins, sans-serif" fontWeight="600">Nagole</text>
        <text x="60" y="200" textAnchor="middle" fill="#E65100" fontSize="10" fontFamily="Poppins, sans-serif" fontWeight="600">Meerpet</text>
        <text x="200" y="355" textAnchor="middle" fill="#E65100" fontSize="10" fontFamily="Poppins, sans-serif" fontWeight="600">Hayathnagar</text>

        {/* Legend */}
        <rect x="20" y="360" width="12" height="12" rx="2" fill="rgba(27,94,32,0.2)" stroke="#1B5E20" strokeWidth="1.5" />
        <text x="38" y="371" fill="#1B5E20" fontSize="10" fontFamily="Poppins, sans-serif">Free Zone (0–5km)</text>
        <rect x="200" y="360" width="12" height="12" rx="2" fill="rgba(230,81,0,0.15)" stroke="#E65100" strokeWidth="1.5" />
        <text x="218" y="371" fill="#E65100" fontSize="10" fontFamily="Poppins, sans-serif">Paid Zone (5km+)</text>
      </svg>
    </div>
  )
}

const POLICY_CARDS = [
  {
    icon: '🟢', title: 'FREE DELIVERY',
    titleColor: '#1B5E20', bg: '#E8F5E9', border: '#A5D6A7',
    points: ['Within 5km radius', 'No minimum order', 'Delivered in 30–45 mins'],
  },
  {
    icon: '🟠', title: 'PAID DELIVERY',
    titleColor: '#E65100', bg: '#FFF3E0', border: '#FFCC80',
    points: ['Beyond 5km via Rapido', 'Charges as per distance', 'Call us for exact cost'],
  },
  {
    icon: '🏪', title: 'PICKUP',
    titleColor: '#1565C0', bg: '#E3F2FD', border: '#90CAF9',
    points: ['Walk in or drive-through', 'Ready in 20 minutes', 'Call ahead to pre-order'],
  },
]

const STEPS = [
  { num: '1', icon: '📱', text: 'Browse menu on this page' },
  { num: '2', icon: '💬', text: 'Click "Order on WhatsApp"' },
  { num: '3', icon: '📍', text: 'Share your address' },
  { num: '4', icon: '✅', text: 'Confirm your order' },
  { num: '5', icon: '🍚', text: 'We cook fresh & deliver!' },
]

export default function Delivery() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()

  return (
    <div className="page-enter" style={{ paddingTop: 64, minHeight: '100vh', background: '#FFFDE7' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1B5E20, #2E7D32)',
        padding: '48px 20px 40px', textAlign: 'center',
      }}>
        <div className="kolam-divider" style={{ color: '#F9A825', marginBottom: 12 }}>✦ ✦ ✦</div>
        <h1 style={{ color: '#F9A825', fontFamily: 'Tiro Telugu, serif', marginBottom: 8 }}>
          డెలివరీ సమాచారం
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 17 }}>
          Delivery Info — We bring the food to you!
        </p>
      </div>

      {/* Zone Map */}
      <section ref={ref1} className="reveal section" style={{ paddingTop: 48 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="kolam-divider">✦ ✦ ✦</div>
          <h2 className="section-title">Delivery Zones</h2>
          <p className="section-subtitle">మా డెలివరీ ప్రాంతాలు — See if we deliver to you</p>
          <div style={{
            background: 'white', borderRadius: 20,
            padding: '24px', boxShadow: '0 8px 40px rgba(27,94,32,0.1)',
          }}>
            <DeliveryZoneSVG />
          </div>
        </div>
      </section>

      {/* Policy Cards */}
      <section ref={ref2} className="reveal section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title">Delivery Policy</h2>
          <p className="section-subtitle">Simple, transparent, no surprises</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
          }}>
            {POLICY_CARDS.map((card, i) => (
              <div key={i} className="card" style={{
                background: card.bg,
                border: `2px solid ${card.border}`,
                padding: '28px 24px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{card.icon}</div>
                <h3 style={{
                  color: card.titleColor, fontFamily: 'Poppins, sans-serif',
                  fontSize: 16, fontWeight: 700, marginBottom: 16, letterSpacing: 0.5,
                }}>
                  {card.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {card.points.map((p, j) => (
                    <li key={j} style={{
                      fontFamily: 'Poppins, sans-serif', fontSize: 14,
                      color: '#444', padding: '6px 0',
                      borderBottom: j < card.points.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                    }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Steps */}
      <section ref={ref3} className="reveal section" style={{
        background: 'linear-gradient(135deg, #1B5E20, #2E7D32)',
        padding: '60px 20px',
      }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <div className="kolam-divider" style={{ color: '#F9A825' }}>✦ ✦ ✦</div>
          <h2 className="section-title" style={{ color: '#F9A825' }}>How to Order</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            ఆర్డర్ చేయడం చాలా సులభం — Just 5 simple steps
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 20,
                padding: '20px 24px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 16, marginBottom: 12,
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: '#F9A825', color: '#1B5E20',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: 18, flexShrink: 0,
                  fontFamily: 'Poppins, sans-serif',
                }}>
                  {step.num}
                </div>
                <span style={{ fontSize: 28 }}>{step.icon}</span>
                <p style={{
                  color: 'white', fontFamily: 'Poppins, sans-serif',
                  fontSize: 15, fontWeight: 500,
                }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a
              href={`${WA_BASE}${encodeURIComponent('Hi! I would like to order from Ala Hasthinapuramlo. My address is: ')}`}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ fontSize: 16, padding: '16px 36px' }}
            >
              💬 Start Your Order Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
