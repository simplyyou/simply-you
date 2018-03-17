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

class CarouselX extends Component {

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="img-carousel" alt="Table Decor" src={easterbunny}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Table Decor" src={shabang}/>
            <Carousel.Caption>
              <h3>Check out our new Spring items!</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Table Decor" src={brightest}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Table Decor" src={Setter}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Clocks" src={Clockwork}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Lamp" src={Blacker}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Gourmet Items" src={Shelver}/>
            <Carousel.Caption>
              <h3>Come in and see our new selection of purses and jewelry.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Table Decor" src={EndTableDecor}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Purse" src={TanPurse}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Vase" src={Vase2}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Sign" src={Follows}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Purse" src={SpringPurses}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Candle Holders" src={candle_holders}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" alt="Lantern" src={lantern5}/>
            <Carousel.Caption>
              <h3>We have a variety of lanterns that are perfect for decorating inside and out.</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselX;
