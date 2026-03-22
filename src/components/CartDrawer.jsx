import { useCart } from '../context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, inc, dec, remove, clear, total, itemCount, checkoutWA } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 1100,
          background: 'rgba(0,0,0,0.45)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}
      />

      {/* Drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 'min(420px, 100vw)',
        background: '#fff',
        zIndex: 1200,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex', flexDirection: 'column',
        boxShadow: '-8px 0 40px rgba(0,0,0,0.18)',
      }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 20px 16px',
          borderBottom: '1px solid #eee',
          background: '#1B5E20',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 22 }}>🛒</span>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 18, color: '#F9A825' }}>
              Your Cart
            </span>
            {itemCount > 0 && (
              <span style={{
                background: '#F9A825', color: '#1B5E20',
                borderRadius: 20, padding: '2px 10px',
                fontSize: 13, fontWeight: 700, fontFamily: 'Poppins, sans-serif',
              }}>{itemCount} item{itemCount > 1 ? 's' : ''}</span>
            )}
          </div>
          <button onClick={onClose} aria-label="Close cart" style={{
            background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%',
            width: 36, height: 36, cursor: 'pointer', fontSize: 20, color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>×</button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 0' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#aaa' }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🍽️</div>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: '#888' }}>
                Your cart is empty
              </p>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: '#bbb', marginTop: 6 }}>
                Add items from the menu
              </p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 20px',
                borderBottom: '1px solid #f5f5f5',
              }}>
                {/* Veg dot */}
                <span className={`veg-dot ${item.veg ? 'veg' : 'nonveg'}`} style={{ flexShrink: 0 }} />

                {/* Name + price */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontFamily: 'Poppins, sans-serif', fontWeight: 600,
                    fontSize: 14, color: '#1B5E20',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>{item.name}</p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, color: '#888', marginTop: 2 }}>
                    ₹{item.price} each
                  </p>
                </div>

                {/* Qty stepper */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: 0 }}>
                  <button onClick={() => dec(item.id)} aria-label="Decrease" style={stepperBtn('#f5f5f5', '#333')}>−</button>
                  <span style={{
                    minWidth: 28, textAlign: 'center',
                    fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14, color: '#1B5E20',
                  }}>{item.qty}</span>
                  <button onClick={() => inc(item.id)} aria-label="Increase" style={stepperBtn('#1B5E20', '#fff')}>+</button>
                </div>

                {/* Line total */}
                <span style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: 700,
                  fontSize: 14, color: '#F9A825', minWidth: 52, textAlign: 'right', flexShrink: 0,
                }}>₹{item.price * item.qty}</span>

                {/* Remove */}
                <button onClick={() => remove(item.id)} aria-label={`Remove ${item.name}`} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#ccc', fontSize: 18, padding: '0 0 0 4px', flexShrink: 0,
                  lineHeight: 1,
                }}>×</button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{
            borderTop: '1px solid #eee',
            padding: '16px 20px 20px',
            background: '#fafafa',
          }}>
            {/* Total row */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: 16,
            }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, color: '#555' }}>
                Total ({itemCount} item{itemCount > 1 ? 's' : ''})
              </span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 22, color: '#1B5E20' }}>
                ₹{total}
              </span>
            </div>

            {/* Checkout */}
            <button
              onClick={() => { checkoutWA(); onClose() }}
              style={{
                width: '100%', padding: '15px', borderRadius: 12,
                background: '#25D366', color: 'white', border: 'none',
                fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 16,
                cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 10,
                boxShadow: '0 4px 16px rgba(37,211,102,0.4)',
                transition: 'transform 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              💬 Order on WhatsApp — ₹{total}
            </button>

            {/* Clear */}
            <button onClick={clear} style={{
              width: '100%', marginTop: 10, padding: '10px',
              background: 'none', border: '1px solid #eee', borderRadius: 10,
              fontFamily: 'Poppins, sans-serif', fontSize: 13, color: '#aaa',
              cursor: 'pointer',
            }}>
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}

function stepperBtn(bg, color) {
  return {
    width: 30, height: 30, borderRadius: 8,
    background: bg, color, border: 'none',
    fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 18,
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    lineHeight: 1, transition: 'opacity 0.15s',
  }
}
