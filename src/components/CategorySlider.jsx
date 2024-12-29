import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";

export default function CategorySlider() {

  const category = useSelector((state) => state.commonFetchSlice.categoryData);
  
  return (
    <Swiper
      className="categorySlider"
      slidesPerView={8}
      spaceBetween={20}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
      }}
      modules={[Autoplay]}
    >
      {category?.data?.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <CategoryCard data={item} />
          </SwiperSlide>
        )
      })}

    </Swiper>
  );
}
