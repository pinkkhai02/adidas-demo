import React from 'react'
import './BanerFemale.scss'

const BanerFemale = () => {
  return (
    <section className="banner-female">
      <div className="component-waper">
        <div className="wapper-banner">
          <div style={{ width: "100%", height: "100%" }} className="player">
            <video
              width="100%"
              height="100%"
              preload="auto"
              autoPlay
              loop
              playsInline
              muted
            >
              <source
                src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/sustainability-ss22-rfto-launch-hp-mh-d_qec44x.mp4 "
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="content-left">
          <div className="poster-content">
            <h2 className="title">
              RUN FOR THE
              <br /> OCEANS{" "}
            </h2>
            <div className="summary">
              Bạn đã xong bài khởi động chưa? Bắt đầu! Run
              <br /> For The Oceans đã bắt đầu. Chúng ta có thể cùng
              <br /> nhau làm nên sự khác biệt.
            </div>
            <div className="button">
              <div className="button-content">
                <div className="content-item">
                  <a href="#" className="content-item__link">
                    TÌM HIỂU THÊM
                  </a>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="component-waper">
        <div className="wapper-banner">
          <div style={{ width: "100%", height: "100%" }} className="player">
            <video
              width="100%"
              height="100%"
              preload="auto"
              autoPlay
              loop
              playsInline
              muted
            >
              <source
                src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/yoga-ss22-make_space-launch-glp-women-mh-d_teu1db.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="content-left">
        <div className="poster-content">
            <h2 className="title">
            MAKE SPACE
            </h2>
            <div className="summary">
            Bộ sưu tập yoga hiệu năng cao - lấy cảm hứng từ <br/>yếu tố thiên nhiên và làm từ sợi Parley Ocean <br/> Plastic.
            </div>
            <div className="button">
              <div className="button-content">
                <div className="content-item">
                  <a href="#" className="content-item__link">
                    Mua Ngay
                  </a>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default BanerFemale