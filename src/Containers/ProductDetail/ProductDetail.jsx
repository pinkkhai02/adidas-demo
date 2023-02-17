import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import data from "../../data/data";
import "./ProductDetail.scss";
import Helmet from "../../Components/Helmet/Helmet";
// import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cartSlice";
import { showToast } from "../../redux/toastSlice";


const ProductDetail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState();
  const [indexSize, setIndexSize] = useState(0);


  //active vào ô size được chọn
  const [changeSize, setChangeSize] = useState();

  

  const handleAddToCart = (product) => {
    if(changeSize){
      dispatch(showToast({
        isOpen:true,
        text:'Thêm vào giỏ hàng thành công!!!',
        type:'success'
      }))
      dispatch(addToCart({product: product, size: changeSize, quantity:1}))
    }else{ 
      dispatch(showToast({
      isOpen:true,
      text:'Chưa chọn kích cỡ!!!',
      type:'info'
    }))
    }
   
    
}
console.log(indexSize)

  useEffect(() => {
    const res = data.ShoeMan.find((item) => item.id + "" === id);
    setProduct(res);
  }, [id]);

  if (!product) return "";
  return (
    <Helmet title={product.name}>
      <div className="content-wrapper-detail container">
        <div className="row">
          <div className="content col-lg-8">
            <div className="gallery-section">
              <ul className="breadcrumbs_container">
                <li className="breadcrumb_item">
                  <Link className="breadcrumb_item-link" to="/shoe-man">
                    <i className="fa-solid fa-arrow-left"></i>
                    <span className="back__text">Trở về</span>
                  </Link>
                </li>
                <li className="breadcrumb_item">
                  <Link to="/" className="breadcrumb_item-link">
                    Trang Chủ
                  </Link>
                  <span>/</span>
                </li>
                <li className="breadcrumb_item">
                  <Link to="" className="breadcrumb_item-link">
                    {product.style}
                  </Link>
                  <span>/</span>
                </li>
                <li className="breadcrumb_item">
                  <Link to="/shoe-man" className="breadcrumb_item-link">
                    Giày
                  </Link>
                </li>
              </ul>

              <div className="navigation-target-gallery container">
                <section className=" row  image_grid">
                  <div className="image-grid__container col-12">
                    <div className="view-cell-container">
                      <div className="image-viewer__view">
                        <div className="desktop-zoom">
                          <div className="image-viewer__desktop-zoom__content">
                            <Swiper
                              cssMode={true}
                              navigation={true}
                              pagination={false}
                              mousewheel={true}
                              keyboard={true}
                              modules={[
                                Navigation,
                                Pagination,
                                Mousewheel,
                                Keyboard,
                              ]}
                              className="mySwiper"
                            >
                              {product.images.map((images, index) => (
                                <SwiperSlide key={index}>
                                  <img src={images} alt="" />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="sidebar-wrapper col-4">
            <div className="sidebar">
              <div className="product-description">
                <div className="pre-header">
                  <div className="product-category">
                    <span>{product.style}</span>
                  </div>
                  <button className="rating-stars-button">
                    <div className="star-rating-black">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </button>
                </div>
                <h1 className="product-title">
                  <span>{product.name}</span>
                </h1>
                <div className="product-price ">
                  <span>{product.price}</span>
                </div>
              </div>
              <section className="buy-section">
                <div className="size-selector">
                  <div className="heading-container">
                    <span>Kích cỡ hiện có</span>
                  </div>
                  <div className="sizes">
                    {product.size.map((size, index) => (
                      <button key={index} className={changeSize === size ? "label-size active" : "label-size "} onClick ={() => setChangeSize(size)} >
                        <span  onClick={() => setIndexSize(size)}>
                        {size}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="sizes-controls">
                  <Link to="" className="size-chart-link">
                    <i className="fa-solid fa-ruler-horizontal"></i>
                    <span>BIỂU ĐỒ KÍCH CỠ</span>
                  </Link>
                </div>
                <div className="add-to-bag">
                  <button type="" className="add-to-bag-button" onClick={()=> {handleAddToCart(product)}}>
                    Thêm vào giỏ hàng
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                  <div className="add-wishlist-container">
                    <button type="button" className="toggle_wishlist_button ">
                      <i className="fa-regular fa-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="bottom-callout-stack">
                  <div className="promotion-callout-wrapper">
                    <i className="fa-solid fa-rotate"></i>
                    <Link to="" className="maskable-hide-content">
                      Không đúng kích cỡ hoặc màu sắc? Vui lòng truy cập trang
                      Trả lại hàng & Hoàn tiền của chúng tôi để biết chi tiết
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default ProductDetail;
