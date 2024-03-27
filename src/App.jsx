import { Link } from 'react-router-dom'
import SiteRoutes from './SiteRoutes'
import Navbar from './components/Navbar'
import './index.css'
import akillisehir from './assets/akillisehir.png'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import twitterx from './assets/twitterx.webp'
import uretkenakademi from './assets/uretkenakademi.webp'
import bursabb from './assets/bursabb.png'
import akillisehirbursa from './assets/akillisehirbursa.png'
import cerenlogo from './assets/cerenlogo.png'




function App() {


  return (
    <>
      <Navbar />
      <br />
      <div className='container'>
        <div className='col-sm-12'>
          <SiteRoutes />
        </div>
        <hr />
        <p><img src={cerenlogo} width="80px" />
          &copy;Ceren ÇELİK tarafından code16 bitirme projesi olarak hazırlanmıştır.</p>
        <p>
          <Link to="https://uretkenakademi.com/"><img src={uretkenakademi} width="100px" /></Link>
          <Link to="https://www.bursa.bel.tr"> <img src={bursabb} width="100px" /></Link>
          <img src={akillisehir} width="100px" />
          <img src={akillisehirbursa} width="100px" />
          <div>
            <Link to="https://www.instagram.com/bursaburfas/"><img src={instagram} width="45px" /></Link>
            <Link to="https://www.facebook.com/bursaburfas/"><img src={facebook} width="45px" /></Link>
            <Link to="https://www.twitter.com/burfasbursa"><img src={twitterx} width="45px" /></Link>
          </div>
        </p>

      </div>

    </>
  )
}

export default App
