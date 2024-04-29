'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import { ProductsService } from '../services/product-service';

export default function Cart() { 
  var footer = {
    minHeight: "100vh",
  };
  const [cart, setCart] = useState<{[line_items:string]:any}>({});
 const getHeaders = () => {
    const publicKey = "pk_5621351f171389979a3ef502a91eba7fdabc4b7f8070a";
    return {
      "X-Authorization": publicKey,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  };
  useEffect(() => {
    const fetchCartList = async () => {
  var cart=await ProductsService.cartItem();
  setCart(cart);
    };
  fetchCartList();
},[]);

  const handleRemoveFromCart = async (lineItemId:any) => {
    const cartId = "cart_kpnNwAWXE95mXB";
    try {
      await fetch(
        `https://api.chec.io/v1/carts/${cartId}/items/${lineItemId}`,
        {
          method: "DELETE",
          headers: getHeaders(),
        }
      );
      console.log("Product removed from cart");

      const response = await fetch("https://api.chec.io/v1/carts", {
        headers: getHeaders(),
      });
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };
  if (!cart) {
    return <div>Loading...</div>;
  }
  
  return (
    <>  
      <div className="container d-flex flex-column gap-3" style={footer}>
        <h1 className='pt-3'>Your Shopping Cart</h1>
        <ul>
          {cart.line_items &&
            cart.line_items.map((item:any) => (
              <li key={item.id} className="pt-3">
                {item.name}
                <br></br>
                Quantity: {item.quantity}
                <br></br>
                Price: {item.price.formatted_with_symbol}
                <br />
                <div className="pt-2">
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="btn btn-primary"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
        </ul>
        <div className='pb-3'>
          <button className="btn btn-dark">CHECKOUT</button>
        </div>
      </div>
    </>
  );
};
