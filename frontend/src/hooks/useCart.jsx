import { v4 as uuidv4 }  from "uuid"
import { useContext, createContext, useState } from "react"

const CartContext = createContext([])

function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    
    function AddItem(data) {
     const verifyCart = items.find((item) => item.id == data.id)
     const newItem = {
      id: uuidv4(),
      image: data.image,
      titulo: data.titulo,
      valor: data.valor,
      quantity: data.valor
     } 

     if(verifyCart) {
      let update = items.map((item) => {
        item._id == id ?  { ...item, quantity: Number(quantity + quantity) } : item
      })
      console.log(items)
      setItems(update)
     }

     setItems(newItem)
     alert(items)
    }

    return (
      <CartContext.Provider value={{ AddItem }}>
        {children}
      </CartContext.Provider>
    )
}

function useCart() {
  const content = useContext(CartContext)
  return content
}

export { useCart, CartProvider, CartContext }