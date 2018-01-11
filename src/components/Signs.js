import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid, Row } from 'react-bootstrap';
import ImageWrapper from './ImageWrapper';
import sign1 from '../images/signs/welcome_metal_sign1.JPG';
import sign2 from '../images/signs/welcome_metal_sign2.JPG';
import journey from '../images/signs/metal sign journey.JPG';
import metal3 from '../images/signs/Metalsign3.jpg';
import metal4 from '../images/signs/Metalsign4.jpg';

class Signs extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta name="description" content="Simply You Signs Jewelry paola Gifts paola Gift ideas paola Gift baskets paola Clocks paola Custom gifts Personalized gifts paola Paola Panther gifts Paola High school gifts Paola Middle school gifts Christmas gifts paola Mothers day gifts paola Fathers day gifts paola Birthday gifts paola Shop local paola Gift cards paola Candles paola Picture frames paola Paola Park Square Teenage rooms Man Cave" />
            <meta name="robots" content="index,follow" />
            <title>Signs</title>
        </Helmet>
        <div className="title-border">
        <h2 className="p-centered">Let us design your custom metal sign.</h2>
        <p className="p-centered">For questions and orders please contact us.</p>
        </div>
        <Grid className="container-fluid">
          <Row>
            <ImageWrapper image={sign1} description={"242x200"} />
            <ImageWrapper image={sign2} description={"242x200"} />
            <ImageWrapper image={journey} description={"242x200"} />
            <ImageWrapper image={metal3} description={"242x200"} />
            <ImageWrapper image={metal4} description={"242x200"} />
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Signs;
