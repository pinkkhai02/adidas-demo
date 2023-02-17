import React from 'react'
import './WhoAreShopping.scss'

export const WhoAreShopping = () => {
  return (
    <section className="container card-container">
      <div className="heading-title col-lg-12">
        <h2>Who are you shopping for?</h2>
      </div>
      <div className="row row-three-card">
        <div className="col-xl-4 card-one">
          <div className="card-content">
            <div className="card-media">
              <img
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/updated_gender_women_dt_tcm337-636701.jpg"
                alt="" width="100%"
              />
            </div>
            <div className="content-teaser">
              <span className="card-title">
                <strong>Women</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 card-one">
          <div className="card-content">
            <div className="card-media">
              <img
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/nav-men-d_tcm337-819364.jpg"
                alt="" width="100%"
              />
            </div>
            <div className="content-teaser">
              <span className="card-title">
                <strong>men</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 card-one">
          <div className="card-content">
            <div className="card-media">
              <img
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/nav-kids-d_tcm337-819367.jpg"
                alt="" width="100%"
              />
            </div>
            <div className="content-teaser">
              <span className="card-title">
                <strong>Kids</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
