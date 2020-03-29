import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid, Row } from 'react-bootstrap';
import ImageWrapper from './ImageWrapper';
import redken from '../images/products/redken.jpg';
import pureology from '../images/products/pureologys.png';

class Products extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta name="description" content="Simply You products Gifts paola Gift ideas paola Gift baskets paola Clocks paola Custom gifts Personalized gifts paola Paola Panther gifts Paola High school gifts Paola Middle school gifts Christmas gifts paola Mothers day gifts Fathers day gifts paola Birthday gifts paola Shop local paola Gift cards paola Candles paola Picture frames Lamps Lanterns Interior design Kathy Kane Simply You Paola Park Square Lighting Edison bulbs Teenage rooms" />
          <meta name="robots" content="index,follow" />
          <title>Interiors</title>
        </Helmet>
        <div className="title-border">
        <h2 className="p-centered">Simply You Products</h2>
        <p className="p-centered"></p>
        </div>
        <Grid className="container-fluid">
          <Row>
            <ImageWrapper image={redken} description={"Products"} />
            <ImageWrapper image={pureology} description={"Products"} />
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Products;
