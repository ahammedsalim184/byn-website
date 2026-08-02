import "../styles/products.css";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const products = [
    {
      icon: <FaUtensils />,
      title: t("products.items.kitchen.title"),
      text: t("products.items.kitchen.text"),
    },
    {
      icon: <FaCoffee />,
      title: t("products.items.coffee.title"),
      text: t("products.items.coffee.text"),
    },
    {
      icon: <FaBuilding />,
      title: t("products.items.building.title"),
      text: t("products.items.building.text"),
    },
    {
      icon: <FaBolt />,
      title: t("products.items.electrical.title"),
      text: t("products.items.electrical.text"),
    },
    {
      icon: <FaDesktop />,
      title: t("products.items.it.title"),
      text: t("products.items.it.text"),
    },
    {
      icon: <FaCogs />,
      title: t("products.items.industrial.title"),
      text: t("products.items.industrial.text"),
    },
  ];

  return (
    <section className="products" id="products">
      <div className="container">
        <span className="section-tag">
          {t("products.tag")}
        </span>

        <h2>{t("products.title")}</h2>

        <p className="section-description">
          {t("products.description")}
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

                <div className="icon">
                  {product.icon}
                </div>

                <h3>{product.title}</h3>

                <p>{product.text}</p>

                <a href="#quote" className="learn-btn">
                  {t("products.learnMore")} →
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