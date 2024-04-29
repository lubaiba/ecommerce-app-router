import Link from 'next/link'
import React from 'react'
import { ProductsDataType } from '@/app/services/classes';
import { ProductsService } from '@/app/services/product-service';
import { useState } from 'react';
const ProductCard = (props:any) => {  

    const product: ProductsDataType = props.products;
    const [cart,setAddCart]=useState({});
    const addToCartItem=async(productId:any)=>{
     var cartdata=await ProductsService.addToCart(productId);
     setAddCart(cartdata.line_items);
    } 
   
  return (
     <> 

          <div  className="col-md-3 mb-4 ms-4 col-12 border d-flex flex-wrap border-secondary-subtle border-2 text-center bg-light"> 
              <div className="d-flex flex-column pt-2">
                <label className="bg-success position-absolute text-white pe-2 ps-2">
                  In Stock
                </label>
                <img
                  src={product.image?.url}
                  alt="product"
                  height={260}
                  width={200}
                />
              </div>
              <div className="pt-2">
              <Link href={'/products/' + product.id }><h4 className="text-decoration-none">{product.name}</h4></Link>
                <p>{product.description}</p>
                <div>
                  <span className="fw-bold">
                    {product.price.formatted_with_symbol}
                  </span>
                </div>
                <div className="pb-2 d-flex gap-2 justify-content-center">
                  <Link href={'/cart'} >
                    <button onClick={()=>addToCartItem(product.id)} className="btn btn-success">Add To Cart</button>
                  </Link>
                  <a href="" className="btn btn-danger">
                    {" "}
                    <i className="fa fa-heart"></i>{" "}
                  </a>
                  <a href={'/products/' + product.id} className="btn btn-success">
                    {" "}
                    View{" "}
                  </a>
                </div>
              </div>
            </div>
      
            </>
  )
  }

export default ProductCard