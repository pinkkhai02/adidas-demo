import React from 'react'
import './AgeKids.scss'

const AgeKids = () => {
  return (
    <section className='container card-container'>
    <div className="row row-two-card" >
      <div className="col-xl-4 card-one">
        <a href="" className="card-wrapper">
          <div className="card-content">
            <div className="card-media">
            <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/SS18_YA_Infants_Q1_Ecomm_A-FC_Age_F_640x640_tcm337-244159.jpg" alt=""  width="100%"/>
            </div>
            <div className="content-teaser">
              <span className="title-card">
                <strong>0-4 YEARS</strong>
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

      <div className="col-xl-4 card-one">
        <a href="" className="card-wrapper">
          <div className="card-content">
            <div className="card-media">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/SS18_YA_LittleKids_Ecomm_A-FC_Age_F_640x640_tcm337-244165.jpg" alt=""  width="100%"/>
            </div>
            <div className="content-teaser">
              <span className="title-card">
                <strong>4-8 YEARS</strong>
              </span>
              <p className="summary-card">
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

      <div className="col-xl-4 card-one">
        <a href="" className="card-wrapper">
          <div className="card-content">
            <div className="card-media">
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/SS18_YA_Running_Ecomm_AFC_Collection-Mobile_M_2_640x640-new_tcm337-244167.jpg" alt=""  width="100%"/>
            </div>
            <div className="content-teaser">
              <span className="title-card">
                <strong>8-16 YEARS</strong>
              </span>
              <p className="summary-card">
              
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

export default AgeKids