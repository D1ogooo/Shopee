import { useContext, createContext, useState } from "react"

const CartContext = createContext([])

function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    
    function AddItem(data) {
     const verifyCart = items.filter((e) => {
        e._id == data.id
     })
     
     const newItem = 

     if(verifyCart) {
      let update = items.map((item) => {
        item._id == id ?  { ...item,  } : item
      })
      console.log(items)
      setItems(update)
     }

     setItems(newItem)
    }

    return (
      <CartContext.Provider value={{ AddItem }}>
        {children}
      </CartContext.Provider>
    )
}

function useCart() {
  content = useContext(CartContext)
  return content
}

export { useCart, CartProvider, CartContext }