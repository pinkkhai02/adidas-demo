import "./Still-Interested.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const StillInterested = () => {
  return (
    <section className="slide-interested">
      <div className="container wrapper-slide">
        <div className="heading-slide col-s-12 no-gutters">
          <div>
            <h4 className="title-slide">STILL INTERESTED?</h4>
          </div>
        </div>
        <div className="body-slide col-s-12 no-gutters">
          <div className="container-slide">
            <>
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={4}
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
                            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/450ddf1b5943474fa472ae25009dfed0_9366/Ao_DJau_San_Nha_Arsenal_22-23_DJo_HA5339_01_laydown.jpg"
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
                          <p className="product-card__title">Áo Đấu Sân Nhà Arsenal 22/23</p>
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
                            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Giay_Ultraboost_22_DJen_GZ0127_01_standard.jpg"
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
                            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/170aeeeea80b4b538da8ac1d010f4a69_9366/Giay_Fluidflow_2.0_DJen_FZ1985_01_standard.jpg"
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
                              <div className="price-item">2.100.000₫</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="">
                        <div className="product-card__details">
                          <p className="product-card__title">Fluidflow 2.0 Shoes</p>
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
                            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/923bec57082443e39f92ad6e00cbed3d_9366/Dep_adilette_Comfort_DJen_GZ5896_01_standard.jpg"
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
                          <p className="product-card__title">Adilette Comfort Slides</p>
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
                            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/923bec57082443e39f92ad6e00cbed3d_9366/Dep_adilette_Comfort_DJen_GZ5896_01_standard.jpg"
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
                          <p className="product-card__title">Galaxy 5 Shoes</p>
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
                            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/47631b05c092437ba433ae0d00f57c6d_9366/Giay_Galaxy_5_trang_GW0763_01_standard.jpg"
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
                          <p className="product-card__title">Galaxy 5 Shoes</p>
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
                            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/ef383d9444d64eb0a918ae0d00f5398f_9366/Giay_Galaxy_5_trang_GW0762_01_standard.jpg"
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
                          <p className="product-card__title">Galaxy 5 Shoes</p>
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
                            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/735919589b6d4d84bb66ad6e00cb68ba_9366/Dep_adilette_Comfort_DJen_GZ5891_01_standard.jpg"
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
                          <p className="product-card__title">Adilette Comfort Slides</p>
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
                            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/6e9400c0834444fcb77aadf800cb1651_9366/Giay_Retropy_F2_trang_GW0508_01_standard.jpg"
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
                              <div className="price-item">2.400.000₫</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="">
                        <div className="product-card__details">
                          <p className="product-card__title">Retropy F2 Shoes</p>
                          <p className="product-card-category">Originals</p>
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
  );
};

export default StillInterested;
