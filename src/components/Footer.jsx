import { NavLink } from 'react-router-dom'
import { PHONE, WA_BASE } from '../data/constants'

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0a3d0a 0%, #1B5E20 100%)',
      color: 'white', padding: '48px 20px 24px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 32, marginBottom: 40,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <img src="/logo.jpg" alt="Logo" style={{
                width: 50, height: 50, borderRadius: '50%',
                objectFit: 'cover', border: '2px solid #F9A825',
              }} />
              <div>
                <div style={{ fontFamily: 'Tiro Telugu, serif', fontSize: 14, color: '#F9A825' }}>
                  ఆలా హస్తినాపురంలో
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontFamily: 'Poppins, sans-serif' }}>
                  Authentic Andhra Pulavs
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontFamily: 'Poppins, sans-serif' }}>
              Slow-cooked with love. Delivered fresh to your door.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#F9A825', marginBottom: 16, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
              Quick Links
            </h4>
            {[
              { to: '/', label: 'Home' },
              { to: '/menu', label: 'Menu' },
              { to: '/delivery', label: 'Delivery' },
              { to: '/about', label: 'About Us' },
              { to: '/reviews', label: 'Reviews' },
            ].map(l => (
              <NavLink key={l.to} to={l.to} style={{
                display: 'block', color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none', marginBottom: 8,
                fontFamily: 'Poppins, sans-serif', fontSize: 14,
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#F9A825'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              >
                → {l.label}
              </NavLink>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#F9A825', marginBottom: 16, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={`tel:${PHONE}`} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: 14, fontFamily: 'Poppins, sans-serif', display: 'flex', alignItems: 'center', gap: 8 }}>
                📞 {PHONE}
              </a>
              <a href={`${WA_BASE}${encodeURIComponent('Hi!')}`} target="_blank" rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: 14, fontFamily: 'Poppins, sans-serif', display: 'flex', alignItems: 'center', gap: 8 }}>
                💬 WhatsApp Order
              </a>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, fontFamily: 'Poppins, sans-serif', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                📍 Opp. Vanasthalipuram Post Office, Hastina Puram Colony, Hyderabad – 500070
              </div>
              <a href="https://instagram.com/ala_hasthinapuramlo" target="_blank" rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: 14, fontFamily: 'Poppins, sans-serif', display: 'flex', alignItems: 'center', gap: 8 }}>
                📸 @ala_hasthinapuramlo
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ color: '#F9A825', marginBottom: 16, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
              Hours
            </h4>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, fontFamily: 'Poppins, sans-serif', lineHeight: 2 }}>
              <div>🕐 Mon – Sun</div>
              <div style={{ color: '#F9A825', fontWeight: 600, fontSize: 16 }}>11:00 AM – 10:00 PM</div>
              <div style={{ marginTop: 12, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Open all days including holidays</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20, textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, fontFamily: 'Poppins, sans-serif' }}>
            © 2025 Ala Hasthinapuramlo. All rights reserved. | Made with ❤️ in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  )
}
