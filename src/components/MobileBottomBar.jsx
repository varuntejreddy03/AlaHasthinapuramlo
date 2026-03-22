import { NavLink } from 'react-router-dom'
import { PHONE, WA_BASE } from '../data/constants'

const NAV = [
  { to: '/',         icon: '🏠', label: 'Home' },
  { to: '/menu',     icon: '🍽️', label: 'Menu' },
  { to: '/delivery', icon: '🚗', label: 'Delivery' },
  { to: '/about',    icon: '🏪', label: 'About' },
  { to: '/reviews',  icon: '⭐', label: 'Reviews' },
]

export default function MobileBottomBar() {
  return (
    <>
      {/* Mobile bottom nav — page links */}
      <nav className="mobile-bottom-nav" style={{
        position: 'fixed', bottom: 56, left: 0, right: 0,
        background: 'rgba(255,253,231,0.97)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(27,94,32,0.12)',
        display: 'flex', zIndex: 998,
        boxShadow: '0 -2px 12px rgba(0,0,0,0.06)',
        height: 56,
      }}>
        {NAV.map(item => (
          <NavLink key={item.to} to={item.to}
            style={({ isActive }) => ({
              flex: 1, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '6px 4px', textDecoration: 'none',
              color: isActive ? '#1B5E20' : '#888',
              fontFamily: 'Poppins, sans-serif',
              fontSize: 10, fontWeight: isActive ? 700 : 400,
              borderTop: isActive ? '2px solid #1B5E20' : '2px solid transparent',
              transition: 'all 0.2s',
            })}>
            <span style={{ fontSize: 18, lineHeight: 1.2 }}>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* CTA bar — Call + WhatsApp */}
      <div className="mobile-cta-bar" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        height: 56, display: 'flex', zIndex: 999,
        boxShadow: '0 -2px 16px rgba(0,0,0,0.18)',
      }}>
        <a href={`tel:${PHONE}`} aria-label="Call us now"
          style={{
            flex: 1, background: '#E8722A', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 8, textDecoration: 'none',
            fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14,
          }}>
          📞 Call Now
        </a>
        <a href={`${WA_BASE}${encodeURIComponent('Hi! I would like to order from Ala Hasthinapuramlo. My address is: ')}`}
          target="_blank" rel="noopener noreferrer" aria-label="Order on WhatsApp"
          style={{
            flex: 1, background: '#25D366', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 8, textDecoration: 'none',
            fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14,
          }}>
          💬 WhatsApp
        </a>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .mobile-cta-bar { display: none !important; }
          .mobile-bottom-nav { display: none !important; }
        }
      `}</style>
    </>
  )
}
