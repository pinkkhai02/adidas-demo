import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import AgeKids from '../../Containers/KidsPage/AgeKids/AgeKids'
import BannerKids from '../../Containers/KidsPage/BannerKids/BannerKids'
import CardKids from '../../Containers/KidsPage/CardKids/CardKids'

const KidsPage = () => {
  return (
    <div>
      <Header/>
      <BannerKids/>
      <AgeKids/>
      <CardKids/>
      <Footer/>
    </div>
  )
}

export default KidsPage