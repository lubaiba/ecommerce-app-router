'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { ProductsService } from '../services/product-service';

export default function Addtocart(props:any) {
    const [cart,setAddCart]=useState({});
    const addToCartItem=async(productId:any)=>{
     var cartdata=await ProductsService.addToCart(productId);
     setAddCart(cartdata.line_items);
    } 
  return (
    <div>
       <Link href='/cart'>
             <button onClick={(()=>addToCartItem(props.productId))} className="btn btn-success">Add To Cart</button> 
            </Link>
    </div>
  )
}
