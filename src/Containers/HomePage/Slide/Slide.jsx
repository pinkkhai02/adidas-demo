import "./Slide.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Slide = () => {
  return (
    <section className="slide">
      <div className="container wrapper-slide">
        <div className="heading-slide col-s-12 no-gutters">
          <div>
            <h4 className="title-slide">WHAT'S HOT</h4>
            <p className="summary-slide">Hot stuff, don't miss it !</p>
          </div>
        </div>
        <div className="body-slide col-s-12 no-gutters">
          <div className="container-slide">
            <>
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={3}
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
                  <div className="teaser-card-content">
                    <div className="teaser-media">
                      <div className="img-wrapper">
                        <img
                          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/training-ss22-KarlieKlossXadidas-Q1-launch-HP-teasercarousel_tcm337-808517.jpg"
                          alt=""
                        />
                      </div>
                      <div className="teaser-content">
                        <span className="title-teaser">
                          <strong>CREATED FOR THE CURIOUS</strong>
                        </span>
                        <p className="summary-slide">
                          A new collection designed to embrace the freedom of
                          your sports style and the creativity of your
                          lifestyle.
                        </p>
                        <div className="button-card">
                          <button type="button" className="button-buy">
                            <span>Mua Ngay</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="teaser-card-content">
                    <div className="teaser-media">
                      <div className="img-wrapper">
                        <img
                          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/Teaser_Carousel_HP_tcm337-888226.jpg"
                          alt=""
                        />
                      </div>
                      <div className="teaser-content">
                        <span className="title-teaser">
                          <strong>MY RETROPY???</strong>
                        </span>
                        <p className="summary-slide">
                          I am free to choose who I am.???
                        </p>
                        <div className="button-card">
                          <button type="button" className="button-buy">
                            <span>Shop now</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="teaser-card-content">
                    <div className="teaser-media">
                      <div className="img-wrapper">
                        <video
                          src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/lace-triple-black-hp-teaser-carousel-dtm_1_ppd0pi.mp4"
                          width="100%"
                          height="100%"
                          preload="auto"
                          autoPlay
                          loop
                          playsInline
                          muted
                        ></video>
                      </div>
                      <div className="teaser-content">
                        <span className="title-teaser">
                          <strong>TRIPLE BLACK COLLECTION???</strong>
                        </span>
                        <p className="summary-slide">Dark mode enabled.???</p>
                        <div className="button-card">
                          <button type="button" className="button-buy">
                            <span>Shop now</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="teaser-card-content">
                    <div className="teaser-media">
                      <div className="img-wrapper">
                        <video
                          src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/yoga-ss22-make_space-launch-glp-women-teaser_carousel-d.mp4 "
                          width="100%"
                          height="100%"
                          preload="auto"
                          autoPlay
                          loop
                          playsInline
                          muted
                        ></video>
                      </div>
                      <div className="teaser-content">
                        <span className="title-teaser">
                          <strong>MAKE SPACE YOGA COLLECTION???</strong>
                        </span>
                        <p className="summary-slide">
                          T???o kh??ng gian cho nh???ng l???a ch???n t???nh th???c mang l???i
                          l???i ??ch cho c?? th???, t??m tr?? v?? h??nh tinh c???a b???n.???
                        </p>
                        <div className="button-card">
                          <button type="button" className="button-buy">
                            <span>Mua Ngay</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="teaser-card-content">
                    <div className="teaser-media">
                      <div className="img-wrapper">
                        <video
                          src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/global%20brand%20publishing/football/FW22%20-%20FCB%20Home/football-fw22-fcb-home-hp-tc.mp4 "
                          width="100%"
                          height="100%"
                          preload="auto"
                          autoPlay
                          loop
                          playsInline
                          muted
                        ></video>
                      </div>
                      <div className="teaser-content">
                        <span className="title-teaser">
                          <strong>TRANG PH???C S??N NH?? FC BAYERN 22/23???</strong>
                        </span>
                        <p className="summary-slide">
                          S???c ngang m??u tr???ng k???t h???p v???i n???n ????? t????i m???i.???
                        </p>
                        <div className="button-card">
                          <button type="button" className="button-buy">
                            <span>Mua Ngay</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="teaser-card-content">
                    <div className="teaser-media">
                      <div className="img-wrapper">
                        <img
                          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/running-ss22-4dfwd-x-parley-launch-hp-teaser-carousel-card-dual-2d-d_tcm337-820245.jpg"
                          alt=""
                        />
                      </div>
                      <div className="teaser-content">
                        <span className="title-teaser">
                          <strong>
                            4DFWD X PARLEY. TAKE ACTION FOR OUR OCEANS.
                          </strong>
                        </span>
                        <p className="summary-slide">
                          ?????ng ch??? n??i su??n. H??y th???c hi???n.
                        </p>
                        <div className="button-card">
                          <button type="button" className="button-buy">
                            <span>Mua Ngay</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="teaser-card-content">
                    <div className="teaser-media">
                      <div className="img-wrapper">
                        <video
                          src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/Tennis-SS22-avacourt-launch-hp-teaser-card_thacmt.mp4 "
                          width="100%"
                          height="100%"
                          preload="auto"
                          autoPlay
                          loop
                          playsInline
                          muted
                        ></video>
                      </div>
                      <div className="teaser-content">
                        <span className="title-teaser">
                          <strong>A BREAKTHROUGH FOR WOMEN'S TENNIS???</strong>
                        </span>
                        <p className="summary-slide">
                          Gi???i thi???u AVCOURT, m???u gi??y qu???n v???t m???i d??nh ri??ng
                          cho n??? gi???i.???
                        </p>
                        <div className="button-card">
                          <button type="button" className="button-buy">
                            <span>Mua Ngay</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="teaser-card-content">
                    <div className="teaser-media">
                      <div className="img-wrapper">
                        <video
                          src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/adienergy-tc_enacr2.mp4 "
                          width="100%"
                          height="100%"
                          preload="auto"
                          autoPlay
                          loop
                          playsInline
                          muted
                        ></video>
                      </div>
                      <div className="teaser-content">
                        <span className="title-teaser">
                          <strong>ULTRABOOST MADE WITH NATURE</strong>
                        </span>
                        <p className="summary-slide">
                          Say hello to Ultraboost Made with Nature, designed in
                          balance with the planet.
                          <br />
                          Available only in the app ???
                        </p>
                        <div className="button-card">
                          <button type="button" className="button-buy">
                            <span>Shop in app</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="teaser-card-content">
                    <div className="teaser-media">
                      <div className="img-wrapper">
                        <img
                          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/sustainability-ss22-rfto-tease-HP-GLP-PH-tcc-Ninali-d_tcm337-865907.jpg"
                          alt=""
                        />
                      </div>
                      <div className="teaser-content">
                        <span className="title-teaser">
                          <strong>TOGETHER, IMPOSSIBLE IS NOTHING</strong>
                        </span>
                        <p className="summary-slide">
                          H??y t??m hi???u c??ch b???n c?? th??? chung tay ch???m d???t r??c
                          th???i nh???a, b???t ?????u t??? ng??y 9/5.
                        </p>
                        <div className="button-card">
                          <button type="button" className="button-buy">
                            <span>T??m hi???u th??m</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="teaser-card-content">
                    <div className="teaser-media">
                      <div className="img-wrapper">
                        <img
                          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/ss-sw-tcc_tcm337-878685.jpg"
                          alt=""
                        />
                      </div>
                      <div className="teaser-content">
                        <span className="title-teaser">
                          <strong>Sean Wotherspoon Equipment 93</strong>
                        </span>
                        <p className="summary-slide">
                          C???i ti???n s???c m??u c???a gi??y EQT '93 bi???u t?????ng. ???? m???
                          b??n
                        </p>
                        <div className="button-card">
                          <button type="button" className="button-buy">
                            <span>Mua ngay</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="teaser-card-content">
                    <div className="teaser-media">
                      <div className="img-wrapper">
                        <img
                          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/football-ss22-diamond-edge-pre-launch-hp-teaser-carousel-dtm_tcm337-866578.jpg"
                          alt=""
                        />
                      </div>
                      <div className="teaser-content">
                        <span className="title-teaser">
                          <strong>DIAMOND EDGE PACK</strong>
                        </span>
                        <p className="summary-slide">
                          Kh??m ph?? b??? s??u t???p gi??y b??ng ???? m???i v???i thi???t k??? tinh
                          ch???nh cu???c ch??i c???a b???n.
                        </p>
                        <div className="button-card">
                          <button type="button" className="button-buy">
                            <span>Mua ngay</span>
                          </button>
                        </div>
                      </div>
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

export default Slide;
