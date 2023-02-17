import "./BestOFadidas.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const BestOFadidas = () => {
  return (
    <section className="slide-BestOFadidas">
      <div className="container wrapper-slide">
        <div className="heading-slide col-s-12 no-gutters">
          <div>
            <h4 className="title-slide">BEST OF ADIDAS</h4>
          </div>
        </div>
        <div className="body-slide col-s-12 no-gutters">
          <div className="container-slide">
            <>
              <Swiper
                slidesPerView={5}
                spaceBetween={10}
                slidesPerGroup={5}
                loop={true}
                loopFillGroupWithBlank={false}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                
                <SwiperSlide>
                  <div className="product-card-container">
                    <div className="product-card">
                      <div className="product-card__assets">
                        <a href="" className="hockeycard-link ">
                          <img
                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/0df238ba609e4e53a7e9ac0800f44bb3_9366/FY8649_01_standard.jpg"
                            alt=""
                          />
                        </a>
                        <div className="product-card__wishlist ">
                          <div className="product-card__wishlist-button">
                          <i className="fa-regular fa-heart"></i>
                          </div>
                        </div>
                        <a
                          href=""
                          className="product-card-content-badges-wrapper"
                        >
                          <div className="badge-container">
                            <div className="price-product">
                              <div className="price-item">850.000₫</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="">
                        <div className="product-card__details">
                          <p className="product-card__title">Adilette Sandals</p>
                          <p className="product-card-category">Sportswear</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product-card-container">
                    <div className="product-card">
                      <div className="product-card__assets">
                        <a href="" className="hockeycard-link ">
                          <img
                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/450ddf1b5943474fa472ae25009dfed0_9366/HA5339_01_laydown.jpg"
                            alt=""
                          />
                        </a>
                        <div className="product-card__wishlist ">
                          <div className="product-card__wishlist-button">
                          <i className="fa-regular fa-heart"></i>
                          </div>
                        </div>
                        <a
                          href=""
                          className="product-card-content-badges-wrapper"
                        >
                          <div className="badge-container">
                            <div className="price-product">
                              <div className="price-item">1.500.000₫</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="">
                        <div className="product-card__details">
                          <p className="product-card__title">Arsenal 22/23 Home Jersey</p>
                          <p className="product-card-category">Performance</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product-card-container">
                    <div className="product-card">
                      <div className="product-card__assets">
                        <a href="" className="hockeycard-link ">
                          <img
                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/GZ0127_01_standard.jpg"
                            alt=""
                          />
                        </a>
                        <div className="product-card__wishlist ">
                          <div className="product-card__wishlist-button">
                          <i className="fa-regular fa-heart"></i>
                          </div>
                        </div>
                        <a
                          href=""
                          className="product-card-content-badges-wrapper"
                        >
                          <div className="badge-container">
                            <div className="price-product">
                              <div className="price-item">5.200.000₫</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="">
                        <div className="product-card__details">
                        <p className="product-card__title">Ultraboost 22 Shoes</p>
                          <p className="product-card-category">Performance</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="product-card-container">
                    <div className="product-card">
                      <div className="product-card__assets">
                        <a href="" className="hockeycard-link ">
                          <img
                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/170aeeeea80b4b538da8ac1d010f4a69_9366/FZ1985_01_standard.jpg"
                            alt=""
                          />
                        </a>
                        <div className="product-card__wishlist ">
                          <div className="product-card__wishlist-button">
                          <i className="fa-regular fa-heart"></i>
                          </div>
                        </div>
                        <a
                          href=""
                          className="product-card-content-badges-wrapper"
                        >
                          <div className="badge-container">
                            <div className="price-product">
                              <div className="price-item">Hết hàng</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="">
                        <div className="product-card__details">
                        <p className="product-card__title">Giày JS Wings 4.0</p>
                          <p className="product-card-category">Trẻ sơ sinh Originals</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="product-card-container">
                    <div className="product-card">
                      <div className="product-card__assets">
                        <a href="" className="hockeycard-link ">
                          <img
                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/8e12b0b426604977bfb0adfe012f9a54_9366/Giay_JS_Wings_4.0_DJen_GY1849_01_standard.jpg"
                            alt=""
                          />
                        </a>
                        <div className="product-card__wishlist ">
                          <div className="product-card__wishlist-button">
                          <i className="fa-regular fa-heart"></i>
                          </div>
                        </div>
                        <a
                          href=""
                          className="product-card-content-badges-wrapper"
                        >
                          <div className="badge-container">
                            <div className="price-product">
                              <div className="price-item">Hết hàng</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="">
                        <div className="product-card__details">
                        <p className="product-card__title">Giày JS Wings 4.0</p>
                          <p className="product-card-category">Trẻ sơ sinh Originals</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="product-card-container">
                    <div className="product-card">
                      <div className="product-card__assets">
                        <a href="" className="hockeycard-link ">
                          <img
                            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/21e1873902fa4531b89dad4d015802ec_9366/POSTMOVE_SE_trang_GW0348_01_standard.jpg"
                            alt=""
                          />
                        </a>
                        <div className="product-card__wishlist ">
                          <div className="product-card__wishlist-button">
                          <i className="fa-regular fa-heart"></i>
                          </div>
                        </div>
                        <a
                          href=""
                          className="product-card-content-badges-wrapper"
                        >
                          <div className="badge-container">
                            <div className="price-product">
                              <div className="price-item">1.900.000₫</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="">
                        <div className="product-card__details">
                          <p className="product-card__title">Postmove SE Shoes</p>
                          <p className="product-card-category">Sportswear</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product-card-container">
                    <div className="product-card">
                      <div className="product-card__assets">
                        <a href="" className="hockeycard-link ">
                          <img
                            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/56d7e09d7ba44113af51ae14010f6a5a_9366/Dep_Alphabounce_DJen_GY9416_01_standard.jpg"
                            alt=""
                          />
                        </a>
                        <div className="product-card__wishlist ">
                          <div className="product-card__wishlist-button">
                          <i className="fa-regular fa-heart"></i>
                          </div>
                        </div>
                        <a
                          href=""
                          className="product-card-content-badges-wrapper"
                        >
                          <div className="badge-container">
                            <div className="price-product">
                              <div className="price-item">1.250.000₫</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="">
                        <div className="product-card__details">
                          <p className="product-card__title">Alphabounce Slides</p>
                          <p className="product-card-category">Sportswear</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
               
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestOFadidas