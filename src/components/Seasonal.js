import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid, Row } from 'react-bootstrap';
import ImageWrapper from './ImageWrapper';
import deliver from '../images/interiors/deliver_items.jpg';
import Froggy from '../images/seasonal/Froggy.jpg';
import Cage from '../images/seasonal/Cage.jpg';
import Cupboard from '../images/seasonal/Cupboard.jpg';
import Cupboard2 from '../images/seasonal/Cupboard2.jpg';
import Chicken from '../images/gifts/Chicken.jpg';
import Salsa from '../images/gifts/Salsa.jpg';
import Setting from '../images/gifts/Setting.jpg';
import bunny from '../images/seasonal/bunny.jpg';
import easter from '../images/seasonal/easterdecor.jpg';
import easterdecor from '../images/seasonal/easter.jpg';

class Seasonal extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta name="description" content="Simply You Seasonal Gifts paola Gift ideas Gift baskets Clocks Custom gifts Personalized gifts Panther gifts Paola High school gifts Paola Middle school gifts Christmas gifts paola Mothers day gifts paola Fathers day gifts paola Birthday gifts paola Shop local paola Gift cards paola Candles paola Picture frames paola Lamps paola Lanterns paola Interior design paola Kathy Kane Simply You Paola Park Square Lighting Edison bulbs Teenage rooms" />
            <meta name="robots" content="index,follow" />
            <title>Seasonal</title>
        </Helmet>
        <div className="title-border">
        <h2 className="p-centered">Simply You Seasonal</h2>
        <p className="p-centered">We have a large selection of inspiring looks for each season. </p>
        </div>
        <Grid className="container-fluid">
          <Row>
          <ImageWrapper image={Cupboard2} description={"Interiors"} />
          <ImageWrapper image={deliver} description={"Interiors"} />
          <ImageWrapper image={bunny} description={"Interiors"} />
          <ImageWrapper image={Salsa} description={"Interiors"} />
          <ImageWrapper image={Chicken} description={"Interiors"} />
          <ImageWrapper image={Froggy} description={"Interiors"} />
          <ImageWrapper image={Cage} description={"Interiors"} />
          <ImageWrapper image={Cupboard} description={"Interiors"} />
          <ImageWrapper image={Setting} description={"Interiors"} />
          <ImageWrapper image={easter} description={"Interiors"} />
          <ImageWrapper image={easterdecor} description={"Interiors"} />
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Seasonal;
