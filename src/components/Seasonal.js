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
import a from '../images/seasonal/a.jpeg';
import au from '../images/seasonal/au.jpeg';
import aut from '../images/seasonal/aut.jpeg';
import autu from '../images/seasonal/autu.jpeg';
import autum from '../images/seasonal/autum.jpeg';
import autumn from '../images/seasonal/autumn.jpeg';
import autumne from '../images/seasonal/autumne.jpeg';
import autumner from '../images/seasonal/autumner.jpeg';
import autumnern from '../images/seasonal/autumnern.jpeg';
import autumnerne from '../images/seasonal/autumnerne.jpeg';
import b from '../images/seasonal/b.jpeg';
import bl from '../images/seasonal/bl.jpeg';
import blu from '../images/seasonal/blu.jpeg';
import blue from '../images/seasonal/blue.jpeg';
import f from '../images/seasonal/f.jpeg';
import fa from '../images/seasonal/fa.jpeg';
import fal from '../images/seasonal/fal.jpeg';
import fall from '../images/seasonal/fall.jpeg';
import x from '../images/seasonal/bigwreath.jpg';
import xx from '../images/seasonal/christdecor.jpg';
import xxx from '../images/seasonal/lanternrud.jpg';
import xxxx from '../images/seasonal/merry.jpg';
import xxxxx from '../images/seasonal/ornament.jpg';
import xxxxxx from '../images/seasonal/owl.jpg';
import z from '../images/seasonal/piano.jpg';
import zz from '../images/seasonal/rein.JPEG';
import zzzz from '../images/seasonal/rudolph.jpg';
import zzzzz from '../images/seasonal/santa.jpg';
import y from '../images/seasonal/santawheel.jpg';
import yy from '../images/seasonal/Towels.jpeg';
import yyy from '../images/seasonal/tree.jpg';
import yyyy from '../images/seasonal/wreath.JPEG';
import q from '../images/seasonal/twain.jpeg';
import qq from '../images/seasonal/RedLantern.jpg';
import qqq from '../images/seasonal/individ.jpg';
import qqqq from '../images/seasonal/frosty.jpg';

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
          <ImageWrapper image={x} description={"Interiors"} />
          <ImageWrapper image={xx} description={"Interiors"} />
          <ImageWrapper image={xxx} description={"Interiors"} />
          <ImageWrapper image={xxxx} description={"Interiors"} />
          <ImageWrapper image={xxxxx} description={"Interiors"} />
          <ImageWrapper image={xxxxxx} description={"Interiors"} />
          <ImageWrapper image={y} description={"Interiors"} />
          <ImageWrapper image={yyy} description={"Interiors"} />
          <ImageWrapper image={yy} description={"Interiors"} />
          <ImageWrapper image={yyyy} description={"Interiors"} />
          <ImageWrapper image={z} description={"Interiors"} />
          <ImageWrapper image={zz} description={"Interiors"} />
          <ImageWrapper image={zzzz} description={"Interiors"} />
          <ImageWrapper image={zzzzz} description={"Interiors"} />
          <ImageWrapper image={Cupboard2} description={"Interiors"} />
          <ImageWrapper image={blue} description={"Interiors"} />
          <ImageWrapper image={fal} description={"Interiors"} />
          <ImageWrapper image={a} description={"Interiors"} />
          <ImageWrapper image={autumn} description={"Interiors"} />
          <ImageWrapper image={autumner} description={"Interiors"} />
          <ImageWrapper image={autumnern} description={"Interiors"} />
          <ImageWrapper image={autumnerne} description={"Interiors"} />
          <ImageWrapper image={b} description={"Interiors"} />
          <ImageWrapper image={fall} description={"Interiors"} />
          <ImageWrapper image={Sea} description={"Interiors"} />
          <ImageWrapper image={Seas} description={"Interiors"} />
          <ImageWrapper image={Salsa} description={"Interiors"} />
          <ImageWrapper image={Chicken} description={"Interiors"} />
          <ImageWrapper image={Froggy} description={"Interiors"} />
          <ImageWrapper image={Cupboard} description={"Interiors"} />
          <ImageWrapper image={q} description={"Interiors"} />
          <ImageWrapper image={qq} description={"Interiors"} />
          <ImageWrapper image={qqq} description={"Interiors"} />
          <ImageWrapper image={qqqq} description={"Interiors"} />
          <ImageWrapper image={SSs} description={"Interiors"} />
          <ImageWrapper image={Se} description={"Interiors"} />
          <ImageWrapper image={Season} description={"Interiors"} />
          <ImageWrapper image={au} description={"Interiors"} />
          <ImageWrapper image={aut} description={"Interiors"} />
          <ImageWrapper image={autu} description={"Interiors"} />
          <ImageWrapper image={autumne} description={"Interiors"} />
          <ImageWrapper image={blu} description={"Interiors"} />
          <ImageWrapper image={fa} description={"Interiors"} />
          <ImageWrapper image={bl} description={"Interiors"} />
          <ImageWrapper image={f} description={"Interiors"} />
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Seasonal;
