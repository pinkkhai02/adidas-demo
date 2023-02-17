import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Helmet from '../../Components/Helmet/Helmet'
import ProductDetail from '../../Containers/ProductDetail/ProductDetail'



const Detail = () => {
  // const {show , setShow, detail} = props

  // const close = () =>{
  //   setShow (!show)
  // }
  return (
  // <form className= {show ? "show-form open-show-form" : "show-form"} >
  //     <span>{detail.name}</span>
  //     <button onClick={() => close()}> dong</button>
  //   </form>
  <Helmet title="">
      <Header/>
      <ProductDetail/>
      <Footer/>
  </Helmet>
  )
}

export default Detail