import React from 'react'
import Header from '../components/Header'
import Informations from '../components/Informations'
import Footer from '../components/Footer'
import '../app/globals.css'

const Infos = () => {
  return (
    <div className='presentation'>
      <Header />
      <Informations />
      <Footer />
    </div>
  )
}

export default Infos