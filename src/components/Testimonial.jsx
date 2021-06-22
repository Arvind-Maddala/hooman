import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './style.css/Testimonal.css'

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3100}
      >
        <div>
        <div className="avatar"></div>
          <div className="myCarousel">
            <h2>My new best friend</h2>
            <p>
            Duis augue magna, euismod vel neque nec, egestas commodo nisl. Sed faucibus mi nibh, eu accumsan tellus
            </p>
            <h3>Shirley Fultz</h3>
          </div>
        </div>

        <div>
        <div className="avatar1"></div>
          <div className="myCarousel">
            <h2>Best experience ever</h2>
            <p>
            Phasellus finibus velit ut turpis venenatis rutrum. Aliquam erat volutpat. Donec sit amet auctor enim, ut eleifend felis
            </p>
            <h3>Daniel Keystone</h3>
          </div>
        </div>

        <div>
        <div className="avatar2"></div>
          <div className="myCarousel">
            <h2>Glad that we adopted</h2>
            <p>
            Aliquam finibus elit risus, a malesuada odio ornare vitae. Fusce placerat enim eu mi iaculis ornare roin aliquet
            </p>
            <h3>Theo Sorel</h3>
          </div>
        </div>
      </Carousel>
    );
  }
}