import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import FormLogin from '../../Containers/Login/FormLogin/FormLogin'

import Helmet from '../../Components/Helmet/Helmet'

const accountLogin = () => {
  return (
    <Helmet title='Đăng Nhập'>
      <Header/>
      <FormLogin/>
      <Footer/>
    </Helmet>
  )
}

export default accountLogin