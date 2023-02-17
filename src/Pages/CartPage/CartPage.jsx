import React from 'react'
import Helmet from '../../Components/Helmet/Helmet'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Cart from '../../Containers/Cart/Cart'

const CartPage = () => {
  return (
    <Helmet title='Cart'>
      <Header/>
      <Cart/>
      <Footer/>
    </Helmet>
  )
}

export default CartPage