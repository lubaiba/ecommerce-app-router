'use client'
import React from 'react'
import Link from 'next/link';
import { useState ,useEffect} from 'react';
import { ProductsService } from '../services/product-service';
export default function ProductList(props:any) {
    console.log("products page executed",props);
    var footer = {
      minHeight: "100vh",
    };
    const [product, setProduct] = useState([]);
    useEffect(() => {
      const fetchProductList = async () => {
    var products=await ProductsService.getProducts();
    setProduct(products.data);
      };
    fetchProductList();
  },[]);

   const [cart,setAddCart]=useState({});
   const addToCartItem=async(productId:any)=>{
    var cartdata=await ProductsService.addToCart(productId);
    setAddCart(cartdata.line_items);
   } 
  
  return (
    <>
    <div className="container"style={footer} >
      <div className="row gap-4 pt-3 d-flex justify-content-center">
        <h1 className="text-center fw-bold text-danger">Our Products</h1>
        {product.map((p: any) => (  
          <div
            className="col-md-3 border d-flex flex-column flex-wrap border-secondary-subtle border-2 text-center bg-light"
            key={p.id}
          >
         
              <div className="d-flex flex-column pt-2">
                <label className="bg-success position-absolute text-white pe-2 ps-2">
                  In Stock
                </label>
                <img
                  src={p.image?.url}
                  alt="product"
                  height={260}
                  width={200}
                />
              </div>
              <div className="pt-2">
              <Link href={'/products/' + p.id }><h4 className="text-decoration-none">{p.name}</h4></Link>
                <p>{p.description}</p>
                <div>
                  <span className="fw-bold">
                    {p.price.formatted_with_symbol}
                  </span>
                </div>
                <div className="pb-2 d-flex gap-2 justify-content-center">
                  <Link href={'/cart'} >
                    <button onClick={()=>addToCartItem(p.id)} className="btn btn-success">Add To Cart</button>
                  </Link>
                  <a href="" className="btn btn-danger">
                    {" "}
                    <i className="fa fa-heart"></i>{" "}
                  </a>
                  <a href={'/products/' + p.id} className="btn btn-success">
                    {" "}
                    View{" "}
                  </a>
                </div>
              </div>
            </div>
      
        ))}
    </div>
  </div>
  </>
);
}
