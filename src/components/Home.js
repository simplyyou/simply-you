import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import CarouselX from './CarouselX';

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta name="description" content="Simply You Salon, Boutique and Home Interiors" />
            <meta name="robots" content="index,follow" />
            <title>Simply You</title>
        </Helmet>
        <CarouselX />
      </div>
    );
  }
}

export default Home;