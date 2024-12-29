import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBanner } from "../redux/slice/CommonFetchSlice";
import { Link } from "react-router-dom";

export default function HeroSlider() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBanner());
  }, []);

  const banner = useSelector((state) => state.commonFetchSlice.bannerData);

  return (
    <Swiper
      // navigation={true}
      pagination={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="heroSlider"
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {banner?.data?.map((items) => {
        const words = items.title.split(" ");
        const lastTwoWords = words.slice(-2).join(" ");
        const remainingText = words.slice(0, -2).join(" ");
        return (
          <SwiperSlide key={items.id}>
            <div
              className="single-hero-slider single-animation-wrap"
              style={{ backgroundImage: `url(${items.image[0].url})` }}
            >
              <div className="slider-content">
                <h1 className="display-2 mb-40">
                  {remainingText}
                  <br />
                  {lastTwoWords}
                </h1>
                <Link to='' class="btn btn-md">Shop Now <i class="fi-rs-arrow-small-right"></i></Link>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
}
