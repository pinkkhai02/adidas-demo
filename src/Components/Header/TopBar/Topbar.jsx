import React from 'react';
import "./TopBar.scss";

const Topbar = () => {

  const listTopbar = [
    {
      title: "Miễn phí giao hàng trên 1.300.000 vnd",
      content:
        "Miễn phí giao hàng cho tất cả các đơn hàng từ 1.300.000 VNĐ trở lên.Cho các đơn hàng còn lại, phí giao hàng tiêu chuẩn được áp dụng.",
    },
    {
      title: "Trả hàng dễ dàng",
      content:
        "Nếu bạn không hài lòng với đơn hàng của mình, bạn có thể được hoàn lại tiền.",
    },
    {
      title: "Nay có thể thanh toán với thẻ tín dụng!",
      content:
        "Giờ đây bạn có thể thanh toán bằng thẻ Visa và Mastercard! Lựa chọn phương thức.Thanh toán bằng thẻ tín dụng ở bước thanh toán. Mua các sản phẩm yêu thích ngay thôi!",
    },
  ];

  return (
    <section>
        <div className="top-bar">
        {listTopbar.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div>
    </section>
  )
}

export default Topbar