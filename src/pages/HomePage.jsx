import BestSellerSlider from "../components/BestSellerSlider";
import CategorySlider from "../components/CategorySlider";
import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import VerticalSection from "../components/VerticalSection";
export default function HomePage() {
  return (
    <>
      <main class="main">
        <section class="home-slider position-relative mb-30">
          <div class="container">
            <div class="home-slide-cover mt-30">
              <div class="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                <HeroSlider />
              </div>
            </div>
          </div>
        </section>
        <section class="popular-categories section-padding">
          <div class="container">
            <SectionTitle title="Shop by Categories" nav={false} />
            <div class="carausel-10-columns-cover position-relative">
              <CategorySlider />
            </div>
          </div>
        </section>
        <section className="banners mb-25">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="banner-img wow fadeIn animated animated animated"
                  style={{ visibility: "visible" }}
                >
                  <img src="/imgs/banner/banner-1.png" alt='' />
                  <div className="banner-text">
                    <h4>
                      Everyday Fresh &amp; <br />
                      Clean with Our
                      <br /> Products
                    </h4>
                    <a href="shop-grid-right.html" className="btn btn-xs">
                      Shop Now <i className="fi-rs-arrow-small-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="banner-img wow fadeIn animated animated animated"
                  style={{ visibility: "visible" }}
                >
                  <img src="/imgs/banner/banner-2.png" alt='' />
                  <div className="banner-text">
                    <h4>
                      Make your Breakfast
                      <br /> Healthy and Easy
                    </h4>
                    <a href="shop-grid-right.html" className="btn btn-xs">
                      Shop Now <i className="fi-rs-arrow-small-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-md-none d-lg-flex">
                <div
                  className="banner-img wow fadeIn animated  mb-sm-0 animated animated"
                  style={{ visibility: "visible" }}
                >
                  <img src="/imgs/banner/banner-3.png" alt='' />
                  <div className="banner-text">
                    <h4>
                      The best Organic <br />
                      Products Online
                    </h4>
                    <a href="shop-grid-right.html" className="btn btn-xs">
                      Shop Now <i className="fi-rs-arrow-small-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="product-tabs section-padding position-relative">
          <div class="container">
            <SectionTitle title="Popular Products" nav={true} />
            <div class="tab-content">
              <div class="tab-pane fade show active">
                <div class="row product-grid-4">
                  <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <ProductCard />
                  </div>
                  <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <ProductCard />
                  </div>
                  <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <ProductCard />
                  </div>
                  <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <ProductCard />
                  </div>
                  <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <ProductCard />
                  </div>
                  <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <ProductCard />
                  </div>
                  <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <ProductCard />
                  </div>
                  <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <ProductCard />
                  </div>
                  <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <ProductCard />
                  </div>
                  <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
                    <ProductCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section-padding pb-5">
          <div class="container">
            <SectionTitle title="Daily Best Sells" nav={true} />
            <div className="row">
              <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
                <div className="banner-img style-2">
                  <div className="banner-text">
                    <h2 className="mb-100">Bring nature into your home</h2>
                    <a href="shop-grid-right.html" className="btn btn-xs">
                      Shop Now <i className="fi-rs-arrow-small-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-9 col-md-12">
                <div class="tab-content">
                  <div class="tab-pane fade show active">
                    <div class="carausel-4-columns-cover arrow-center position-relative">
                      <div class="carausel-4-columns carausel-arrow-center">
                        <BestSellerSlider />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section-padding mb-30">
          <div class="container">
            <div class="row">
              <VerticalSection/>
              <VerticalSection/>
              <VerticalSection/>
              <VerticalSection/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
