import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../styles/Carousel.module.css"; // Import custom styles

const Carousel = () => {
  const slides = [
    { id: 1, image: "/images/home-cleaning.png", title: "Professional Home Cleaning", text: "Get your home sparkling clean with trusted local experts." },
    { id: 2, image: "/images/home-cleaning1.jpg", title: "Professional Home Cleaning", text: "Get your home sparkling clean with trusted local experts." },
    { id: 3, image: "/images/home-cleaning2.jpg", title: "Professional Home Cleaning", text: "Get your home sparkling clean with trusted local experts." },
    { id: 4, image: "/images/home-cleaning3.jpg", title: "Professional Home Cleaning", text: "Get your home sparkling clean with trusted local experts." },
    { id: 5, image: "/images/home-cleaning4.jpg", title: "Professional Home Cleaning", text: "Get your home sparkling clean with trusted local experts." },
    { id: 5, image: "/images/home-cleaning5.jpg", title: "Professional Home Cleaning", text: "Get your home sparkling clean with trusted local experts." }
    // { id: 2, image: "/images/img2.jpg", title: "Fast Delivery", text: "Get fresh Gangajal delivered to your doorstep" },
    // { id: 3, image: "/images/img3.jpg", title: "100% Authentic", text: "Certified and pure holy water from the source" }
  ];

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={5}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.swiperSlide}>
            <img src={slide.image} alt={slide.title} className={styles.slideImage} />
            <div className={styles.overlay}>
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
