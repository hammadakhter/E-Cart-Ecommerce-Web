import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Carousel } from 'antd';  

export const Shop = () => {
  const contentStyle= {
    textAlign: 'center',
  };
  return (
    <div className="shop">
      <Carousel autoplaySpeed={1500} speed={1100} autoplay>
        <div>
          <h3 style={contentStyle}>
            <img src="./carousel (1).png" className="image" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              src="./carousel 4.png"
              className="image"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              src="https://webeminence.com/wp-content/uploads/2021/02/iStock-831640620.jpg"
              className="image"
            />
          </h3>
        </div>
      </Carousel>

      <div className="shopTitle">
        <h1>E-cart Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
