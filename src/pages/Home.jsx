import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PHONE, WA_BASE, FEATURED } from '../data/constants'
import { useCart } from '../context/CartContext'
import useScrollReveal from '../components/useScrollReveal'
import VideoPlayer from '../components/VideoPlayer'
import {
  LotusOrnament, WavyDivider, HeroWave,
  TempleSketch, PalmSketch, WHY_ICONS,
} from '../components/SvgAssets'

/* ── Hero review video — served from public/videos/ ── */
const HERO_REVIEW_VIDEO = '/videos/ala_hasthinapuramlo_1772065822_3840688097005280059_80293953347.mp4'

/* ── Avatar placeholder colours for rating card ── */
const AVATAR_COLORS = ['#E65100', '#1B5E20', '#1565C0']

/* ─── Real food images from Unsplash ─── */
const DISH_IMAGES = {
  'Chicken Pulav':
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80&auto=format&fit=crop',
  'Mutton Pulav':
    'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80&auto=format&fit=crop',
  'Veg Pulav':
    'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600&q=80&auto=format&fit=crop',
  'Egg Pulav':
    'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80&auto=format&fit=crop',
}

const WHY = [
  { key: 'fresh',    title: 'Fresh Ingredients',    desc: 'Sourced fresh every single day' },
  { key: 'slowcook', title: 'Slow-Cooked 4+ Hours', desc: 'Patience is our secret ingredient' },
  { key: 'delivery', title: 'Free Delivery',         desc: 'Within 5km, no minimum order' },
  { key: 'recipe',   title: 'Authentic Recipe',      desc: 'Generations-old Andhra tradition' },
  { key: 'spice',    title: 'Custom Spice Levels',   desc: 'Mild to fiery — your choice' },
  { key: 'whatsapp', title: 'WhatsApp Order',        desc: 'No app needed, just message us' },
]

const TESTIMONIALS_3 = [
  { text: 'పులావ్ చాలా బాగుంది! ఇంటికి డెలివరీ కూడా సూపర్ ఫాస్ట్!', name: 'Srikanth R.', stars: 5, lang: 'te' },
  { text: 'Best chicken pulav in the area! Fresh, spicy and absolutely delicious!', name: 'Priya M.', stars: 5, lang: 'en' },
  { text: 'Value for money — ordering every week now. No more Swiggy for me!', name: 'Mohammed A.', stars: 5, lang: 'en' },
]

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 30% 50%, #2D7A3A 0%, #1B4D2E 60%, #0F3D20 100%)',
      display: 'flex',
      alignItems: 'center',
      padding: '80px 40px 60px',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>

      {/* Background decorations */}
      <TempleSketch style={{ top: 0, left: 0, opacity: 0.08, width: 180 }} />
      <PalmSketch style={{ bottom: 0, left: 0, opacity: 0.10 }} />
      <PalmSketch style={{ bottom: 0, right: 0, opacity: 0.10, transform: 'scaleX(-1)' }} />
      {[
        { top: '10%', left: '22%', size: 12, delay: '0s' },
        { top: '7%',  left: '48%', size: 10, delay: '0.5s' },
        { top: '15%', left: '65%', size: 14, delay: '1s' },
        { top: '5%',  left: '35%', size: 9,  delay: '0.3s' },
        { top: '20%', left: '78%', size: 11, delay: '0.8s' },
        { top: '12%', left: '55%', size: 8,  delay: '1.3s' },
      ].map((b, i) => (
        <svg key={i} viewBox="0 0 20 10" width={b.size * 1.8} height={b.size} aria-hidden="true"
          style={{ position: 'absolute', top: b.top, left: b.left, opacity: 0.15,
            animation: 'floatBird 3s ease-in-out infinite', animationDelay: b.delay, pointerEvents: 'none' }}>
          <path d="M0,5 Q5,0 10,5 Q15,0 20,5" fill="none" stroke="white" strokeWidth="1.8" />
        </svg>
      ))}

      {/* Two-column row */}
      <div className="hero-container" style={{
        width: '100%', maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'center', gap: 0,
        justifyContent: 'space-between',
      }}>

        {/* LEFT 55% */}
        <div className="hero-left" style={{
          width: '55%', paddingRight: 20,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          gap: 0, animation: 'fadeInUp 0.8s ease',
        }}>
          <div className="hero-pill" style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 100, padding: '6px 16px',
            marginBottom: 12, alignSelf: 'flex-start',
          }}>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 600, color: 'white', letterSpacing: '0.08em' }}>
              📍 Vanasthalipuram, Hyderabad
            </span>
          </div>
          <img className="hero-logo"
            src="/logo__2_-removebg-preview.png" alt="Ala Hasthinapuramlo"
            style={{ width: 260, height: 'auto', display: 'block', filter: 'brightness(1.1) drop-shadow(0 8px 24px rgba(0,0,0,0.3))', marginBottom: 8 }}
          />
          <p className="hero-telugu" style={{ fontFamily: 'Hind Guntur, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.2vw, 26px)', color: '#E8A020', marginBottom: 6, lineHeight: 1.3 }}>
            నిజమైన ఆంధ్ర పులావులు 🌶️
          </p>
          <p className="hero-subtitle" style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(15px, 1.6vw, 20px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, marginBottom: 8 }}>
            Authentic Andhra Pulavs, Slow-Cooked with Love
          </p>
          <div className="hero-trust" style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 20, fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
            <span>⭐ 4.7</span><span style={{ opacity: 0.4 }}>•</span><span>92 Reviews</span><span style={{ opacity: 0.4 }}>•</span><span>🚚 Free under 5km</span>
          </div>
          <div className="hero-buttons" style={{ display: 'flex', flexDirection: 'row', gap: 12, flexWrap: 'nowrap' }}>
            <a href={`tel:${PHONE}`} aria-label="Call us now" className="hero-btn-call"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#E8722A', color: 'white', textDecoration: 'none', padding: '14px 32px', borderRadius: 100, border: 'none', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, boxShadow: '0 4px 20px rgba(232,114,42,0.45)', transition: 'transform 0.2s', whiteSpace: 'nowrap', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >📞 Call Now</a>
            <a href={`${WA_BASE}${encodeURIComponent('Hi! I would like to order from Ala Hasthinapuramlo. My address is: ')}`}
              target="_blank" rel="noopener noreferrer" aria-label="Order on WhatsApp" className="hero-btn-whatsapp"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: 'white', textDecoration: 'none', padding: '14px 32px', borderRadius: 100, border: 'none', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 15, boxShadow: '0 4px 20px rgba(37,211,102,0.4)', transition: 'transform 0.2s', whiteSpace: 'nowrap', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >💬 Order on WhatsApp</a>
          </div>
        </div>

        {/* MIDDLE 22% — Why Choose Us mini grid */}
        <div className="hero-mid-col" style={{
          width: '22%',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '0 12px',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          gap: 10,
          alignSelf: 'stretch',
        }}>
          <p style={{
            fontFamily: 'Poppins, sans-serif', fontSize: 10,
            fontWeight: 600, letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.40)',
            textTransform: 'uppercase', marginBottom: 4,
          }}>WHY CHOOSE US</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 8, width: '100%',
          }}>
            {[
              { icon: '🌿', title: 'Fresh Daily',     sub: 'Sourced every morning' },
              { icon: '🔥', title: 'Slow Cooked',     sub: '4+ hours, every batch' },
              { icon: '🚗', title: 'Free Delivery',   sub: 'Within 5km, no min' },
              { icon: '💬', title: 'WhatsApp Order',  sub: 'No app needed' },
            ].map((f, i) => (
              <div key={i}
                style={{
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 10, padding: '10px 8px',
                  textAlign: 'center', cursor: 'default',
                  transition: 'background 200ms ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.16)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.10)'}
              >
                <div style={{ fontSize: 20 }}>{f.icon}</div>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, fontWeight: 600, color: 'white', marginTop: 4 }}>{f.title}</p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{f.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT 23% — hidden on mobile */}
        <div className="hero-right" style={{
          width: '23%', display: 'flex', flexDirection: 'column',
          alignItems: 'flex-start', justifyContent: 'center',
          paddingLeft: 20, position: 'relative',
          animation: 'fadeInUp 0.8s ease 0.2s both',
        }}>
          {/* Video card */}
          <div className="hero-video-card" style={{
            width: '100%', borderRadius: 20, overflow: 'hidden',
            border: '3px solid rgba(255,255,255,0.2)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
            position: 'relative', zIndex: 2, flexShrink: 0,
            aspectRatio: '9/16',
          }}>
            <VideoPlayer
              src={HERO_REVIEW_VIDEO}
              autoplay muted
              style={{ width: '100%', height: '100%', borderRadius: 0 }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.72))',
              padding: '28px 12px 12px', pointerEvents: 'none',
            }}>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 12, color: 'white' }}>
                ⭐ Real Customer Review
              </p>
            </div>
          </div>

          {/* Rating card */}
          <div className="hero-rating-card" style={{
            width: 170, background: 'rgba(255,255,255,0.95)',
            borderRadius: 16, padding: '12px 14px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
            marginTop: -28, marginLeft: 20,
            zIndex: 3, position: 'relative',
          }}>
            <div style={{ color: '#F59E0B', fontSize: 14, letterSpacing: 2, marginBottom: 4 }}>★★★★★</div>
            <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 22, color: '#1B4D2E', lineHeight: 1, marginBottom: 4 }}>
              4.7 <span style={{ fontSize: 13, fontWeight: 400, color: '#999' }}>/ 5</span>
            </p>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, color: '#6B6B6B', marginBottom: 10 }}>92+ Happy Customers</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ display: 'flex' }}>
                {AVATAR_COLORS.map((c, i) => (
                  <div key={i} style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: c, border: '2px solid white',
                    marginLeft: i > 0 ? -8 : 0,
                    fontSize: 10, color: 'white', fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Poppins, sans-serif',
                  }}>{['S','P','M'][i]}</div>
                ))}
              </div>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 10, color: '#888' }}>+ more ordering</span>
            </div>
          </div>
        </div>
      </div>

      {/* Orange wavy line — ONLY at very bottom of hero */}
      <HeroWave />

      <style>{`
        .hero-mid-col { display: flex; }
        @media (max-width: 768px) {
          .hero-section  { padding: 88px 20px 48px !important; justify-content: flex-start !important; }
          .hero-container {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 0 !important;
            gap: 24px !important;
          }
          .hero-left {
            width: 100% !important;
            padding: 0 !important;
            align-items: center !important;
          }
          .hero-pill  { margin: 0 auto !important; font-size: 11px !important; padding: 5px 14px !important; }
          .hero-logo  { width: 170px !important; margin: 0 auto !important; }
          .hero-telugu   { font-size: 20px !important; text-align: center !important; }
          .hero-subtitle { font-size: 14px !important; text-align: center !important; }
          .hero-trust    { justify-content: center !important; flex-wrap: wrap !important; gap: 6px !important; font-size: 11px !important; }
          .hero-buttons  { flex-direction: column !important; width: 100% !important; gap: 10px !important; }
          .hero-btn-call, .hero-btn-whatsapp { width: 100% !important; justify-content: center !important; height: 50px !important; font-size: 14px !important; padding: 0 20px !important; }
          .hero-mid-col  { display: none !important; }
          /* RIGHT col — show below content, centered, side-by-side video+rating */
          .hero-right {
            display: flex !important;
            width: 100% !important;
            flex-direction: row !important;
            justify-content: center !important;
            align-items: flex-end !important;
            gap: 12px !important;
            padding: 0 !important;
          }
          .hero-video-card {
            width: 150px !important;
            aspect-ratio: 9/16 !important;
            height: auto !important;
            border-radius: 16px !important;
            flex-shrink: 0 !important;
          }
          .hero-rating-card {
            width: 150px !important;
            margin: 0 0 16px 0 !important;
            align-self: flex-end !important;
            flex-shrink: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}

/* ─── Trust Bar ─── */
function TrustBar() {
  const ref = useScrollReveal()
  const items = [
    { icon: '⭐', text: '4.7 Rating' },
    { icon: '😊', text: '92+ Happy Customers' },
    { icon: '🏠', text: 'Free Delivery within 5km' },
    { icon: '🕐', text: 'Open Daily: 11AM – 10PM' },
  ]
  return (
    <div ref={ref} className="reveal" style={{
      background: 'linear-gradient(90deg, #1B5E20, #2E7D32)',
      padding: '14px 20px', overflowX: 'auto',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'center',
        flexWrap: 'wrap', maxWidth: 1280, margin: '0 auto',
      }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '8px 20px',
            borderRight: i < items.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
            color: 'white', fontFamily: 'Poppins, sans-serif',
            fontSize: 14, fontWeight: 500, whiteSpace: 'nowrap',
          }}>
            <span style={{ fontSize: 18 }}>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Featured Dish Card ─── */
function FeaturedCard({ dish, index }) {
  const { items, add, inc, dec } = useCart()
  const cartItem = items.find(i => i.name === dish.name)
  const qty = cartItem?.qty ?? 0
  // Build a minimal item object matching MENU shape
  const item = { id: dish.id, name: dish.name, telugu: dish.telugu, price: dish.price, emoji: dish.emoji, veg: dish.veg ?? false }

  return (
    <div className="card ribbon-wrap" style={{
      minWidth: 230, maxWidth: 270,
      flex: '0 0 auto', scrollSnapAlign: 'start',
      background: '#fff', padding: 0,
      outline: qty > 0 ? '2px solid #1B5E20' : 'none',
    }}>
      {index === 0 && <div className="ribbon">Bestseller</div>}

      <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
        <img
          src={DISH_IMAGES[dish.name]} alt={dish.name} loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
        />
        <div style={{
          display: 'none', position: 'absolute', inset: 0,
          background: '#FFF3E0', alignItems: 'center', justifyContent: 'center', fontSize: 56,
        }}>{dish.emoji}</div>
        <div style={{
          position: 'absolute', top: 12, right: 12,
          background: '#1B5E20', color: '#F9A825',
          borderRadius: 20, padding: '4px 12px',
          fontSize: 14, fontWeight: 700, fontFamily: 'Poppins, sans-serif',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }}>₹{dish.price}</div>
      </div>

      <div style={{ padding: '16px 18px 20px' }}>
        <h3 style={{ fontSize: 16, marginBottom: 3, color: '#1B5E20', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
          {dish.name}
        </h3>
        <p style={{ fontFamily: 'Tiro Telugu, serif', fontSize: 13, color: '#888', marginBottom: 14 }}>
          {dish.telugu}
        </p>

        {qty === 0 ? (
          <button
            onClick={() => add(item)}
            style={{
              width: '100%', padding: '10px 16px', borderRadius: 50,
              background: '#1B5E20', color: 'white', border: 'none',
              fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14,
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: 8,
              boxShadow: '0 3px 12px rgba(27,94,32,0.25)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#2E7D32'}
            onMouseLeave={e => e.currentTarget.style.background = '#1B5E20'}
          >+ Add to Cart</button>
        ) : (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: '#1B5E20', borderRadius: 50, padding: '4px 6px',
          }}>
            <button onClick={() => dec(cartItem.id)}
              style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', fontSize: 20, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >−</button>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 16, color: '#F9A825', minWidth: 28, textAlign: 'center' }}>{qty}</span>
            <button onClick={() => inc(cartItem.id)}
              style={{ width: 34, height: 34, borderRadius: '50%', background: '#F9A825', border: 'none', color: '#1B5E20', fontSize: 20, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >+</button>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Featured Dishes ─── */
function FeaturedDishes() {
  const ref = useScrollReveal()
  return (
    <section ref={ref} className="reveal section leaf-bg">
      <WavyDivider />
      <div className="container" style={{ paddingTop: 16 }}>
        <LotusOrnament />
        <h2 className="section-title">Our Signature Dishes</h2>
        <p className="section-subtitle">మా ప్రత్యేక వంటకాలు — Crafted with generations of love</p>

        <div style={{
          display: 'flex', gap: 22,
          overflowX: 'auto', paddingBottom: 16,
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
        }}>
          {FEATURED.map((dish, i) => (
            <FeaturedCard key={dish.name} dish={dish} index={i} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <Link to="/menu" className="btn btn-outline" style={{ fontSize: 15 }}>
            View Full Menu →
          </Link>
        </div>
      </div>
      <WavyDivider flip color="#1B5E20" opacity={0.3} />
    </section>
  )
}

/* ─── Why Choose Us ─── */
function WhyChooseUs() {
  const ref = useScrollReveal()
  return (
    <section ref={ref} className="reveal section" style={{
      background: '#F5F0E8',
      padding: '64px 20px',
    }}>
      <div className="container">
        <LotusOrnament />
        <h2 className="section-title" style={{ color: '#1B4D2E' }}>Why Choose Us?</h2>
        <p className="section-subtitle" style={{ color: '#555' }}>
          మాను ఎందుకు ఎంచుకోవాలి — Real reasons, real food
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 20,
        }}>
          {WHY.map((item, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 16, padding: '28px 16px',
              textAlign: 'center',
              border: '1px solid #D4C9B0',
              transition: 'all 0.3s ease', cursor: 'default',
              boxShadow: '0 2px 12px rgba(27,77,46,0.07)',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(27,77,46,0.14)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(27,77,46,0.07)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                {WHY_ICONS[item.key]}
              </div>
              <h3 style={{ color: '#1B4D2E', fontSize: 13, marginBottom: 6, fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                {item.title}
              </h3>
              <p style={{ color: '#666', fontSize: 12, fontFamily: 'Poppins, sans-serif', lineHeight: 1.55 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Reviews — 3 cards side by side ─── */
function Testimonials() {
  const ref = useScrollReveal()
  return (
    <section ref={ref} className="reveal section leaf-bg">
      <WavyDivider color="#E65100" opacity={0.4} />
      <div className="container" style={{ paddingTop: 24 }}>
        <LotusOrnament />
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">మా కస్టమర్లు చెప్పేది</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {TESTIMONIALS_3.map((t, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 18,
              border: '2px solid #1B5E20',
              padding: '28px 24px',
              boxShadow: '0 6px 28px rgba(27,94,32,0.12)',
              display: 'flex', flexDirection: 'column', gap: 14,
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 14px 40px rgba(27,94,32,0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 6px 28px rgba(27,94,32,0.12)'
              }}
            >
              <div style={{ fontSize: 36, color: '#F9A825', lineHeight: 1, opacity: 0.5 }}>"</div>
              <p style={{
                fontFamily: t.lang === 'te' ? 'Tiro Telugu, serif' : 'Poppins, sans-serif',
                fontSize: t.lang === 'te' ? 16 : 14,
                color: '#333', lineHeight: 1.75, flex: 1,
              }}>
                {t.text}
              </p>
              <div>
                <div style={{ color: '#F9A825', fontSize: 17, letterSpacing: 2, marginBottom: 6 }}>
                  {'★'.repeat(t.stars)}
                </div>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#1B5E20', fontSize: 14 }}>
                  — {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WavyDivider flip color="#E65100" opacity={0.4} />
    </section>
  )
}

/* ─── Order CTA — forest green (not saffron) ─── */
function OrderCTA() {
  const ref = useScrollReveal()
  return (
    <section ref={ref} className="reveal" style={{
      background: 'linear-gradient(135deg, #1B5E20 0%, #0a3d0a 100%)',
      padding: '64px 20px', textAlign: 'center',
    }}>
      <div className="container" style={{ maxWidth: 600 }}>
        <LotusOrnament color="rgba(255,204,2,0.7)" />
        <h2 style={{ color: '#F9A825', fontFamily: 'Tiro Telugu, serif', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 12 }}>
          ఆర్డర్ చేయండి ఇప్పుడే!
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.82)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 17, marginBottom: 32 }}>
          Fresh, hot, and delivered to your door in 30–45 minutes
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`tel:${PHONE}`} className="btn btn-cta" style={{ fontSize: 16, padding: '16px 32px' }}>
            📞 Call Now
          </a>
          <a href={`${WA_BASE}${encodeURIComponent('Hi! I would like to order from Ala Hasthinapuramlo. My address is: ')}`}
            target="_blank" rel="noopener noreferrer"
            className="btn btn-whatsapp" style={{ fontSize: 16, padding: '16px 32px' }}>
            💬 Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="page-enter" style={{ paddingTop: 64 }}>
      <HeroSection />
      <TrustBar />
      <FeaturedDishes />
      <WhyChooseUs />
      <Testimonials />
      <OrderCTA />
    </div>
  )
}
