import React from 'react'
import { Link } from 'react-router-dom'

function SayfaYok() {
  return (
    <>
      <h1>404~Sayfa Bulunamadı</h1>
      <Link to="/" className='btn btn-info'>Anasayfaya Dön</Link>
    </>

   
  )
}

export default SayfaYok