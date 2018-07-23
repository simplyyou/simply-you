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

class CarouselX extends Component {

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="img-carousel" alt="Gourmet Items" src={Kitchen}/>
            <Carousel.Caption>
              <h3>We have a variety of gift ideas</h3>
            </Carousel.Caption>
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
            <img className="img-carousel" alt="Vase" src={Vase2}/>
          <Carousel.Caption>
            <h3>Unique lighting for your home or as gifts</h3>
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
