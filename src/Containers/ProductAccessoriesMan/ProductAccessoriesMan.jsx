import React from 'react'
import { Link } from 'react-router-dom'
import './ProductAccessoriesMan.scss'
import data from '../../data/data'
import { useState } from 'react'

const ProductAccessoriesMan = () => {
  const [noOfElement, setNoOfElement] = useState(8);

  const loadMore = () => {
    setNoOfElement(noOfElement + 4);
  };

  const slice = data.AccessoriesMan.slice(0, noOfElement);
  return (
    <section className="product-men">
    <div className="container">
      <div className="row">
        <div className="col-12 header-top__wrap">
          <div className="breadcrumb__container">
            <div className="breadcrumbs__menu">
              <ul>
                <li>
                  <Link to="/">Trang chủ</Link>
                  <span>/</span>
                </li>
                <li>
                  <Link to="/">Nam</Link>
                  <span>/</span>
                </li>
                <li>
                  <span>Phụ kiện</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="header">
            <div className="header-title">
              <span>NAM</span>
              <span> · </span>
              <span>Phụ Kiện</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* {data.ColthesMen.map((item, index) => (
            <div key={index} className="col-3" >
              <h1>{item.name}</h1>
              <img src={item.img} alt="" />
            </div>
          ))} */}
        {slice.map((item) => (
          <div key={item.id} className="product-card col-3 ">
            <div className="product-card__assets">
              <Link to="/" className="hockeycard-link ">
                <img src={item.images} alt="" className="img-back" />
                <img src={item.img} alt="" className="img-front" />
              </Link>
              <div className="product-card__wishlist ">
                <div className="product-card__wishlist-button">
                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
              <a href="" className="product-card-content-badges-wrapper">
                <div className="badge-container">
                  <div className="price-product">
                    <div className="price-item">{item.price}</div>
                  </div>
                </div>
              </a>
            </div>
            <Link to="/detail">
              <div className="product-card__details">
                <p className="product-card__title">{item.name}</p>
                <p className="product-card-category">{item.style}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <a className="load-more" onClick={() => loadMore()}>
        Xem Thêm
      </a>
  </section>
  )
}

export default ProductAccessoriesMan