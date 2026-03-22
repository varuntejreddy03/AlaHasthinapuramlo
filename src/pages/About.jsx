import { useState } from 'react'
import { PHONE, WA_BASE } from '../data/constants'
import useScrollReveal from '../components/useScrollReveal'
import VideoPlayer from '../components/VideoPlayer'
import { LotusOrnament, WavyDivider } from '../components/SvgAssets'

/* ── Restaurant videos — plain paths served from public/videos/ ── */
const RESTAURANT_VIDEOS = [
  '/videos/ala_hasthinapuramlo_1770906664_3830964621029850272_80293953347.mp4',
  '/videos/ala_hasthinapuramlo_1771463042_3835631334933543294_80293953347.mp4',
  '/videos/ala_hasthinapuramlo_1771809684_3838539390675732108_80293953347.mp4',
  '/videos/ala_hasthinapuramlo_1772065822_3840688097005280059_80293953347.mp4',
]

const VIDEO_LABELS = [
  'Our Special Chicken Pulav 🍗',
  'Slow Cooking Process 🔥',
  'Fresh Ingredients Daily 🌿',
  'Behind the Kitchen 👨‍🍳',
]

const INFO = [
  { icon: '📍', label: 'Location', value: 'Opp. Vanasthalipuram Post Office, Hastina Puram Colony, Hyderabad – 500070', color: '#E65100' },
  { icon: '📞', label: 'Phone', value: PHONE, href: `tel:${PHONE}`, color: '#1B5E20' },
  { icon: '⏰', label: 'Hours', value: '11:00 AM – 10:00 PM (All days)', color: '#1565C0' },
  { icon: '💰', label: 'Price for Two', value: '₹200 – ₹400', color: '#6A1B9A' },
]

export default function About() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()
  const ref4 = useScrollReveal()

  return (
    <div className="page-enter" style={{ paddingTop: 64, minHeight: '100vh', background: '#FFFDE7' }}>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1B5E20, #2E7D32)', padding: '48px 20px 40px', textAlign: 'center' }}>
        <div className="kolam-divider" style={{ color: '#F9A825', marginBottom: 12 }}>✦ ✦ ✦</div>
        <h1 style={{ color: '#F9A825', fontFamily: 'Tiro Telugu, serif', marginBottom: 8 }}>మా గురించి</h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 17 }}>
          About Us — Our Story, Our Passion
        </p>
      </div>

      {/* Story */}
      <section ref={ref1} className="reveal section leaf-bg">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="kolam-divider">✦ ✦ ✦</div>
          <h2 className="section-title">మా కథ | Our Story</h2>
          <div style={{ background: 'white', borderRadius: 20, padding: '36px 32px', boxShadow: '0 8px 40px rgba(27,94,32,0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <img src="/logo__2_-removebg-preview.png" alt="Ala Hasthinapuramlo" style={{ width: 110, height: 'auto' }} />
            </div>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, color: '#444', lineHeight: 1.9, marginBottom: 20 }}>
              Born from a love of traditional Andhra cooking, <strong style={{ color: '#1B5E20' }}>Ala Hasthinapuramlo</strong> started with
              one simple belief — great food doesn't need Swiggy or Zomato. Just real flavors, delivered with care, straight to your door.
            </p>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, color: '#444', lineHeight: 1.9, marginBottom: 20 }}>
              We slow-cook every pulav for <strong style={{ color: '#E65100' }}>4+ hours</strong> using recipes passed through generations.
              No shortcuts. No compromises. Just the kind of food your grandmother would approve of.
            </p>
            <p style={{ fontFamily: 'Tiro Telugu, serif', fontSize: 17, color: '#1B5E20', lineHeight: 1.9, borderLeft: '4px solid #F9A825', paddingLeft: 20, fontStyle: 'italic' }}>
              "నిజమైన రుచి, నిజమైన ప్రేమతో వండిన వంటకాలు — ఆలా హస్తినాపురంలో"
            </p>
          </div>
        </div>
      </section>

      {/* ── Video Section ── */}
      <section ref={ref2} className="reveal" style={{ background: '#FDFAF5', padding: '64px 20px' }}>
        <WavyDivider color="#E65100" opacity={0.45} />
        <div className="container" style={{ paddingTop: 32 }}>
          <LotusOrnament />
          <h2 className="section-title">మా వంట చూడండి | Watch Us Cook</h2>
          <p className="section-subtitle">Real videos from our kitchen — straight from Instagram</p>

          {RESTAURANT_VIDEOS.length > 0 ? (
            <>
              <style>{`
                .video-grid {
                  display: grid;
                  grid-template-columns: repeat(4, minmax(0, 280px));
                  gap: 20px;
                  justify-content: center;
                }
                @media (max-width: 1200px) { .video-grid { grid-template-columns: repeat(2, minmax(0, 280px)); } }
                @media (max-width: 640px)  { .video-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; } }
              `}</style>
              <div className="video-grid">
                {RESTAURANT_VIDEOS.map((src, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <VideoPlayer
                      src={src}
                      style={{ width: '100%', aspectRatio: '9/16', borderRadius: 16 }}
                    />
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: '#1B5E20', marginBottom: 4 }}>
                        {VIDEO_LABELS[i]}
                      </p>
                      <a
                        href="https://www.instagram.com/ala_hasthinapuramlo/"
                        target="_blank" rel="noopener noreferrer"
                        style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, color: '#E65100', textDecoration: 'none' }}
                      >
                        View on Instagram →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p style={{ textAlign: 'center', color: '#888', fontFamily: 'Poppins, sans-serif' }}>
              Videos coming soon — follow us on Instagram!
            </p>
          )}
        </div>
        <WavyDivider flip color="#E65100" opacity={0.45} />
      </section>

      {/* Info Grid */}
      <section ref={ref3} className="reveal section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 className="section-title">Find Us</h2>
          <p className="section-subtitle">మాను కనుగొనండి</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 40 }}>
            {INFO.map((item, i) => (
              <div key={i} className="card" style={{ padding: '24px 20px', borderTop: `4px solid ${item.color}` }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{item.icon}</div>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, color: '#999', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
                  {item.label}
                </p>
                {item.href
                  ? <a href={item.href} style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: item.color, fontWeight: 600, textDecoration: 'none' }}>{item.value}</a>
                  : <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, color: '#333', fontWeight: 500, lineHeight: 1.5 }}>{item.value}</p>
                }
              </div>
            ))}
          </div>
          <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 40px rgba(27,94,32,0.15)', marginBottom: 20 }}>
            <iframe
              title="Ala Hasthinapuramlo Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.5!3d17.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmFuYXN0aGFsaXB1cmFt!5e0!3m2!1sen!2sin!4v1"
              width="100%" height="320"
              style={{ border: 0, display: 'block' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="https://maps.google.com/?q=Vanasthalipuram+Post+Office+Hastina+Puram+Colony+Hyderabad"
              target="_blank" rel="noopener noreferrer" className="btn btn-cta" style={{ fontSize: 15 }}>
              📍 Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ref4} className="reveal" style={{ background: 'linear-gradient(135deg, #E65100, #BF360C)', padding: '48px 20px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 500 }}>
          <h2 style={{ color: 'white', fontFamily: 'Tiro Telugu, serif', marginBottom: 12 }}>రుచి చూడండి!</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Poppins, sans-serif', marginBottom: 28 }}>
            Come visit us or order online — we'd love to serve you!
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:${PHONE}`} className="btn" style={{ background: 'white', color: '#E65100', fontWeight: 700 }}>📞 Call Now</a>
            <a href={`${WA_BASE}${encodeURIComponent('Hi! I would like to order from Ala Hasthinapuramlo. My address is: ')}`}
              target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">💬 WhatsApp Order</a>
          </div>
        </div>
      </section>
    </div>
  )
}
