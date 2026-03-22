import { REVIEWS, WA_BASE } from '../data/constants'
import useScrollReveal from '../components/useScrollReveal'
import VideoPlayer from '../components/VideoPlayer'
import { LotusOrnament, WavyDivider } from '../components/SvgAssets'

/* ── Customer review video — plain path served from public/videos/ ── */
const CUSTOMER_VIDEO = '/videos/sainath_ramachandhraa_1773377006_3851687409121814077_6060227238.mp4'

function StarRating({ count, size = 16 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ fontSize: size, color: i <= count ? '#F9A825' : '#ddd' }}>★</span>
      ))}
    </div>
  )
}

function ReviewCard({ review, index }) {
  const colors      = ['#E8F5E9', '#FFF3E0', '#E3F2FD', '#F3E5F5', '#FFF8E1', '#E0F2F1']
  const borderColors = ['#1B5E20', '#E65100', '#1565C0', '#6A1B9A', '#F9A825', '#00695C']
  return (
    <div className="card" style={{ padding: '24px 22px', background: colors[index % colors.length], borderTop: `4px solid ${borderColors[index % borderColors.length]}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: borderColors[index % borderColors.length], display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 18, fontFamily: 'Poppins, sans-serif', flexShrink: 0 }}>
            {review.name[0]}
          </div>
          <div>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 15, color: '#222', marginBottom: 2 }}>{review.name}</p>
            <StarRating count={review.stars} />
          </div>
        </div>
        <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, color: '#999', whiteSpace: 'nowrap' }}>{review.date}</span>
      </div>
      <p style={{ fontFamily: review.lang === 'te' ? 'Tiro Telugu, serif' : 'Poppins, sans-serif', fontSize: review.lang === 'te' ? 15 : 14, color: '#333', lineHeight: 1.7 }}>
        "{review.text}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 14, paddingTop: 12, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <span style={{ fontSize: 14 }}>🔍</span>
        <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, color: '#888' }}>Google Review</span>
      </div>
    </div>
  )
}

export default function Reviews() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()
  const avgRating = (REVIEWS.reduce((s, r) => s + r.stars, 0) / REVIEWS.length).toFixed(1)

  return (
    <div className="page-enter" style={{ paddingTop: 64, minHeight: '100vh', background: '#FFFDE7' }}>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1B5E20, #2E7D32)', padding: '48px 20px 40px', textAlign: 'center' }}>
        <div className="kolam-divider" style={{ color: '#F9A825', marginBottom: 12 }}>✦ ✦ ✦</div>
        <h1 style={{ color: '#F9A825', fontFamily: 'Tiro Telugu, serif', marginBottom: 8 }}>కస్టమర్ రివ్యూలు</h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 17 }}>
          Customer Reviews — Real people, real experiences
        </p>
      </div>

      {/* Rating Banner */}
      <section ref={ref1} className="reveal section" style={{ paddingBottom: 20 }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <div style={{ background: 'white', borderRadius: 24, padding: '40px 32px', textAlign: 'center', boxShadow: '0 8px 40px rgba(27,94,32,0.12)' }}>
            <div style={{ fontSize: 64, marginBottom: 8 }}>⭐</div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(48px, 10vw, 72px)', fontWeight: 800, color: '#1B5E20', lineHeight: 1 }}>
              {avgRating}<span style={{ fontSize: '40%', color: '#999', fontWeight: 400 }}> / 5</span>
            </div>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, color: '#666', marginTop: 8, marginBottom: 24 }}>
              Based on <strong>92 Google Reviews</strong>
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 28 }}>
              {[1,2,3,4,5].map(i => <span key={i} style={{ fontSize: 28, color: i <= Math.round(avgRating) ? '#F9A825' : '#ddd' }}>★</span>)}
            </div>
            <a href="https://g.page/r/review" target="_blank" rel="noopener noreferrer" className="btn btn-cta" style={{ fontSize: 15 }}>
              ✍️ Write a Review →
            </a>
          </div>
        </div>
      </section>

      {/* ── Featured Customer Video Review ── */}
      {CUSTOMER_VIDEO && (
        <section ref={ref2} className="reveal" style={{ background: '#EDE8DC', padding: '64px 20px' }}>
          <WavyDivider color="#E65100" opacity={0.4} />
          <div className="container" style={{ paddingTop: 32 }}>
            <LotusOrnament />
            <h2 className="section-title">Featured Customer Review</h2>
            <p className="section-subtitle">వీడియో రివ్యూ — Real customer, real experience</p>

            <div style={{ maxWidth: 860, margin: '0 auto' }}>
              <style>{`
                .video-review-card { display: flex; gap: 40px; align-items: center; background: white; border-radius: 24px; padding: 36px; box-shadow: 0 8px 40px rgba(27,94,32,0.12); border: 2px solid #FFCC02; flex-wrap: wrap; }
                @media (max-width: 700px) { .video-review-card { flex-direction: column; align-items: center; padding: 20px; gap: 20px; } }
                .customer-video-wrap { flex-shrink: 0; }
                @media (max-width: 700px) { .customer-video-wrap { width: 100%; max-width: 260px; } }
              `}</style>
              <div className="video-review-card">
                <div className="customer-video-wrap">
                  <VideoPlayer
                    src={CUSTOMER_VIDEO}
                    muted={false}
                    style={{ width: 260, height: 462, borderRadius: 20, border: '4px solid #FFCC02' }}
                  />
                </div>

                {/* Review details */}
                <div style={{ flex: 1, minWidth: 240 }}>
                  <div style={{ fontSize: 72, color: '#1B5E20', lineHeight: 0.8, opacity: 0.2, fontFamily: 'Georgia, serif', marginBottom: 16 }}>"</div>

                  <p style={{ fontFamily: 'Tiro Telugu, serif', fontSize: 22, color: '#1B5E20', marginBottom: 12, lineHeight: 1.5 }}>
                    పులావ్ చాలా బాగుంది!
                  </p>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 16, color: '#444', lineHeight: 1.8, marginBottom: 24 }}>
                    "The pulav is absolutely amazing! Best in Hyderabad. Fresh, hot delivery too!"
                  </p>

                  <StarRating count={5} size={28} />

                  <div style={{ marginTop: 20 }}>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 17, color: '#1B5E20', marginBottom: 4 }}>
                      Sainath Ramachandhra
                    </p>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: '#888', marginBottom: 4 }}>
                      📍 Vanasthalipuram, Hyderabad
                    </p>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: '#aaa', marginBottom: 16 }}>
                      March 2025
                    </p>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: '#E8F5E9', borderRadius: 20, padding: '6px 14px',
                      border: '1px solid #A5D6A7',
                    }}>
                      <span style={{ color: '#2E7D32', fontSize: 14 }}>✓</span>
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 600, color: '#2E7D32' }}>
                        Verified Customer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WavyDivider flip color="#E65100" opacity={0.4} />
        </section>
      )}

      {/* Reviews Grid */}
      <section ref={ref3} className="reveal section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="kolam-divider">✦ ✦ ✦</div>
          <h2 className="section-title">What People Are Saying</h2>
          <p className="section-subtitle">మా కస్టమర్లు చెప్పేది</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {REVIEWS.map((review, i) => <ReviewCard key={i} review={review} index={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #E65100, #BF360C)', padding: '60px 20px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <h2 style={{ color: 'white', fontFamily: 'Tiro Telugu, serif', fontSize: 'clamp(20px, 4vw, 28px)', marginBottom: 12 }}>
            Try it yourself — Order now and taste the difference!
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Poppins, sans-serif', marginBottom: 28, fontSize: 15 }}>
            రుచి చూసి మీరే నిర్ణయించుకోండి!
          </p>
          <a href={`${WA_BASE}${encodeURIComponent('Hi! I would like to order from Ala Hasthinapuramlo. My address is: ')}`}
            target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ fontSize: 16, padding: '16px 36px' }}>
            💬 Order on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
