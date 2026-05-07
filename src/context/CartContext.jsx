import { createContext, useContext, useState } from 'react'
import { cartItems as initialCart, SHIPPING_FEE } from '@/data/cart'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(initialCart)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const total = subtotal + SHIPPING_FEE

  function incrementQty(id) {
    setItems((prev) => prev.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item))
  }

  function decrementQty(id) {
    setItems((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: item.qty - 1 } : item)
        .filter((item) => item.qty > 0)
    )
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ items, subtotal, total, incrementQty, decrementQty, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
