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
import l from '../images/seasonal/l.jpg';
import ll from '../images/seasonal/ll.jpg';
import lll from '../images/seasonal/lll.jpg';
import llll from '../images/seasonal/llll.jpg';
import lllll from '../images/seasonal/lllll.jpg';
import llllll from '../images/seasonal/llllll.jpg';
import m from '../images/seasonal/m.jpg';
import mm from '../images/seasonal/mm.jpg';
import mmm from '../images/seasonal/mmm.jpg';
import mmmmm from '../images/seasonal/mmmmm.jpg';
import mmmmmm from '../images/seasonal/mmmmmm.jpg';
import n from '../images/seasonal/n.jpg';
import nn from '../images/seasonal/nn.jpg';
import nnn from '../images/seasonal/nnn.JPG';
import nnnn from '../images/seasonal/nnnn.jpg';
import nnnnn from '../images/seasonal/nnnnn.jpg';
import nnnnnn from '../images/seasonal/nnnnnn.jpg';
import o from '../images/seasonal/o.jpg';
import oo from '../images/seasonal/oo.jpg';
import ooo from '../images/seasonal/ooo.jpg';
import oooo from '../images/seasonal/oooo.jpg';
import ooooo from '../images/seasonal/ooooo.jpg';
import oooooo from '../images/seasonal/oooooo.jpg';
import p from '../images/seasonal/p.jpg';
import pp from '../images/seasonal/pp.jpg';
import ppp from '../images/seasonal/ppp.jpg';
import e from '../images/seasonal/e.jpg';
import ee from '../images/seasonal/ee.jpg';
import eee from '../images/seasonal/eee.jpg';
import eeee from '../images/seasonal/eeee.jpg';
import eeeee from '../images/seasonal/eeeee.jpg';
import eeeeee from '../images/seasonal/eeeeee.jpg';
import fart from '../images/seasonal/fart.jpg';
import ff from '../images/seasonal/ff.jpg';
import fff from '../images/seasonal/fff.jpg';
import ffff from '../images/seasonal/ffff.jpg';
import fffff from '../images/seasonal/fffff.jpg';
import ffffff from '../images/seasonal/ffffff.jpg';
import g from '../images/seasonal/g.jpg';
import gg from '../images/seasonal/gg.jpg';
import easter1 from '../images/seasonal/easter1.jpeg';
import easter2 from '../images/seasonal/easter2.jpg';
import easter3 from '../images/seasonal/easter3.jpg';
import t from '../images/seasonal/t.jpg';
import tt from '../images/seasonal/tt.jpg';
import ttttt from '../images/seasonal/ttttt.jpg';
import ttt from '../images/seasonal/ttt.jpg';
import tttt from '../images/seasonal/tttt.jpg';
import tttttt from '../images/seasonal/tttttt.jpg';
import igs from '../images/gifts/igs.jpg';
import s11014 from '../images/seasonal/s1014.jpeg';
import s21014 from '../images/seasonal/s21014.jpeg';
import s31014 from '../images/seasonal/s31014.jpeg';
import s41014 from '../images/seasonal/s41014.jpeg';
import bigwreath from '../images/seasonal/bigwreath.jpg';
import christdecor from '../images/seasonal/christdecor.jpg';
import Christmas1 from '../images/seasonal/Christmas1.jpg';
import Christmas2 from '../images/seasonal/Christmas2.jpg';
import frosty from '../images/seasonal/frosty.jpg';
import hi from '../images/seasonal/hi.png';
import individ from '../images/seasonal/individ.jpg';
import MerryChristmas from '../images/seasonal/MerryChristmas.jpg';
import NatureDecor from '../images/seasonal/NatureDecor.jpg';
import ornament from '../images/seasonal/ornament.jpg';
import Ornaments from '../images/seasonal/Ornaments.jpg';
import piano from '../images/seasonal/piano.jpg';
import c1 from '../images/seasonal/c1.jpg';
import c2 from '../images/seasonal/c2.jpg';
import c3 from '../images/seasonal/c3.jpg';
import c4 from '../images/seasonal/c4.jpg';
import c5 from '../images/seasonal/c5.jpg';
import c6 from '../images/seasonal/c6.jpg';
import c7 from '../images/seasonal/c7.jpg';
import c8 from '../images/seasonal/c8.jpg';
import c9 from '../images/seasonal/c9.jpg';
import c10 from '../images/seasonal/c10.jpg';
import c11 from '../images/seasonal/c11.jpg';
import a1 from '../images/seasonal/a1.jpg';
import a2 from '../images/seasonal/a2.jpg';
import a3 from '../images/seasonal/a3.jpg';
import a4 from '../images/seasonal/a4.jpg';
import a5 from '../images/seasonal/a5.jpg';
import d1 from '../images/seasonal/d1.jpg';
import d2 from '../images/seasonal/d2.jpg';






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
          <ImageWrapper image={d1} description={"Interiors"} />
          <ImageWrapper image={d2} description={"Interiors"} />
          <ImageWrapper image={c1} description={"Interiors"} />

          <ImageWrapper image={c3} description={"Interiors"} />
          <ImageWrapper image={c11} description={"Interiors"} />
          <ImageWrapper image={c4} description={"Interiors"} />
          <ImageWrapper image={c5} description={"Interiors"} />
          <ImageWrapper image={c6} description={"Interiors"} />
          <ImageWrapper image={c7} description={"Interiors"} />
          <ImageWrapper image={c8} description={"Interiors"} />
          <ImageWrapper image={c9} description={"Interiors"} />
          <ImageWrapper image={hi} description={"Interiors"} />
          <ImageWrapper image={ornament} description={"Interiors"} />
          <ImageWrapper image={Ornaments} description={"Interiors"} />
          <ImageWrapper image={piano} description={"Interiors"} />
          <ImageWrapper image={g} description={"Interiors"} />
          <ImageWrapper image={gg} description={"Interiors"} />
          <ImageWrapper image={eeee} description={"Interiors"} />
          <ImageWrapper image={ffffff} description={"Interiors"} />
          <ImageWrapper image={fffff} description={"Interiors"} />
          <ImageWrapper image={eeeee} description={"Interiors"} />
          <ImageWrapper image={eeeeee} description={"Interiors"} />
          <ImageWrapper image={fart} description={"Interiors"} />
          <ImageWrapper image={ff} description={"Interiors"} />
          <ImageWrapper image={fff} description={"Interiors"} />
          <ImageWrapper image={ffff} description={"Interiors"} />
          <ImageWrapper image={Christmas1} description={"Interiors"} />
          <ImageWrapper image={e} description={"Interiors"} />
          <ImageWrapper image={ee} description={"Interiors"} />
          <ImageWrapper image={eee} description={"Interiors"} />
          <ImageWrapper image={bigwreath} description={"Interiors"} />
          <ImageWrapper image={s11014} description={"Interiors"} />
          <ImageWrapper image={s21014} description={"Interiors"} />
          <ImageWrapper image={s31014} description={"Interiors"} />
          <ImageWrapper image={Froggy} description={"Interiors"} />
          <ImageWrapper image={au} description={"Interiors"} />
          <ImageWrapper image={igs} description={"Interiors"} />
          <ImageWrapper image={s41014} description={"Interiors"} />
          <ImageWrapper image={Christmas2} description={"Interiors"} />
          <ImageWrapper image={frosty} description={"Interiors"} />
          <ImageWrapper image={individ} description={"Interiors"} />
          <ImageWrapper image={l} description={"Interiors"} />
          <ImageWrapper image={ll} description={"Interiors"} />
          <ImageWrapper image={lll} description={"Interiors"} />
          <ImageWrapper image={llll} description={"Interiors"} />
          <ImageWrapper image={lllll} description={"Interiors"} />
          <ImageWrapper image={llllll} description={"Interiors"} />
          <ImageWrapper image={m} description={"Interiors"} />
          <ImageWrapper image={MerryChristmas} description={"Interiors"} />
          <ImageWrapper image={mmm} description={"Interiors"} />
          <ImageWrapper image={mmmmm} description={"Interiors"} />
          <ImageWrapper image={mmmmmm} description={"Interiors"} />
          <ImageWrapper image={n} description={"Interiors"} />
          <ImageWrapper image={NatureDecor} description={"Interiors"} />
          <ImageWrapper image={nn} description={"Interiors"} />
          <ImageWrapper image={nnn} description={"Interiors"} />
          <ImageWrapper image={nnnn} description={"Interiors"} />
          <ImageWrapper image={nnnnn} description={"Interiors"} />
          <ImageWrapper image={nnnnnn} description={"Interiors"} />
          <ImageWrapper image={o} description={"Interiors"} />
          <ImageWrapper image={oo} description={"Interiors"} />
          <ImageWrapper image={ooo} description={"Interiors"} />
          <ImageWrapper image={oooo} description={"Interiors"} />
          <ImageWrapper image={ooooo} description={"Interiors"} />
          <ImageWrapper image={oooooo} description={"Interiors"} />
          <ImageWrapper image={p} description={"Interiors"} />
          <ImageWrapper image={pp} description={"Interiors"} />
          <ImageWrapper image={ppp} description={"Interiors"} />
          <ImageWrapper image={a1} description={"Interiors"} />
          <ImageWrapper image={a2} description={"Interiors"} />
          <ImageWrapper image={a3} description={"Interiors"} />
          <ImageWrapper image={a4} description={"Interiors"} />
          <ImageWrapper image={a5} description={"Interiors"} />
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Seasonal;
