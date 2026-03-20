import { useState, useContext, createContext, useEffect } from "react"
import { api } from "../../api/api"

const ProductsContext = createContext([])

function ProductsProvider({ children }) {
    const [listProdutos, setListProdutos] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
     api.get('/products/show')
     .then((e) => {
        setListProdutos(e.data)
     })
    }, [])

    return (
        <ProductsContext.Provider value={{
          listProdutos,
          setListProdutos,
          filteredProducts,
          setFilteredProducts,
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

function useProcuts() {
    const content = useContext(ProductsContext)
    
    if(!content) {
      throw new Error("Contexto de produtos não provido")
    }

    return content
}

export { useProcuts, ProductsProvider, ProductsContext }