import React from 'react'
import './CardFemale.scss'

const CardFemale = () => {
  return (
    <section className='container card-container'>
    <div className="row row-two-card" >
      <div className="col-xl-6 card-one">
        <a href="" className="card-wrapper">
          <div className="card-content">
            <div className="card-media">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/Teaser_Bra_D_tcm337-890124.jpg" alt=""  width="100%"/>
            </div>
            <div className="content-teaser">
              <span className="title-card">
                <strong>SUPPORT IS EVERYTHING</strong>
              </span>
              <p className="summary-card">
              Áo ngực hỗ trợ mọi chuyển động và kích cỡ.
              </p>
              <div className="button-card">
                <button type='' className='button-content'>
                  <span>MUA ÁO NGỰC</span>
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
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/Teaser_Tights_D_tcm337-890125.jpg" alt=""  width="100%"/>
            </div>
            <div className="content-teaser">
              <span className="title-card">
                <strong>MOVE IN COMFORT</strong>
              </span>
              <p className="summary-card">
              Quần cạp cao cố định
              </p>
              <div className="button-card">
                <button type='' className='button-content'>
                  <span>MUA QUẦN BÓ</span>
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

export default CardFemale