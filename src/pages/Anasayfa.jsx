import React from 'react'
import { Link } from 'react-router-dom'
import burfas from './assets/burfas.png'


function Anasayfa() {
  return (
    <>
      <div className="card mt-5 mb-3">
        <img src={burfas} width="70%" />
        <div className="card-body">
          <h5 className="card-title">BURFAŞ Restoranlarımız</h5>
          <p className="card-text">  </p>
          <Link className='btn btn-primary btn-md' to="/subeler">Restoran bilgileri için tıklayın</Link>
        </div>
      </div>
    </>
  )
}

export default Anasayfa
