import { Search } from "lucide-react";
import { Input, Button, Header, Container } from './style'
import shopeeImage from '../../../assets/d5b7d915138b4b295aea0ed459bc2a4e.jpg'

export function DesktopHeader() {
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
				onChange={(e) => findCategory(e.target.value)}
			  />
			  <Button onClick={() => {}}>
			   <Search color={"#fff"} size={20} className="text-recipe-dark" />
			  </Button>
            </nav>
            </Container>
         </Header>
        </>
    )
}