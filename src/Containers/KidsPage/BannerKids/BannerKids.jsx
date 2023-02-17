import React from 'react'
import './BannerKids.scss'

const BannerKids = () => {
  return (
    <section className="banner-kids">
      <div className="component-waper ">
          <div className="wapper-banner">
            <div className="player">
              <video controls width= "100%" height="100%" preload="auto" autoplay loop playsInline muted >
                  <source src="https://brand.assets.adidas.com/image/upload/q_auto,vc_auto/viVN/Images/kids-sports-ss22-lego-play-launch-com-kids-masthead-V2-d_tcm337-833539.mp4 " type="video/mp4"/>
                </video>
            </div>
          </div>
          <div className="content-right">
            <div className="poster-content-right">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/H23161_BOS_LOGO_lockup_white_tcm337-816446.png" alt="" className="content-logo" />
              <h2 className="title-right">IMAGINE YOUR <br/>WORLD</h2>
              <div className="summary-right">Chơi đùa với bộ sưu tập adidas LEGO® Play độc <br/> quyền mới. Đã mở bán.</div>
              <div className="button-right">
               <div className="button-content-right">
                <div className="content-item-right">
                  <a href="#" className="content-item__link">mua ngay
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
            <div  style={{width: "100%", height:"100%" }} className="player">
              <video controls width= "100%" height="100%" preload="auto" autoplay loop playsInline muted >
                <source src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/RUNNING-FW21-LEGO-DNACOLORS-LAUNCH-GLP-KIDS-MASTHEAD-YELLOW-D_rkscg5.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
          <div className="content-left">
            <div className="poster-content">
              <h2 className="title">Nô đùa trong <br/> từng sải bước </h2>
              <div className="summary">Thể hiện tính cách nghịch ngợm trong bạn với <br/>đôi giày Ultraboost DNA x LEGO® Colors.</div>
              <div className="button">
               <div className="button-content">
                <div className="content-item">
                  <a href="#" className="content-item__link">Mua ngay</a>
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

export default BannerKids