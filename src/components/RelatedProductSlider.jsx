import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ProductCard from "./ProductCard";

export default function RelatedProductSlider() {
  return (
    <>
      <div className="row mt-60">
        <div className="col-12">
          <h2 className="section-title style-1 mb-30">Related products</h2>
        </div>
        <div className="col-12">
          <div className="row related-products">
            <Swiper
              className="relatedSlider"
              modules={[Autoplay]}
              slidesPerView={4}
              spaceBetween={20}
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
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}


