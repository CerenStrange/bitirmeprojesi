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
        <p><img src="src/assets/cerenlogo.png" width="80px" />
          &copy;Ceren ÇELİK tarafından code16 bitirme projesi olarak hazırlanmıştır.</p>
        <p>
          <Link to="https://uretkenakademi.com/"><img src="src/assets/uretkenakademi.webp" width="100px" /></Link>
          <Link to="https://www.bursa.bel.tr"> <img src="src/assets/bursabb.png" width="100px" /></Link>
          <img src="src/assets/akillisehir.png" width="100px" />
          <img src="src/assets/akillisehirbursa.png" width="100px" />
          <div>
            <Link to="https://www.instagram.com/bursaburfas/"><img src="src/assets/instagram.png" width="45px" /></Link>
            <Link to="https://www.facebook.com/bursaburfas/"><img src="src/assets/facebook.png" width="45px" /></Link>
            <Link to="https://www.twitter.com/burfasbursa"><img src="src/assets/twitterx.webp" width="45px" /></Link>
          </div>
        </p>

      </div>

    </>
  )
}

export default App
