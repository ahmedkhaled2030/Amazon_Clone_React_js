import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="New Apple AirPods Pro + AppleCare+ for Headphones (2 Years)..."
            price={157.0}
            image="https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SX466_.jpg"
            rating={3}
          />
          <Product
            id="3"
            title="AMD Ryzen 5 5600X 6-core, 12-Thread Unlocked Desktop ..."
            price={1299.0}
            image="https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Razer Kraken V3 HyperSense Wired USB Gaming Headset ..."
            price={129.0}
            image="https://m.media-amazon.com/images/I/61hJqr7P+iL._AC_UY327_FMwebp_QL65_.jpg"
            rating={2}
          />
          <Product
            id="4"
            title="2021 Apple iPad Mini (Wi-Fi, 64GB) - Space Gray ..."
            price={300.0}
            image="https://m.media-amazon.com/images/I/71ey-9D8yDL._AC_UL320_.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id="5"
            title="Sceptre Curved 24 75Hz Professional LED Monitor 1080p ..."
            price={184.0}
            image="https://m.media-amazon.com/images/I/81SoE0g+uqL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="6"
            title="Seagate Portable 2TB External Hard Drive Portable HDD ..."
            price={61.99}
            image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="7"
            title="EVGA GeForce RTX 3090 FTW3 Ultra Gaming, 24GB GDDR ..."
            price={1800}
            image="https://m.media-amazon.com/images/I/81-GWj0nEkL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
