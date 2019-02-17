import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import candle_holders from '../images/home/candle_holders.jpg';
import lantern5 from '../images/home/lantern5.jpg';
import EndTableDecor from '../images/home/EndTableDecor.jpg';
import Follows from '../images/home/Follows.jpeg';
import Vase2 from '../images/home/Vase2.jpg';
import TanPurse from '../images/home/TanPurse.jpg';
import Setter from '../images/home/Setter.jpg';
import Clockwork from '../images/home/Clockwork.jpg';
import Blacker from '../images/home/Blacker.jpg';
import Shelver from '../images/home/Shelver.jpg';
import easterbunny from '../images/home/easterbunny.jpg';
import shabang from '../images/home/shabang.jpg';
import brightest from '../images/home/brightest.jpg';
import SpringPurses from '../images/home/SpringPurses.jpg';
import Kitchen from '../images/home/Kitchen.jpg';
import Cowsettings from '../images/home/Cowsettings.jpg';
import Lambset from '../images/home/Lambset.jpg';
import Facebook from '../images/home/Facebook.JPG';
import Hh from '../images/home/H-min.jpeg';
import Ho from '../images/home/Ho-min.jpeg';
import Hom from '../images/home/Hom-min.jpeg';
import c from '../images/home/c.jpeg';
import ca from '../images/home/ca.jpeg';
import car from '../images/home/car.jpeg';
import caro from '../images/home/caro.jpeg';
import Car1 from '../images/home/Car1.jpeg';
import q from '../images/home/q.jpg';
import qq from '../images/home/qq.jpg';
import qqq from '../images/home/qqq.JPG';
import qqqq from '../images/home/qqqq.jpg';
import qqqqq from '../images/home/qqqqq.jpg';
import qqqqqq from '../images/home/qqqqqq.jpg';
import qqqqqqq from '../images/home/qqqqqqq.jpg';
import r from '../images/home/r.jpg';
import rr from '../images/home/rr.jpg';
import rrr from '../images/home/rrr.jpg';
import rrrr from '../images/home/rrrr.jpg';
import rrrrr from '../images/home/rrrrr.jpg';
import springcollage from '../images/home/springcollage.jpg';

class CarouselX extends Component {

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="img-carousel" alt="Gourmet Items" src={springcollage}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Gourmet Items" src={Lambset}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Gourmet Items" src={Shelver}/>
            <Carousel.Caption>
              <h3>Purses for every season</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Purse" src={SpringPurses}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Purse" src={Cowsettings}/>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselX;
