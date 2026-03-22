import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { WA_BASE } from '../data/constants'
import { useCart } from '../context/CartContext'

const NAV_LINKS = [
  { to: '/', label: 'Home', labelTe: 'హోమ్' },
  { to: '/menu', label: 'Menu', labelTe: 'మెనూ' },
  { to: '/delivery', label: 'Delivery', labelTe: 'డెలివరీ' },
  { to: '/about', label: 'About', labelTe: 'మా గురించి' },
  { to: '/reviews', label: 'Reviews', labelTe: 'రివ్యూలు' },
]

export default function Navbar({ onCartClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('en')
  const location = useLocation()
  const { itemCount } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,253,231,0.92)' : 'rgba(255,253,231,0.75)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: scrolled ? '0 2px 20px rgba(27,94,32,0.12)' : 'none',
      transition: 'all 0.3s ease',
      borderBottom: scrolled ? '1px solid rgba(27,94,32,0.1)' : 'none',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '0 20px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
      }}>
        {/* Logo */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logo.jpg" alt="Ala Hasthinapuramlo Logo" style={{
            width: 44, height: 44, borderRadius: '50%',
            objectFit: 'cover', border: '2px solid #1B5E20',
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontFamily: 'Tiro Telugu, serif', fontSize: 13, color: '#1B5E20', fontWeight: 700 }}>
              ఆలా హస్తినాపురంలో
            </span>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 10, color: '#666', letterSpacing: 0.5 }}>
              Authentic Andhra Pulavs
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <NavLink key={link.to} to={link.to}
              style={({ isActive }) => ({
                padding: '8px 14px',
                borderRadius: 8,
                textDecoration: 'none',
                fontFamily: 'Poppins, sans-serif',
                fontSize: 14,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? '#1B5E20' : '#444',
                background: isActive ? 'rgba(27,94,32,0.08)' : 'transparent',
                transition: 'all 0.2s',
              })}
            >
              {lang === 'en' ? link.label : link.labelTe}
            </NavLink>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Language toggle */}
          <button
            onClick={() => setLang(l => l === 'en' ? 'te' : 'en')}
            aria-label="Toggle language"
            style={{
              background: 'rgba(27,94,32,0.08)',
              border: '1px solid rgba(27,94,32,0.2)',
              borderRadius: 20, padding: '5px 12px',
              cursor: 'pointer', fontSize: 12,
              fontFamily: 'Poppins, sans-serif',
              color: '#1B5E20', fontWeight: 600,
              transition: 'all 0.2s',
            }}
          >
            {lang === 'en' ? 'తె' : 'EN'}
          </button>

          {/* Cart button */}
          <button
            onClick={onCartClick}
            aria-label={`Open cart, ${itemCount} items`}
            style={{
              position: 'relative',
              background: itemCount > 0 ? '#1B5E20' : 'rgba(27,94,32,0.08)',
              border: itemCount > 0 ? 'none' : '1px solid rgba(27,94,32,0.2)',
              borderRadius: '50%', width: 38, height: 38,
              cursor: 'pointer', fontSize: 18,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            🛒
            {itemCount > 0 && (
              <span style={{
                position: 'absolute', top: -4, right: -4,
                background: '#F9A825', color: '#1B5E20',
                borderRadius: '50%', width: 18, height: 18,
                fontSize: 10, fontWeight: 800,
                fontFamily: 'Poppins, sans-serif',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '2px solid white',
              }}>{itemCount > 9 ? '9+' : itemCount}</span>
            )}
          </button>

          {/* WhatsApp */}
          <a
            href={`${WA_BASE}${encodeURIComponent('Hi! I would like to order from Ala Hasthinapuramlo.')}`}
            target="_blank" rel="noopener noreferrer"
            aria-label="Order on WhatsApp"
            style={{
              background: '#25D366', color: 'white',
              borderRadius: '50%', width: 38, height: 38,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              textDecoration: 'none', fontSize: 18,
              boxShadow: '0 2px 8px rgba(37,211,102,0.4)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            💬
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
