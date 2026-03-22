import { createContext, useContext, useReducer, useCallback } from 'react'
import { WA_BASE } from '../data/constants'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.find(i => i.id === action.item.id)
      if (existing) return state.map(i => i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i)
      return [...state, { ...action.item, qty: 1 }]
    }
    case 'INC':
      return state.map(i => i.id === action.id ? { ...i, qty: i.qty + 1 } : i)
    case 'DEC':
      return state.map(i => i.id === action.id ? { ...i, qty: i.qty - 1 } : i).filter(i => i.qty > 0)
    case 'REMOVE':
      return state.filter(i => i.id !== action.id)
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [])

  const add    = useCallback(item => dispatch({ type: 'ADD', item }), [])
  const inc    = useCallback(id   => dispatch({ type: 'INC', id }), [])
  const dec    = useCallback(id   => dispatch({ type: 'DEC', id }), [])
  const remove = useCallback(id   => dispatch({ type: 'REMOVE', id }), [])
  const clear  = useCallback(()   => dispatch({ type: 'CLEAR' }), [])

  const total     = items.reduce((s, i) => s + i.price * i.qty, 0)
  const itemCount = items.reduce((s, i) => s + i.qty, 0)

  const checkoutWA = useCallback(() => {
    if (!items.length) return
    const lines = items.map(i => `• ${i.name} x${i.qty} = ₹${i.price * i.qty}`).join('\n')
    const msg = `Hi! I'd like to order from Ala Hasthinapuramlo:\n\n${lines}\n\nTotal: ₹${total}\n\nMy address is: `
    window.open(`${WA_BASE}${encodeURIComponent(msg)}`, '_blank')
  }, [items, total])

  return (
    <CartContext.Provider value={{ items, add, inc, dec, remove, clear, total, itemCount, checkoutWA }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
