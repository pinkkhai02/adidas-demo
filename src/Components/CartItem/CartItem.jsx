import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { deleteCart, updateCart } from '../../redux/cartSlice';

const CartItem = props => {
  const {item} = props
  const dispatch = useDispatch();

  function handleDeleteCart(item){
    dispatch(deleteCart(item));
  }
  function handleUpdateCart(newQuantity){
    if(newQuantity > 0)
    dispatch(updateCart({...item, quantity:newQuantity}))
  }
  return (
    <div className="check col-lg-8 ">
                <img src={item.product.img1} alt="" />
                <div className="item">
                  <a>{item.product.name}</a>
                  <li>Giá: {item.product.price}</li>
                  <li>Size: {item.size}</li>
                  <div className="checks">
                    <div className="checks-qtt">
                      <input
                        className="button-up"
                        onClick={() => handleUpdateCart(item.quantity - 1)}
                        value='-'
                        type="button"
                      />
                      <input
                        className="input-qtt"
                        id='quantity' 
                        // min='1' 
                        name='quantity'  
                        value={item.quantity}
                        type = "tel"
                        onChange={e=>{
                          try {
                            const newQuantity = parseInt(e.target.value)
                            if(!isNaN(e.target.value)){
                              handleUpdateCart(newQuantity)
                            }
                          } catch (error) {
                          }
                         
                        }}
                      />
                      <input
                        className="button-down"
                        onClick={() => handleUpdateCart(item.quantity + 1)}  
                        value='+' 
                        type="button"
                      />
                    </div>
                    <div className="delete-product">
                      <span
                        onClick={() => {
                          handleDeleteCart(item);
                        }}
                      >
                        <Link to="">Xóa</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
  )
}

CartItem.propTypes = {
  item:PropTypes.object,
  index:PropTypes.number
}

export default CartItem