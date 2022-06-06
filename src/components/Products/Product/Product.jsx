import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = (props) => {
  // Note: this id should come from api
  const product = { id: 1 };
  const { cartItem,  addCart , removeCart } = useContext(CartContext)
  let prod = props.prod
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{prod.name}</h3>
      <h6 data-cy="product-description">{prod.description}</h6>
      <div>
      <button data-cy="product-add-item-to-cart-button" onClick={addCart} >Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {cartItem.count}
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button" onClick={removeCart} >Remove from cart</button>
      </div>

      </div>
      
    </div>
  );
};

export default Product;
