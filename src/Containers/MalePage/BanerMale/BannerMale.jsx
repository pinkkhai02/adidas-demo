import React from "react";
import "./BanerMale.scss";

const BannerMale = () => {
  return (
    <section className="banner-male">
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
                src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/yoga-ss22-make_space-launch-glp-men-mh-d_k7xseu.mp4 "
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
            Bộ sưu tập yoga hiệu năng cao - lấy cảm hứng từ <br/> yếu tố thiên nhiên và làm từ sợi Parley Ocean <br/>Plastic.
            </div>
            <div className="button">
              <div className="button-content">
                <div className="content-item">
                  <a href="#" className="content-item__link">
                    Mua ngay
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
                src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/football/FW22%20-%20FCB%20Home/football-fw22-fcb-home-glpm-mh-d.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="content-left">
          <div className="poster-content">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/HP-MH-Logo-new-02-d_tcm337-886268.png"
              alt=""
              className="content-logo"
            />
            <h2 className="title">
              ARSENAL 22/23 <br />
              HOME KIT
            </h2>
            <div className="button">
              <div className="button-content">
                <div className="content-item">
                  <a href="#" className="content-item__link">
                    mua ngay
                  </a>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default BannerMale;
