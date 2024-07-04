import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Carousel } from 'antd'; 
import {image, images} from "../../assets/products"

export const Shop = () => {
  const contentStyle= {
    textAlign: 'center',
  };
  return (
    <div className="shop">
      <Carousel autoplaySpeed={1500} speed={1100} autoplay>
        <div>
          <h3 style={contentStyle}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUa_BdUr3BZZmYwm8P5JafPAqcyKE3BN74Vg&s" className="image" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiuSWThNsd0A4deyDs7i_fJ2m5um5qnB1QNfGzyFF3VrjiOaeiAk5GxaddwXZI00djJQ&usqp=CAU"
              className="image"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              src="https://webeminence.com/w-content/uploads/2021/02/iStock-831640620.jpg"
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
