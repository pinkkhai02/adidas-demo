import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Helmet from '../../Components/Helmet/Helmet'
import ProductShoeMan from '../../Containers/ProductShoeMan/ProductShoeMan'

const ShoeMan = () => {
  return (
    <Helmet title="Giày">
      <Header/>
      <ProductShoeMan/>
      <Footer/>
    </Helmet>
  )
}

export default ShoeMan