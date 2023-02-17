import React from 'react'
import './CardMale.scss'

const CardMale = () => {
  return (
    <section className='container card-container'>
      <div className="row row-two-card" >
        <div className="col-xl-6 card-one">
          <a href="" className="card-wrapper">
            <div className="card-content">
              <div className="card-media">
                <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/football-ss21-euro-nonfed-away-launch-GLPm-tc-d_tcm337-644400.jpg" alt=""  width="100%"/>
              </div>
              <div className="content-teaser">
                <span className="title-card">
                  <strong>THIẾT KẾ CHO UEFA EURO 2020™</strong>
                </span>
                <p className="summary-card">
                Trang phục thi đấu sân khách mới hiện đã ra mắt.
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

        <div className="col-xl-6 card-one">
          <a href="" className="card-wrapper">
            <div className="card-content">
              <div className="card-media">
                <video src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Statement/ss21OAMC/ss21-oamc-hp-tc-d.mp4" width="100%"
              height="100%"
              preload="auto"
              autoPlay
              loop
              playsInline
              muted></video>
              </div>
              <div className="content-teaser">
                <span className="title-card">
                  <strong>adidas Originals by OAMC</strong>
                </span>
                <p className="summary-card">
               
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
      </div>
    </section>
  )
}

export default CardMale