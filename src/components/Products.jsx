import "../styles/products.css";

import {
  FaUtensils,
  FaCoffee,
  FaBuilding,
  FaBolt,
  FaDesktop,
  FaCogs,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";

function Products() {
  const products = [
    {
      icon: <FaUtensils />,
      title: "Commercial Kitchen Equipment",
      text: "Professional kitchen equipment for restaurants and commercial kitchens.",
    },
    {
      icon: <FaCoffee />,
      title: "Coffee Machines",
      text: "Espresso machines, grinders, brewers and complete café equipment.",
    },
    {
      icon: <FaBuilding />,
      title: "Building Materials",
      text: "Construction materials, hardware, plumbing and finishing products.",
    },
    {
      icon: <FaBolt />,
      title: "Electrical Products",
      text: "Cables, switches, lighting, electrical accessories and power equipment.",
    },
    {
      icon: <FaDesktop />,
      title: "IT Accessories",
      text: "Networking equipment, cables, storage devices and office technology.",
    },
    {
      icon: <FaCogs />,
      title: "Machinery & Industrial Equipment",
      text: "Industrial machinery, pumps, compressors and workshop equipment.",
    },
  ];

  return (
    <section className="products" id="products">
      <div className="container">
        <span className="section-tag">OUR PRODUCTS</span>

        <h2>Products & Business Categories</h2>

        <p className="section-description">
          We provide reliable sourcing and commercial supply solutions across
          multiple industries throughout Saudi Arabia.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="products-slider"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="product-card">
                <div className="icon">{product.icon}</div>

                <h3>{product.title}</h3>

                <p>{product.text}</p>

                <a href="#quote" className="learn-btn">
                  Learn More →
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Products;