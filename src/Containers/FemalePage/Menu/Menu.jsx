import React from 'react'
import { Link } from 'react-router-dom'
import "./Menu.scss"

const Menu = () => {
  return (
    <div className="page-man__menu">
    <div className="container">
      <div className="menu__title d-flex justify-content-center">
        <h2>NỮ</h2>
      </div>
      <div className="menu__wrap">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/shoe-man">GIÀY</Link>
          </li>
          <li>
            <Link to="/clothes-man">QUẦN ÁO</Link>
          </li>
          <li>
            <Link to="/accessories-man">PHỤ KIỆN</Link>
          </li>
          <li>
            <Link to="/">TẤT CẢ SẢN PHẨM</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Menu