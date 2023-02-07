import React from "react";
import ProductCart from "./ProductCart";
import "./style.css"

export default function ProductList({data}) {
  return (
    <>
    {
      data?.map((items) =>(
        <ProductCart items={items} />

      ))
    }
    </>
  );
}
