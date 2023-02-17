import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.scss";

const list =[
  {
    href:"/MalePage",
    name:"NAM",
    key_mobile: "1",
    list:[
      {
        title:"NỔI BẬT",
        items:[
          {title: "Hàng Mới Về"},
          {title: "Những mặt hàng bán chạy nhất tuần này"},
          {title: "ULTRABOOST"},
          {title: "FORUM"},
          {title: "Adilette"},
          {title: "4D"},
        ],
      },
      {
        title:"GIÀY",
        items:[
          {title: "Dòng sản phẩm Originals"},
          {title: "Bóng đá"},
          {title: "Chạy"},
          {title: "Tập Luyện"},
          {title: "Essentials"},
          {title: "Ngoài trời"},
          {title: "Bóng rổ"},
          {title: "dep"},
          {title: "Quần vợt"},
        ],
      },
      {
        title:"QUẦN ÁO",
        items:[
          {title: "Áo phông & Áo Polo"},
          {title: "Áo Jersey"},
          {title: "Áo hoodie & Áo khoác"},
          {title: "Áo nỉ và Bộ đồ thể thao"},
          {title: "Quần"},
          {title: "Quần bó"},
          {title: "Quần sóoc"},
          {title: "Áo thun Compression Layers"},
        ],
      },
      {
        title:"PHỤ KIỆN",
        items:[
          {title: "Tất Cả Túi"},
          {title: "Ba lô"},
          {title: "Túi Tập Luyện"},
          {title: "Tất"},
          {title: "Mũ Lưỡi Trai & Đội Đầu"},
          {title: "Găng Tay"},
          {title: "Bóng"},
          {title: "Nẹp Ống Chân & Băng Buộn"},
          {title: "Khẩu Trang"},
        ],
      },
      {
        title:"GIẢM GIÁ",
        items:[
          {title: "Giày"},
          {title: "Quần áo"},
          {title: "Phụ kiện"},
        ],
      },
      {
        title:"THỂ THAO",
        items:[
          {title: "Bóng Đá "},
          {title: "Chạy"},
          {title: "Tập Luyện"},
          {title: "Winter Sports"},
          {title: "Bơi lội"},
          {title: "Đánh Gôn"},
          {title: "Quần vợt"},
        ],
      },
    ],
  },

  {
    href:"/FemalePage",
    name:"NỮ",
    key_mobile: "2",
    list:[
      {
        title:"NỔI BẬT",
        items:[
          {title: "Hàng Mới Về"},
          {title: "Những mặt hàng bán chạy nhất tuần này"},
          {title: "ULTRABOOST"},
          {title: "FORUM"},
          {title: "STELLA MCCARTNEY"},
          {title: "SPORTS BRAS FOR EVERY MOVE"},
        ],
        img:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/training-ss22-bra_rev-launch-navigation-LOGO_tcm337-891237.jpg",
      },
      {
        title:"GIÀY",
        items:[
          {title: "Dòng sản phẩm Originals"},
          {title: "Running"},
          {title: "Tập Luyện"},
          {title: "dep"},
          {title: "Essentials"},
          {title: "Quần vợt"},
        ],
      },
      {
        title:"QUẦN ÁO",
        items:[
          {title: "Áo phông & Áo Không Tay"},
          {title: "Áo Nỉ"},
          {title: "Áo Ngực Thể Thao"},
          {title: "Áo Jersey"},
          {title: "Áo Hoodie"},
          {title: "Áo Nỉ và Bộ đồ thể thao"},
          {title: "Quần"},
          {title: "Quần bó"},
          {title: "Quần sóoc"},
          {title: "Váy liền"},
          {title: "Váy"},
        ],
      },
      {
        title:"PHỤ KIỆN",
        items:[
          {title: "Tất Cả Túi"},
          {title: "Ba_lô"},
          {title: "Túi Tập Luyện"},
          {title: "Tất"},
          {title: "Mũ Lưỡi Trai & Đội Đầu"},
          {title: "Găng Tay"},
          {title: "Khẩu Trang"},
        ],
      },
      {
        title:"GIẢM GIÁ",
        items:[
          {title: "Giày"},
          {title: "Quần áo"},
          {title: "Phụ kiện"},
        ],
      },
      {
        title:"THỂ THAO",
        items:[
          {title: "Chạy"},
          {title: "Tập Luyện"},
          {title: "Tập Yoga"},
          {title: "Đánh Gôn"},
          {title: "Quần vợt"},
        ],
      },
    ],
  },

  {
    href:"/KidsPage",
    name:"TRẺ EM",
    key_mobile: "3",
    list:[
      {
        title:"NỔI BẬT",
        items:[
          {title: "Hàng Mới Về"},
          {title: "Những mặt hàng bán chạy nhất tuần này"},
          {title: "Hiệu năng"},
          {title: "Originals"},
          {title: "Lego"},
          {title: "Aaron Kai x adidas"},
        ],
      },
      {
        title:"THANH THIẾU NIÊN (8-16)",
        items:[
          {title: "Quần Áo Bé Trai"},
          {title: "Quần Áo Bé Gái"},
          {title: "Giày Bé Trai"},
          {title: "Giày Bé Gái"},
        ],
      },
      {
        title:"TRẺ EM (4-8)",
        items:[
          {title: "Quần Áo Bé Trai"},
          {title: "Quần Áo Bé Gái"},
          {title: "Giày Bé Trai"},
          {title: "Giày Bé Gái"},
        ],
      },
      {
        title:"TRẺ NHỎ & TRẺ MỚI BIẾT ĐI (1-4)",
        items:[
          {title: "Quần áo"},
          {title: "Giày"},
        ],
      },
      {
        title:"GIẢM GIÁ",
        items:[
          {title: "Giày"},
          {title: "Quần áo"},
          {title: "Phụ kiện"},
        ],
      },
      {
        title:"THỂ THAO",
        items:[
          {title: "Tập Luyện"},
          {title: "Bóng đá"},
          {title: "Chạy"},
          {title: "Quần gôn"},
        ],
      },
    ],
  },

  {
    href:"/",
    name:"THỂ THAO",
    key_mobile: "4",
    list:[
      {
        title:"BÓNG ĐÁ",
        img:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/football-ss20-uniforia-launch-hp-nav-menu-d_tcm337-843786.jpg" ,
        items:[
          {title: "Giày ống"},
          {title: "Quần áo"},
          {title: "Phụ kiện"},
          {title: "Giày Predator"},
          {title: "Giày X"},
        ],
      },
      {
        title:"CHẠY",
        img:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/Sport_Running_Dropdown_tcm337-843791.jpg",
        items:[
          {title: "Giày"},
          {title: "Quần áo"},
          {title: "Phụ kiện"},
          {title: "Ultraboost 21"},
          {title: "X9000"},
        ],
      },
      {
        title:"BÓNG RỔ",
        img:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/basketball-nav-image-harden-vol-4_tcm337-843792.jpg",
        items:[
          {title: "BÓNG RỔ - GIÀY"},
          {title: "BÓNG RỔ - QUẦN ÁO"},
          {title: "BÓNG RỔ - PHỤ KIỆN"},
          {title: "Harden"},
          {title: "Dame 4"},
        ],
      },
      {
        title:"TẬP LUYỆN",
        img:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/rdy_header_navigation_tcm337-843794.jpg",
        items:[
          {title: "Giày"},
          {title: "Quần áo"},
          {title: "Phụ kiện"},
          {title: "Heat.RDY"},
          {title: "Climacool"},
          {title: "Dòng sản phẩm Essentials"},
        ],
      },
      {
        title:"CÁC MÔN THỂ THAO KHÁC",
        items:[
          {title: "Bơi lội"},
          {title: "Đánh gôn"},
          {title: "Quần vợt"},
        ],
      },
    ],
  },

  {
    href:"/",
    name:"CÁC NHÃN HIỆU",
    key_mobile: "4",
    list:[
      {
        title:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/Originals_Brand_Nav_Title_tcm337-669567.png",
        img:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/Originals_Brand_Nav_Image_tcm337-843840.jpg" ,
        items:[
          {title: "Giày "},
          {title: "Quần áo"},
          {title: "Phụ kiện"},
          {title: "Hàng Mới Về"},
          {title: "Stan smith"},
          {title: "ZX"},
          {title: "Superstar"},
          {title: "NMD"},
        ],
      },
      {
        title:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/brands-sportswear-title_tcm337-669571.png",
        img:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/adidas-athletics_tcm337-850542.jpg",
        items:[
          {title: "Áo Nam"},
          {title: "Áo Nữ"},
          {title: "Hàng Mới Về"},
        ],
      },
    ],
  },

  {
    href:"/",
    name:"RELEASE DATES",
    items:[{}],
  },

  
  
]

const NavBar = () => {
  return (
    <div>
      <div className="header">
       <div className="container-flux">
         <div className="row">
           <div className="col-lg-12">
              <div className="header-top">
                <div className="top__menu">
                  <ul>
                    <li><Link to="/">Trợ giúp</Link></li>
                    <li><Link to="/">Trình theo dõi đơn hàng</Link></li>
                    <li><Link to="/">Đăng ký bản tin</Link></li>
                    <li><Link to="/account-Login">Đăng Nhập</Link></li>
                    <li className="image-flag">
                      <img src="https://adl-foundation.adidas.com/flags/1-0-0/vn.svg" alt="" />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="header-bottom">
                <div className="header__bottom-wrap">
                  <Link to="/" className="bottom__logo">
                    <img src="https://www.adidas.com.vn/glass/react/e1c9357/assets/img/icon-adidas-logo.svg" alt="" />
                  </Link>
                  <ul className="nav-list" >
                    {list.map((item,index)=> {
                      return(
                        <li className= "nav-item" key={index}>
                        <Link to={item.href} className="item-links">
                          {item.name}
                        </Link>
                      </li>
                      )
                    })}
                  </ul>
                  <div className="bottom__right-side-menu">
                    <div className="search__input-wrapper">
                      <form action="">
                        <input className="form-control" placeholder="Tìm kiếm" />
                        <span className="search__input-icon">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                      </form>
                    </div>
                    <Link to="/cart" className="side-menu__cart">
                      <i className="fa-solid fa-bag-shopping"></i>
                    </Link>
                  </div>
                </div>
              </div>
           </div>
         </div>
       </div>
      </div>
    </div>
    
  )
}


export default NavBar