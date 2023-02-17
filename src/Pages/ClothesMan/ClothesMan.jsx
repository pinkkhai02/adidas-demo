import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Helmet from '../../Components/Helmet/Helmet'
import ProductClothesMan from '../../Containers/ProductClothesMan/ProductClothesMan'

const ClothesMan = () => {
  return (
    <Helmet title="Quần Áo"> 
      <Header/>
      <ProductClothesMan/>
      <Footer/>
    </Helmet>
  )
}

export default ClothesMan