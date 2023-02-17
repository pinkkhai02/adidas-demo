import React from 'react'
import './Banner.scss'

const Banner = () => {
  return (
    <section className="banner">
      <div className="component-waper">
          <div className="wapper-banner">
            <div  style={{width: "100%", height:"100%" }} className="player">
              <video src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/sustainability-ss22-rfto-launch-glpf-mh-d_lvqath.mp4" preload='auto' autoPlay loop playsInline x5-playsinline  style={{width: "100%", height:"100%" }} > 
              </video>
            </div>
          </div>
          <div className="content-left">
            <div className="poster-content">
              <h2 className="title">RUN FOR THE <br>OCEANS</br></h2>
              <div className="summary">Thời gian tập khởi động đã hết! Run For The Oceans đã bắt đầu. Cùng nhau chúng ta có thể giúp chấm dứt rác thải nhựa.</div>
              <div className="button">
                <div className="button-item">
                  <a href="#" className="button-link">TÌM HIỂU THÊM</a>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Banner