import React, { useEffect, useState } from "react";
import "./Products.css";

export default function Products() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let headers = {
      Authorization:
        "Bearer 185dee9f1450ba46c1d01831b9b2c43760ee664eb7bcef7abddce1830718874eed728e777e31d19af755d9e5c69d59eb369e72046a6492a4ef41d26d756f46ce15662640873b0098c585ca11b66449fe5b196c9d75c5bd9d00639be8a96be4f454d6e6b2c362504cfa39e87dabe183e13bfd3b6041d2893e8440eb3198380d72",
    };
    let a = await fetch("http://localhost:1337/api/products?populate=*", {
      headers: headers,
    });
    const data = await a.json();
    setproducts(data.data);
  };
  console.log(products);
  return (
    <div className="products">
      {products.map((item) => {
        return (
          <div className="product-container">
            <a href="/">
              <img alt={item.attributes.Title} src={item.attributes.Image.attributes.formats.medium.url}/>
            </a>
            <div>
              <h3>{item.attributes.Title}</h3>
              <h2>{item.attributes.Brand}</h2>
              <h3>{item.attributes.Category}</h3>
              <p>{item.attributes.Price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
