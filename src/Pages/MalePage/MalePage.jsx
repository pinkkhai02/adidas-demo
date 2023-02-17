import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Helmet from '../../Components/Helmet/Helmet'
import BannerMale from '../../Containers/MalePage/BanerMale/BannerMale'
import CardMale from '../../Containers/MalePage/CardMale/CardMale'
import Menu from '../../Containers/MalePage/Menu/Menu'
import SlideMale from '../../Containers/MalePage/SlideMale/SlideMale'


const MalePage = () => {
  return (
    <Helmet title="Mens Clothing & Sportwear">
      <Header/>
      <BannerMale/>
      <Menu/>
      <SlideMale/>
      <CardMale/>
      <Footer/>
    </Helmet>
  )
}

export default MalePage