import { useState, useMemo, useContext, useEffect } from "react";
import { useProcuts } from "../../../hooks/useProducts";
import { useNavigate } from "react-router-dom";
import { Search, LogOut } from "lucide-react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Input, Button, Header, Container } from './style'
import shopeeImage from '../../../assets/d5b7d915138b4b295aea0ed459bc2a4e.jpg'

export function DesktopHeader() {
  const [busca, setBusca] = useState("")
  const { listProdutos, setFilteredProducts } = useProcuts()
  const { loggout } = useContext(AuthContext)
  const navigate = useNavigate()

  async function handleLoggout() {
    loggout()
    navigate('/')
  }

  const filteredProducts = useMemo(() => {
    return listProdutos.filter(product =>
      product.titulo.toLowerCase().includes(busca.toLowerCase())
    )
  }, [listProdutos, busca])

  useEffect(() => {
    setFilteredProducts(filteredProducts)
  }, [filteredProducts, setFilteredProducts])


  return (
    <>
      <Header>
        <Container>
          <section>
            <img src={shopeeImage} alt="" />
          </section>
          <nav>
            <Input
              id="category-search"
              type="text"
              placeholder="O que você está buscando?"
              onChange={(e) => setBusca(e.target.value)}
            />
            <div style={{ display: "flex" }}>
              <Button onClick={handleLoggout}>
                <LogOut color={"#fff"} size={20} />
              </Button>
            </div>
          </nav>
        </Container>
      </Header>
    </>
  )
}