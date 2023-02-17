import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Helmet from '../../Components/Helmet/Helmet'
import ProductAccessoriesMan from '../../Containers/ProductAccessoriesMan/ProductAccessoriesMan'


const AccessoriesMan = () => {
  return (
    <Helmet title="Phụ Kiện">
      <Header />
      <ProductAccessoriesMan/>
      <Footer/>
    </Helmet>
  )
}

export default AccessoriesMan