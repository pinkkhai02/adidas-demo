import './SlideMale.scss'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

const SlideMale = () => {
  return (
    <section className="slide-malepage">
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
                  <div className="teaser-card-content">
                    <div className="teaser-media">
                      <div className="img-wrapper">
                        <video
                          src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/global%20brand%20publishing/football/FW22%20-%20Juventus%20Home/fw22-football-juventus-home-hp-hp-tcc.mp4 "
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
                          <strong>ÁO ĐẤU SÂN NHÀ JUVENTUS 22/23</strong>
                        </span>
                        <p className="summary-slide">
                          Phá vỡ các quy tắc để tạo ra một di sản khác.
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
                          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/running-ss22-4dfwd-x-parley-launch-glp-m-teaser-carousel-card-d_tcm337-820239.jpg"
                          alt=""
                        />
                      </div>
                      <div className="teaser-content">
                        <span className="title-teaser">
                          <strong>4DFWD x PARLEY. Vì đại dương.​</strong>
                        </span>
                        <p className="summary-slide">
                          Chung tay chấm dứt rác thải nhựa.​
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
                        <video
                          src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/adienergy-tc_enacr2.mp4"
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
                          <strong>ULTRABOOST MADE WITH NATURE​</strong>
                        </span>
                        <p className="summary-slide">
                          Say hello to Ultraboost Made with Nature, designed in
                          balance with the planet.
                          <br />
                          Available only in the app ​
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
                          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/sustainability-ss22-rfto-tease-HP-GLP-PH-tcc-Pedri-d_tcm337-865910.jpg"
                          alt=""
                        />
                      </div>
                      <div className="teaser-content">
                        <span className="title-teaser">
                          <strong>TOGETHER, IMPOSSIBLE IS NOTHING​</strong>
                        </span>
                        <p className="summary-slide">
                        Hãy tìm hiểu cách bạn có thể chung tay chấm dứt rác thải nhựa, bắt đầu từ ngày 9/5.
                        </p>
                        <div className="button-card">
                          <button type="button" className="button-buy">
                            <span>TÌM HIỂU THÊM</span>
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
                          <strong>TRANG PHỤC SÂN NHÀ FC BAYERN 22/23​</strong>
                        </span>
                        <p className="summary-slide">
                          Sọc ngang màu trắng kết hợp với nền đỏ tươi mới.​
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
                          Đừng chỉ nói suôn. Hãy thực hiện.
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
                          <strong>A BREAKTHROUGH FOR WOMEN'S TENNIS​</strong>
                        </span>
                        <p className="summary-slide">
                          Giới thiệu AVCOURT, mẫu giày quần vợt mới dành riêng
                          cho nữ giới.​
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
                          Available only in the app ​
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
                          Hãy tìm hiểu cách bạn có thể chung tay chấm dứt rác
                          thải nhựa, bắt đầu từ ngày 9/5.
                        </p>
                        <div className="button-card">
                          <button type="button" className="button-buy">
                            <span>Tìm hiểu thêm</span>
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
                          Cải tiến sắc màu của giày EQT '93 biểu tượng. Đã mở
                          bán
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
                          Khám phá bộ sưu tập giày bóng đá mới với thiết kế tinh
                          chỉnh cuộc chơi của bạn.
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
}

export default SlideMale