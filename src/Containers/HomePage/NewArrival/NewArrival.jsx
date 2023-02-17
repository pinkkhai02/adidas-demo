import './NewArrival.scss'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const NewArrival = () => {
  return (
    <section className="slide-newArrival">
      <div className="container wrapper-slide">
        <div className="heading-slide col-s-12 no-gutters">
          <div>
            <h4 className="title-slide">NEW ARRIVALS</h4>
          </div>
        </div>
        <div className="body-slide col-s-12 no-gutters">
          <div className="container-slide">
            <>
              <Swiper
                slidesPerView={5}
                spaceBetween={10}
                slidesPerGroup={5}
                loop={false}
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
                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/da14bf4586a54804b449aea601282be1_9366/YEEZY_BOOST_700_DJo_HQ6979_01_standard.jpg"
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
                              <div className="price-item">6.800.000₫</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="">
                        <div className="product-card__details">
                          <p className="product-card__title">YEEZY BOOST 700</p>
                          <p className="product-card-category">Nam Originals</p>
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
                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/4a3b64db6bbd42ca9beeadfa0018a239_9366/Giay_JS_Wings_4.0_trang_GX9445_01_standard.jpg"
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
                          <p className="product-card-category">Nam Originals</p>
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
                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7bf5d322b764db0b511ae0200124156_9366/Giay_JS_Wings_4.0_DJen_GY4419_01_standard.jpg"
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
                          <p className="product-card-category">Nam Originals</p>
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
                            src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/c21668b84cb0437dae88adfd011db3cc_9366/Giay_JS_Wings_4.0_trang_GY1848_01_standard.jpg"
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
               
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewArrival