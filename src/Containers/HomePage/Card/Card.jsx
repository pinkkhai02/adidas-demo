import React from 'react'
import './Card.scss'

const Card = () => {
  return (
    <section className='container card-container'>
      <div className="row row-two-card" >
        <div className="col-xl-6 card-one">
          <a href="" className="card-wrapper">
            <div className="card-content">
              <div className="card-media">
                <video src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/originals-fw21-forum-drop1-launch-catlp-teaser-card-2x1-d_tlehpx.mp4" controls loop autoPlay width="100%"></video>
              </div>
              <div className="content-teaser">
                <span className="title-card">
                  <strong>A NEW GENERATION</strong>
                </span>
                <p className="summary-card">
                Náo nhiệt và táo bạo nhưng luôn cởi mở — đôi giày sáng tạo cho chính bạn.
                </p>
                <div className="button-card">
                  <button type='' className='button-content'>
                    <span>Mua ngay</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="col-xl-6 card-one">
          <a href="" className="card-wrapper">
            <div className="card-content">
              <div className="card-media">
                <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/facecovering-hp-tc-d_tcm337-694777.jpg" alt=""  width="100%"/>
              </div>
              <div className="content-teaser">
                <span className="title-card">
                  <strong>WE'VE GOT YOU COVERED</strong>
                </span>
                <p className="summary-card">
                Discover the adidas Face Cover with an improved comfort, designed for exercise.
                </p>
                <div className="button-card">
                  <button type='' className='button-content'>
                    <span>Shop now</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Card