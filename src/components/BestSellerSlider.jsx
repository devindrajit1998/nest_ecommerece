import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ProductCardSecondary from "./ProductCardSecondary";

export default function BestSellerSlider() {
  return (
    <Swiper
      className="bestsellerSlider"
      modules={[Autoplay]}
      slidesPerView={4}
      spaceBetween={0}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 4,
        }
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide>
        <ProductCardSecondary />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCardSecondary />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCardSecondary />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCardSecondary />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCardSecondary />
      </SwiperSlide>
    </Swiper>
  );
}
