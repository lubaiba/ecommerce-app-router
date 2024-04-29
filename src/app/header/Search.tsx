"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Search = () => {

  const router = useRouter();
  const handleInputChange = (searchText:string) => {
    if(searchText === ''){
      router.replace(`/productList`);
    }else{
      router.replace(`/productList?search=${searchText}`);
    }
  };

  return (
    <>
        <form className="d-flex search-box ms-5 me-5" role="search">
            <input 
            className={"form-control me-2"}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={($e) => {
              handleInputChange($e.target.value);
            }}/>
            <button className="btn btn-outline-success text-white" type="submit">Search</button>
        </form>
    </>
  )
}

export default Search