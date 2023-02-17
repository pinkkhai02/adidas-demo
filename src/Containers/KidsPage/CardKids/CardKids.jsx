import React from 'react'
import './CardKids.scss'

const CardKids = () => {
  return (
    <section className='container card-container'>
      <div className="row row-two-card" >
        <div className="col-xl-6 card-one">
          <a href="" className="card-wrapper">
            <div className="card-content">
              <div className="card-media">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/originals-fw21-sean-wotherpoon-glp-tc-d_tcm337-689222.jpg" alt=""  width="100%"/>
              </div>
              <div className="content-teaser">
                <span className="title-card">
                  <strong>ZX8000 Wotherspoon SUPEREARTH Infants</strong>
                </span>
                <p className="summary-card">
                Sean Wotherspoon trở lại với giày ZX8000 SUPEREARTH dành cho trẻ sơ sinh.
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
                <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/originals-ss21-adicolor-april-launch-glp-k-teaser-large-new-01-d_tcm337-635506.jpg" alt=""  width="100%"/>
              </div>
              <div className="content-teaser">
                <span className="title-card">
                  <strong>Chuyện về adicolor</strong>
                </span>
                <p className="summary-card">
                Queen-Zhanel sáng bừng với adicolor mới cùng chị gái Alida.
                </p>
                <div className="button-card">
                  <button type='' className='button-content'>
                    <span>Mua Ngay</span>
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

export default CardKids