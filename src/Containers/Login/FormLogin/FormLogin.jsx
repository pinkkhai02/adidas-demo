import React from "react";
import "./FormLogin.scss";

const FormLogin = () => {
  return (
    <div className="container">
      <div className="row account__login">
        <div className="col-lg-6 login offset-1-1">
          <h3>Đăng Nhập</h3>
          <form className="form-field">
            <div className="login-forgot-password">
              <a href="" className="forgot-password">
                Bạn quên mật khẩu?
              </a>
            </div>
            <div className="form-item">
              <div className="input">
                <input
                  type="email"
                  pattern=".+@gmail\.com" size="30" required
                  className="form-input"
                  placeholder="  "
                ></input>
                <label for="form-email" className="form-label">
                  Email
                  <span className="form-asterisk"></span>
                </label>
              </div>
            </div>
            <div className="form-item">
              <div className="show-hide-password-wrapper">
                <i className="fa-regular fa-eye"></i>
                <button type="button" className="show-hide-password-button">
                  Hiển thị
                </button>
              </div>
              <div className="input">
                <input
                  type="password"
                  className="form-input"
                  placeholder="  "
                ></input>
                <label for="form-email" className="form-label">
                  Mật Khẩu
                  <span className="form-asterisk"></span>
                </label>
              </div>
            </div>
            <div className="check-box">
              <label className="check-box__label">
                <input type="checkbox" className="check-box__input"></input>
                <span className="check-box__text">
                  Giữ đăng nhập cho tôi.
                  <button className=" check-box__button">Thêm thông tin</button>
                </span>
              </label>
            </div>
            <div className="login-button">
              <button type="">
                Đăng Nhập
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="space-small"> HOẶC</div>
            <div className="social-login-form">
              <button type="" className="social-login-form-facebook">
                <span className="social-content">facebook</span>
                <i className="fa-brands fa-facebook"></i>
              </button>
              <button type="" className="social-login-form-google">
                <span className="social-content">google</span>
                <i className="fa-brands fa-google"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-6 login offset-1-1">
          <h3>Tạo một tài khoản</h3>
          <div>
            <p>Thật dễ dàng tạo một tài khoản. Hãy nhập địa chỉ email của bạn và điền vào mẫu trên trang tiếp theo và tận hưởng những lợi ích của việc sở hữu một tài khoản.</p>
            <ul>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>Tổng quan đơn giản về thông tin cá nhân của bạn</span>
              </li>
              <li><i className="fa-solid fa-check"></i>
                <span>Thanh toán nhanh hơn</span></li>
              <li><i className="fa-solid fa-check"></i>
                <span>Một lần đăng nhập chung duy nhất để tương tác với các sản phẩm  </span></li>
              <li><i className="fa-solid fa-check"></i>
                <span>Ưu đãi và khuyến mãi độc quyền</span></li>
              <li><i className="fa-solid fa-check"></i>
                <span>Các sản phẩm mới nhất</span></li>
              <li><i className="fa-solid fa-check"></i>
                <span>Các sự kiện sắp tới</span></li>
              <li><i className="fa-solid fa-check"></i>
                <span>Các bộ sưu tập giới hạn và bộ sưu tập theo mùa mới</span></li>
            </ul>
          </div>
          
              <button type="" className="sign-up">
                Đăng kí
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
