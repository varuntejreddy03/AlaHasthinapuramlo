import { useState, useRef, useEffect } from 'react'
import { MENU, CATEGORIES } from '../data/constants'
import { LotusOrnament, WavyDivider, TempleSketch, PalmSketch } from '../components/SvgAssets'
import { useCart } from '../context/CartContext'

const FOOD_IMAGES = {
  'Chicken Pulav':         'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80&auto=format&fit=crop',
  'Chicken Fry Pulav':     'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80&auto=format&fit=crop',
  'Special Chicken Pulav': 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80&auto=format&fit=crop',
  'Mutton Pulav':          'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80&auto=format&fit=crop',
  'Mutton Keema Pulav':    'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80&auto=format&fit=crop',
  'Egg Pulav':             'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80&auto=format&fit=crop',
  'Egg Bhurji Pulav':      'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80&auto=format&fit=crop',
  'Veg Pulav':             'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600&q=80&auto=format&fit=crop',
  'Paneer Pulav':          'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80&auto=format&fit=crop',
}

const BESTSELLERS = new Set(['Chicken Pulav', 'Special Chicken Pulav'])

function SpiceIndicator({ level }) {
  return (
    <span title={`Spice level: ${level}/3`} style={{ fontSize: 13, letterSpacing: 1 }}>
      {level === 0 ? '—' : '🌶️'.repeat(level)}
    </span>
  )
}

function MenuCard({ item }) {
  const [hovered, setHovered] = useState(false)
  const { items, add, inc, dec } = useCart()
  const cartItem = items.find(i => i.id === item.id)
  const qty = cartItem?.qty ?? 0
  const isBestseller = BESTSELLERS.has(item.name)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'white', borderRadius: 16, overflow: 'hidden',
        position: 'relative',
        boxShadow: hovered ? '0 12px 40px rgba(27,94,32,0.2)' : '0 4px 20px rgba(27,94,32,0.1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        display: 'flex', flexDirection: 'column',
        outline: qty > 0 ? '2px solid #1B5E20' : 'none',
      }}
    >
      {/* Bestseller ribbon */}
      {isBestseller && (
        <div style={{
          position: 'absolute', top: 18, right: -28, zIndex: 10,
          background: '#E65100', color: '#fff',
          fontFamily: 'Poppins, sans-serif', fontSize: 10, fontWeight: 700,
          letterSpacing: 0.8, padding: '5px 36px',
          transform: 'rotate(45deg)',
          boxShadow: '0 2px 8px rgba(230,81,0,0.4)',
          textTransform: 'uppercase', pointerEvents: 'none',
        }}>Bestseller</div>
      )}

      {/* Image */}
      <div style={{ height: 200, position: 'relative', overflow: 'hidden', background: '#f5f5f5', flexShrink: 0 }}>
        {FOOD_IMAGES[item.name] ? (
          <img
            src={FOOD_IMAGES[item.name]} alt={item.name} loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
          />
        ) : null}
        <div style={{
          display: FOOD_IMAGES[item.name] ? 'none' : 'flex',
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${item.veg ? '#E8F5E9' : '#FFF3E0'}, #FFFDE7)`,
          alignItems: 'center', justifyContent: 'center', fontSize: 64,
        }}>{item.emoji}</div>

        {/* Veg/NonVeg badge */}
        <div style={{
          position: 'absolute', top: 10, left: 10,
          background: 'white', borderRadius: 6, padding: '3px 8px',
          display: 'flex', alignItems: 'center', gap: 5,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          fontSize: 11, fontFamily: 'Poppins, sans-serif', fontWeight: 600,
          color: item.veg ? '#2E7D32' : '#C62828',
        }}>
          <span className={`veg-dot ${item.veg ? 'veg' : 'nonveg'}`} />
          {item.veg ? 'Veg' : 'Non-Veg'}
        </div>

        {/* Price badge */}
        <div style={{
          position: 'absolute', top: 10, right: 10,
          background: '#1B5E20', color: '#F9A825',
          borderRadius: 20, padding: '4px 12px',
          fontSize: 14, fontWeight: 700, fontFamily: 'Poppins, sans-serif',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}>₹{item.price}</div>
      </div>

      {/* Content */}
      <div style={{ padding: '14px 16px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1B5E20', marginBottom: 2, fontFamily: 'Poppins, sans-serif' }}>
          {item.name}
        </h3>
        {item.telugu && (
          <p style={{ fontFamily: 'Tiro Telugu, serif', fontSize: 12, color: '#888', marginBottom: 6 }}>
            {item.telugu}
          </p>
        )}
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, color: '#666', fontStyle: 'italic', marginBottom: 10, lineHeight: 1.5, flex: 1 }}>
          {item.desc}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <SpiceIndicator level={item.spice} />
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17, fontWeight: 700, color: '#F9A825' }}>
            ₹{item.price}
          </span>
        </div>

        {/* Add / Stepper */}
        {qty === 0 ? (
          <button
            onClick={() => add(item)}
            style={{
              width: '100%', padding: '11px 12px', borderRadius: 50,
              background: '#1B5E20', color: 'white', border: 'none',
              fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14,
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: 8,
              transition: 'background 0.2s, transform 0.15s',
              boxShadow: '0 3px 12px rgba(27,94,32,0.25)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#2E7D32'; e.currentTarget.style.transform = 'scale(1.02)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#1B5E20'; e.currentTarget.style.transform = 'scale(1)' }}
          >
            + Add to Cart
          </button>
        ) : (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: '#1B5E20', borderRadius: 50, padding: '4px 6px',
          }}>
            <button
              onClick={() => dec(item.id)}
              aria-label="Decrease quantity"
              style={{
                width: 34, height: 34, borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)', border: 'none',
                color: 'white', fontSize: 20, fontWeight: 700,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                lineHeight: 1,
              }}
            >−</button>
            <span style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 800,
              fontSize: 16, color: '#F9A825', minWidth: 28, textAlign: 'center',
            }}>{qty}</span>
            <button
              onClick={() => inc(item.id)}
              aria-label="Increase quantity"
              style={{
                width: 34, height: 34, borderRadius: '50%',
                background: '#F9A825', border: 'none',
                color: '#1B5E20', fontSize: 20, fontWeight: 700,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                lineHeight: 1,
              }}
            >+</button>
          </div>
        )}
      </div>
    </div>
  )
}

function CategoryTabs({ active, setActive, vegOnly, setVegOnly }) {
  const tabRef = useRef(null)
  useEffect(() => {
    const el = tabRef.current?.querySelector('[data-active="true"]')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [active])

  return (
    <div style={{
      position: 'sticky', top: 64, zIndex: 100,
      background: 'rgba(255,253,231,0.97)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(27,94,32,0.1)',
      boxShadow: '0 2px 12px rgba(27,94,32,0.08)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        maxWidth: 1280, margin: '0 auto', padding: '10px 16px', gap: 12,
      }}>
        <div ref={tabRef} style={{ display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none', flexShrink: 1 }}>
          {CATEGORIES.map(cat => {
            const isActive = active === cat.key
            return (
              <button key={cat.key} data-active={isActive} onClick={() => setActive(cat.key)}
                style={{
                  flex: '0 0 auto', height: 40, padding: '0 20px',
                  border: isActive ? 'none' : '1px solid #D4C9B0',
                  borderRadius: 20, cursor: 'pointer',
                  background: isActive ? '#1B5E20' : 'transparent',
                  fontFamily: 'Poppins, sans-serif', fontSize: 13,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#fff' : '#1B5E20',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}>
                <span style={{ fontSize: 16 }}>{cat.emoji}</span>{cat.label}
              </button>
            )
          })}
        </div>
        <label style={{
          display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', flexShrink: 0,
          fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600,
          color: vegOnly ? '#2E7D32' : '#666', whiteSpace: 'nowrap',
        }}>
          🟢 Veg Only
          <div onClick={() => setVegOnly(v => !v)} role="switch" aria-checked={vegOnly}
            style={{
              width: 40, height: 22, borderRadius: 11,
              background: vegOnly ? '#2E7D32' : '#ccc',
              position: 'relative', transition: 'background 0.2s', cursor: 'pointer', flexShrink: 0,
            }}>
            <div style={{
              position: 'absolute', top: 3, left: vegOnly ? 21 : 3,
              width: 16, height: 16, borderRadius: '50%', background: 'white',
              transition: 'left 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
            }} />
          </div>
        </label>
      </div>
    </div>
  )
}

function SearchBar({ value, onChange }) {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '16px 20px 0' }}>
      <div style={{
        border: `1px solid ${value ? '#1B5E20' : '#D4C9B0'}`,
        borderRadius: 12, background: 'white',
        display: 'flex', alignItems: 'center',
        boxShadow: '0 2px 8px rgba(27,94,32,0.06)',
      }}>
        <span style={{ padding: '0 12px', fontSize: 18, color: '#888', flexShrink: 0 }}>🔍</span>
        <input
          type="text" value={value} onChange={e => onChange(e.target.value)}
          placeholder="Search dishes..."
          style={{
            flex: 1, border: 'none', outline: 'none',
            fontFamily: 'Poppins, sans-serif', fontSize: 14,
            color: '#333', background: 'transparent', padding: '12px 0',
          }}
        />
        {value && (
          <button onClick={() => onChange('')} style={{
            padding: '0 14px', background: 'none', border: 'none',
            cursor: 'pointer', fontSize: 18, color: '#999',
            display: 'flex', alignItems: 'center',
          }}>×</button>
        )}
      </div>
    </div>
  )
}

/* Sticky cart bar shown at bottom when cart has items */
function CartBar({ onCartClick }) {
  const { itemCount, total } = useCart()
  if (itemCount === 0) return null
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 500,
      background: '#1B5E20',
      padding: '0 20px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: 60,
      boxShadow: '0 -4px 20px rgba(27,94,32,0.35)',
      animation: 'fadeInUp 0.3s ease',
    }} className="cart-bar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{
          background: '#F9A825', color: '#1B5E20',
          borderRadius: '50%', width: 28, height: 28,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 13,
        }}>{itemCount}</span>
        <span style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.85)', fontSize: 14 }}>
          {itemCount} item{itemCount > 1 ? 's' : ''} added
        </span>
      </div>
      <button
        onClick={onCartClick}
        style={{
          background: '#F9A825', color: '#1B5E20', border: 'none',
          borderRadius: 50, padding: '10px 24px',
          fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 15,
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
          boxShadow: '0 2px 12px rgba(249,168,37,0.4)',
        }}
      >
        🛒 View Cart — ₹{total}
      </button>
    </div>
  )
}

export default function Menu({ onCartClick }) {
  const [activeCategory, setActiveCategory] = useState('chicken')
  const [vegOnly, setVegOnly] = useState(false)
  const [search, setSearch] = useState('')

  const allItems = MENU[activeCategory] || []
  const filtered = allItems
    .filter(item => !vegOnly || item.veg)
    .filter(item => !search ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      (item.telugu || '').includes(search))

  return (
    <div className="page-enter" style={{ paddingTop: 64, minHeight: '100vh', background: '#FFFDE7', display: 'flex', flexDirection: 'column' }}>

      {/* Hero header */}
      <div style={{
        background: 'linear-gradient(135deg, #1B5E20, #2E7D32)',
        padding: '48px 20px 0', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <TempleSketch style={{ top: 0, left: 0, opacity: 0.12 }} />
        <PalmSketch style={{ bottom: 0, right: 0, opacity: 0.12, transform: 'scaleX(-1)' }} />
        <LotusOrnament color="rgba(249,168,37,0.85)" />
        <h1 style={{ color: '#F9A825', fontFamily: 'Tiro Telugu, serif', marginBottom: 8, position: 'relative', zIndex: 1 }}>
          మా మెనూ
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 17, marginBottom: 0, position: 'relative', zIndex: 1 }}>
          Our Menu — Fresh, Authentic, Delicious
        </p>
        <WavyDivider color="#E65100" opacity={0.55} />
      </div>

      <CategoryTabs active={activeCategory} setActive={setActiveCategory} vegOnly={vegOnly} setVegOnly={setVegOnly} />
      <SearchBar value={search} onChange={setSearch} />

      {/* Grid */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '24px 20px 80px', flex: 1, width: '100%' }}>
        <style>{`
          .menu-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
          @media (max-width: 900px) { .menu-grid { grid-template-columns: repeat(2,1fr); } }
          @media (max-width: 560px) { .menu-grid { grid-template-columns: 1fr; } }
        `}</style>

        {filtered.length > 0 ? (
          <div className="menu-grid">
            {filtered.map(item => <MenuCard key={item.id} item={item} />)}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#888' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🍽️</div>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15 }}>
              {search ? `No results for "${search}"` : 'No items in this category.'}
            </p>
            {search && (
              <button onClick={() => setSearch('')} style={{
                marginTop: 12, background: 'none', border: '1px solid #1B5E20',
                borderRadius: 20, padding: '8px 20px', cursor: 'pointer',
                color: '#1B5E20', fontFamily: 'Poppins, sans-serif', fontSize: 13,
              }}>Clear search</button>
            )}
          </div>
        )}
      </div>

      <CartBar onCartClick={onCartClick} />
    </div>
  )
}
