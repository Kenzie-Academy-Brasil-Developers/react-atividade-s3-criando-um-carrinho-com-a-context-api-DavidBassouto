import { useContext } from "react";

import { CatalogueContext } from "../../Providers/catalogue";
import { CartContext } from "../../Providers/cart";
import { Button } from "../Button";
import { Container, StyledLi } from "./style";

// import { Container, List } from "./styles";

export const ProductList = ({ type }) => {
  // type determinará se nosso componente será do tipo "catalogue" ou "cart"
  // veremos melhor como isso irá funcionar quando formos para nosso App.js
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <Container>
      {type === "catalogue" &&
        catalogue.map((item, index) => (
          <StyledLi key={index}>
            <p>{item.name}</p> <div><Button type={type} className={type} item={item} /></div> 
          </StyledLi>
        ))}

      {type === "cart" &&
        cart.map((item, index) => (
          <StyledLi key={index}>
            <p>{item.name}</p>  <div><Button type={type} className={type} item={item} /></div> 
          </StyledLi>
        ))}
    </Container>
  );
};
