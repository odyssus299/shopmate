import { useEffect, useState } from "react";

import { useCart } from "../context/CardContext";
import "./ProductCard.css";

export const ProductCard = ({product}) => {
  const { addToCart, cartList, removeFromCart } = useCart();
  const {id, name, price, image} = product;
  const [isInCart, setIsInCart] = useState(false)
  
  useEffect( () => {
    const productInCartList = cartList.find(item => item.id === id);
    productInCartList ? setIsInCart(true) : setIsInCart(false) 
  }, [cartList, id])

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ?  <button className="remove" onClick={() => removeFromCart(product)}>Remove</button>  : <button onClick={() => addToCart(product)}>Add To Cart</button>}
        
      </div>
    </div>
  )
}
