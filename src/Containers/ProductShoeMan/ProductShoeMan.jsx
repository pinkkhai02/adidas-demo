import React from "react";
import { Link } from "react-router-dom";
import "./ProductShoeMan.scss";
import data from "../../data/data";
import { useState } from "react";


const ProductShoeMan = () => {
  const [noOfElement, setNoOfElement] = useState(12);

  // const [show, setShow] = useState(false);
  // const [detail, setDetail] = useState({});

  // const check = (item) => {
  //   setDetail(item);
  //   setShow(!show);
  // };
  const loadMore = () => {
    setNoOfElement(noOfElement + 3);
  };

  const slice = data.ShoeMan.slice(0, noOfElement);
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
                    <Link to="/MalePage">Nam</Link>
                    <span>/</span>
                  </li>
                  <li>
                    <span>Giày</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header">
              <div className="header-title">
                <span>NAM</span>
                <span> · </span>
                <span>Giày</span>
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
          {slice.map((item, index) => (
            <div key={index} className="product-card col-3 ">
              <div className="product-card__assets">
                <Link to={`/${item.id}`} className="hockeycard-link ">
                  <img src={item.img2} alt="" className="img-back" />
                  <img src={item.img1} alt="" className="img-front" />
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
              <Link to={`/${item.id}`}>
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
      {/* <Detail show={show} setShow={setShow} detail={detail} /> */}
    </section>
  );
};

export default ProductShoeMan;
