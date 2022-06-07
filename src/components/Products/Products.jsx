import React from "react";
import Product from "./Product/Product";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:8080/products").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,200px)",
          margin: "auto",
        }}
      >
        {data.map((prod) => (
          <Product prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
