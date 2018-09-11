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
import SSs from '../images/seasonal/S-min.jpeg';
import Se from '../images/seasonal/Se-min.jpeg';
import Sea from '../images/seasonal/Sea-min.jpeg';
import Seas from '../images/seasonal/Seas-min.jpeg';
import Seaso from '../images/seasonal/Seaso-min.jpeg';
import Season from '../images/seasonal/Season-min.jpeg';
import Seasona from '../images/seasonal/Seasona-min.jpeg';

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
        <p className="p-centered">We bring in new items for each season. </p>
        </div>
        <Grid className="container-fluid">
          <Row>
          <ImageWrapper image={Cupboard2} description={"Interiors"} />
          <ImageWrapper image={Sea} description={"Interiors"} />
          <ImageWrapper image={Seas} description={"Interiors"} />
          <ImageWrapper image={Seaso} description={"Interiors"} />
          <ImageWrapper image={Seasona} description={"Interiors"} />
          <ImageWrapper image={Salsa} description={"Interiors"} />
          <ImageWrapper image={Chicken} description={"Interiors"} />
          <ImageWrapper image={Froggy} description={"Interiors"} />
          <ImageWrapper image={Cupboard} description={"Interiors"} />
          <ImageWrapper image={SSs} description={"Interiors"} />
          <ImageWrapper image={Se} description={"Interiors"} />
          <ImageWrapper image={Season} description={"Interiors"} />
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Seasonal;
