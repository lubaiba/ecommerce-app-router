'use client'
import { ProductsDataType } from '@/app/services/classes';
import { ProductsService } from '../services/product-service';
import { useEffect, useState } from 'react';
import ProductFilter from '../components/filteredProducts/filteredProducts';
import ProductCard from '../components/productCard/ProductCard';

const ProductList = (props:any) => {
  const userInput = props.searchParams.search;
  const [category, setCategory] = useState<string>("");
  const [filterProducts, setFilterProducts] = useState<ProductsDataType[]>([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let filteredProducts;
        if (category === "") {
         let response = await ProductsService.getProducts();
         filteredProducts = response.data
        } else {
          let response = await ProductsService.filterProducts(category);
          filteredProducts = response
          console.log('from else ',filteredProducts);
          
        }

        if (userInput) {
          const filteredProductsBySearch = filteredProducts.filter(
            (p: ProductsDataType) =>
              p.name.toLowerCase().includes(userInput.toLowerCase())
          );
          setFilterProducts(filteredProductsBySearch);
        } else {
          setFilterProducts(filteredProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, userInput]);

  return (
    <div>
      <div className="row m-0 position-relative">
        <div className="col-2 position-absolute bg-white h-100 border-end">
          <ProductFilter
            setCategory={setCategory}
          />
        </div>
        {loading ? (
          <div
            className="min-vh-100 row m-0 col-12 d-flex flex-row flex-wrap justify-content-start me-0"
            style={{
              padding: "5% 1% 2% 24%",
              backgroundColor: "#f0efeb",
              minHeight: "90vh",
            }}
          >
          </div>
        ) : (
          <div
            className="col-12 d-flex flex-row flex-wrap justify-content-start me-0"
            style={{
              padding: "5% 1% 2% 24%",
              backgroundColor: "rgb(11, 11,)",
              minHeight: "90vh",
            }}
          >
            {filterProducts.length !== 0 ?(
              filterProducts.map((p: ProductsDataType) => ( 
                
                <ProductCard key={p.id} products={p}/>
        
              ))
            ) : (
              <div className="text-center d-flex flex-column w-100 align-self-center">
                <h1>Sorry, no results found!</h1>
                <span className="text-secondary fs-5">
                  Please check the spelling or try searching for something else
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList