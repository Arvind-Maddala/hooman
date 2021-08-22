import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import NavBar from '../layouts/NavBar';
import '../style.css/WhyAdopt.css';
import BtnComponent from '../helpers/BtnComponent';

const WhyAdopt = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
   }, [])
  return (
    <>
    <div className="main">
    <NavBar/>
    <div className="main__text">
    <h2>Why adopt</h2>
      <p>World’s largest no-kill rescue and adoption</p>
    </div>
      </div>
      <div className="adopt-container">
        <div data-aos="fade-up" className="adopt-1">
          <div className="adopt-1-image">

          </div>
          <div className="adopt-text">
            <h2>Reasons to adopt</h2>
            <p>Vivamus fermentum elementum placerat. Sed lacinia rutrum viverra. Duis id pulvinar magna. Morbi viverra, arcu eu laoreet accumsan, leo tortor gravida mauris, nec dapibus nulla lacus et velit. Praesent mollis pellentesque turpis, eu efficitur justo tincidunt in. Vestibulum sapien purus, fermentum eu dictum vel, molestie rutrum justo. Sed volutpat varius nulla eu venenatis. Ut ac lacus maximus, consectetur nunc in, molestie mauris consectetur in fermentu</p>
            <BtnComponent text='Adopt now' styleName="whyAdoptBtn"/>
          </div>
        </div>
        <div data-aos="fade-up"  className="adopt-2">
          
          <div className="adopt-text">
            <h2>Choose your pet</h2>
            <p>Vivamus fermentum elementum placerat. Sed lacinia rutrum viverra. Duis id pulvinar magna. Morbi viverra, arcu eu laoreet accumsan, leo tortor gravida mauris, nec dapibus nulla lacus et velit. Praesent mollis pellentesque turpis, eu efficitur justo tincidunt in. Vestibulum sapien purus, fermentum eu dictum vel, molestie rutrum justo. Sed volutpat varius nulla eu venenatis. Ut ac lacus maximus, consectetur nunc in, molestie mauris consectetur in fermentu</p>
            <BtnComponent text='Adopt now' styleName="whyAdoptBtn"/>
          </div>
          <div className="adopt-2-image">

          </div>
        </div>
        <div data-aos="fade-up" className="adopt-3">
          <div className="adopt-3-image">

          </div>
          <div className="adopt-text">
            <h2>Reasons to adopt</h2>
            <p>Vivamus fermentum elementum placerat. Sed lacinia rutrum viverra. Duis id pulvinar magna. Morbi viverra, arcu eu laoreet accumsan, leo tortor gravida mauris, nec dapibus nulla lacus et velit. Praesent mollis pellentesque turpis, eu efficitur justo tincidunt in. Vestibulum sapien purus, fermentum eu dictum vel, molestie rutrum justo. Sed volutpat varius nulla eu venenatis. Ut ac lacus maximus, consectetur nunc in, molestie mauris consectetur in fermentu</p>
            <BtnComponent text='Adopt now' styleName="whyAdoptBtn"/>
          </div>
        </div>
      </div>
      </>
  )
}

export default WhyAdopt
