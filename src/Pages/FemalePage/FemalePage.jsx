import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Helmet from '../../Components/Helmet/Helmet'
import BanerFemale from '../../Containers/FemalePage/BanerFemale/BanerFemale'
import CardFemale from '../../Containers/FemalePage/CardFemale/CardFemale'
import Slide from '../../Containers/HomePage/Slide/Slide'
import Menu from '../../Containers/MalePage/Menu/Menu'

const FemalePage = () => {
  return (
   <Helmet title="Womens Clothing & Sportwear">
      <Header/>
      <BanerFemale/>
      <Slide/>
      <Menu/>
      <CardFemale/>
      <Footer/>
   </Helmet>
  )
}

export default FemalePage