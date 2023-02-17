import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../redux/cartSlice";
import CartItem from "../../Components/CartItem/CartItem";

const Cart = () => {
  // const [quantity, setQuatity] = useState(1);


  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.carts);
  // console.log("check cart", cart);
  const handleDeleteCart = (item) => {
    dispatch(deleteCart(item));
  };

  // const giam = (quantity) => {
  //   if (quantity > 1) {
  //     setQuatity(quantity - 1);
  //   }
// }
  return (
    <div className="cart container">
      {cart.length === 0 ? (
        <div className="row">
          <div className="col-lg-8">
            <h2>Túi của bạn trống</h2>
            <p>
              Once you add something to your bag - it will appear here. Ready to
              get started?
            </p>
            <button type="">
              <Link to="/MalePage">
                GET STARTED
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-product  container ">
          <h2>GIỎ HÀNG CỦA BẠN</h2>
          <div className="row d-flex">
          {cart.map((item, index) => (
              <CartItem item={item} key={index}/>
          ))}
              <div className="col-lg-4 tatol-container">
                <div className="tatol">
                  <h3>TÓM TẮT ĐƠN HÀNG</h3>
                  <div className="bill d-flex justify-content-around align-items-center  m-2">
                    <span>Tổng tiền:</span>
                    <span>
                     {cart.reduce((prev, curr)=>{
                      console.log({prev, curr})
                      return prev + (curr.product.price * curr.quantity)
                    }, 0)}
                    </span>
                  </div>
                  <div className="bill d-flex justify-content-around align-items-center  m-2">
                    <span>Giao hàng:</span>
                    <span>
                     Miễn phí
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
