import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid, Row } from 'react-bootstrap';
import ImageWrapper from './ImageWrapper';
import interior1 from '../images/interiors/home_interior1.JPG';
import interior2 from '../images/interiors/home_interior2.JPG';
import interior4 from '../images/interiors/interiors4.jpg';
import interior5 from '../images/interiors/interiors5.jpg';
import interior6 from '../images/interiors/interiors6.jpg';
import interior9 from '../images/interiors/interiors9.jpg';
import interior18 from '../images/interiors/interiors18.jpg';
import interior20 from '../images/interiors/interiors20.jpg';
import deliver from '../images/interiors/deliver_items.jpg';
import lantern4 from '../images/interiors/lantern4.jpg';
import lantern5 from '../images/interiors/lantern5.jpg';
import lantern6 from '../images/interiors/lantern6.jpg';
import lantern8 from '../images/interiors/lantern8.JPG';
import milk_can from '../images/interiors/milk_can.jpg';
import tins from '../images/interiors/tins.JPG';
import tins2 from '../images/interiors/tins2.jpg';
import vase from '../images/interiors/vase.jpg';
import wall_hanging from '../images/interiors/wall_hanging.JPG';
import candle_holders from '../images/interiors/candle_holders.jpg';
import door from '../images/interiors/door.JPG';
import frame from '../images/interiors/frame.jpg';
import clock from '../images/interiors/black and silver clock.JPG';
import heart from '../images/interiors/Key my heart.JPG';
import tray from '../images/interiors/live simply tray.JPG';
import metal_clock from '../images/interiors/metal clock.JPG';
import canister from '../images/interiors/Tin canister.JPG';
import wine_sign from '../images/interiors/wine is awesome sign.JPG';
import wood_and_metal_sign from '../images/interiors/wood and metal sign.JPG';
import wine_bottles from '../images/interiors/Wine_bottles.png';
import Bacon_Sign from '../images/interiors/Bacon_Sign.jpg';
import Cabinet from '../images/interiors/Cabinet.jpg';
import Cabinet2 from '../images/interiors/Cabinet(2).jpg';
import Clock2 from '../images/interiors/Clock2.jpg';
import CuttingBoard1 from '../images/interiors/CuttingBoard1.jpg';
import cuttingboard3 from '../images/interiors/cuttingboard3.jpg';
import CuttingBoard5 from '../images/interiors/Cuttingboard5.jpg';
import Doorknobsign from '../images/interiors/Doorknobsign.jpg';
import EdisonLantern from '../images/interiors/EdisonLantern(1).jpg';
import EndTableDecor from '../images/interiors/EndTableDecor(1).jpg';
import endtabledecor2 from '../images/interiors/endtabledecor2.jpg';
import HangingLantern from '../images/interiors/HangingLantern.jpg';
import HangingLight from '../images/interiors/HangingLight.jpg';
import HangingRack from '../images/interiors/HangingRack(1).jpg';
import Mirror from '../images/interiors/Mirror.jpg';
import Mirror2 from '../images/interiors/Mirror2.jpg';
import PillowandDecanter from '../images/interiors/PillowandDecanter.jpg';
import Rooster from '../images/interiors/Rooster1.jpg';
import Winemakingmeawesome from '../images/interiors/Winemakingmeawesome.jpg';
import WoodenTray from '../images/interiors/WoodenTray(1).jpg';
import CabinetLantern from '../images/gifts/HangingLantern.jpg';
import wine_pillows from '../images/interiors/Wine_pillows.png';
import Mirrors from '../images/interiors/mirrors.jpeg';
import Lanterns from '../images/interiors/lanterns.jpeg';
import WhiteLamp from '../images/interiors/WhiteLamp.jpeg';
import BlackLamp from '../images/interiors/BlackLamp.jpeg';
import Follow from '../images/interiors/Follow.jpeg';
import Lanterny from '../images/interiors/Lanterny.jpeg';
import GlassLamp from '../images/interiors/GlassLamp.jpeg';

class Interiors extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta name="description" content="Simply You Interiors Gifts paola Gift ideas paola Gift baskets paola Clocks paola Custom gifts Personalized gifts paola Paola Panther gifts Paola High school gifts Paola Middle school gifts Christmas gifts paola Mothers day gifts Fathers day gifts paola Birthday gifts paola Shop local paola Gift cards paola Candles paola Picture frames Lamps Lanterns Interior design Kathy Kane Simply You Paola Park Square Lighting Edison bulbs Teenage rooms" />
          <meta name="robots" content="index,follow" />
          <title>Interiors</title>
        </Helmet>
        <div className="title-border">
        <h2 className="p-centered">Simply You Interiors</h2>
        <p className="p-centered">Simply You is situated on the historic park square in Paola. We get new items in weekly so you are sure to find something unique and different each time you visit. Our home interiors collection includes items for each room in your home. We carry items that are timeless as well as some of the latest trends. We are excited to be able to share our love for decorating with you.</p>
        </div>
        <Grid className="container-fluid">
          <Row>
            <ImageWrapper image={wine_bottles} description={"Interiors"} />
            <ImageWrapper image={deliver} description={"Interiors"} />
            <ImageWrapper image={Rooster} description={"Interiors"} />
            <ImageWrapper image={WhiteLamp} description={"Interiors"} />
            <ImageWrapper image={Lanterny} description={"Interiors"} />
            <ImageWrapper image={BlackLamp} description={"Interiors"} />
            <ImageWrapper image={GlassLamp} description={"Interiors"} />
            <ImageWrapper image={HangingLantern} description={"Interiors"} />
            <ImageWrapper image={Lanterns} description={"Interiors"} />
            <ImageWrapper image={endtabledecor2} description={"Interiors"} />
            <ImageWrapper image={EdisonLantern} description={"Interiors"} />
            <ImageWrapper image={Doorknobsign} description={"Interiors"} />
            <ImageWrapper image={CabinetLantern} description={"Interiors"} />
            <ImageWrapper image={Cabinet2} description={"Interiors"} />
            <ImageWrapper image={Cabinet} description={"Interiors"} />
            <ImageWrapper image={Bacon_Sign} description={"Interiors"} />
            <ImageWrapper image={interior1} description={"Interiors"} />
            <ImageWrapper image={interior4} description={"Interiors"} />
            <ImageWrapper image={interior5} description={"Interiors"} />
            <ImageWrapper image={interior6} description={"Interiors"} />
            <ImageWrapper image={interior9} description={"Interiors"} />
            <ImageWrapper image={interior2} description={"Interiors"} />
            <ImageWrapper image={interior18} description={"Interiors"} />
            <ImageWrapper image={door} description={"Interiors"} />
            <ImageWrapper image={lantern8} description={"Interiors"} />
            <ImageWrapper image={milk_can} description={"Interiors"} />
            <ImageWrapper image={tins} description={"Interiors"} />
            <ImageWrapper image={clock} description={"Interiors"} />
            <ImageWrapper image={wood_and_metal_sign} description={"Interiors"} />
            <ImageWrapper image={canister} description={"Interiors"} />
            <ImageWrapper image={interior20} description={"Interiors"} />
            <ImageWrapper image={lantern4} description={"Interiors"} />
            <ImageWrapper image={lantern5} description={"Interiors"} />
            <ImageWrapper image={lantern6} description={"Interiors"} />
            <ImageWrapper image={candle_holders} description={"Interiors"} />
            <ImageWrapper image={tins2} description={"Interiors"} />
            <ImageWrapper image={vase} description={"Interiors"} />
            <ImageWrapper image={wall_hanging} description={"Interiors"} />
            <ImageWrapper image={frame} description={"Interiors"} />
            <ImageWrapper image={heart} description={"Interiors"} />
            <ImageWrapper image={tray} description={"Interiors"} />
            <ImageWrapper image={metal_clock} description={"Interiors"} />
            <ImageWrapper image={wine_sign} description={"Interiors"} />
            <ImageWrapper image={wine_pillows} description={"Interiors"} />
            <ImageWrapper image={Winemakingmeawesome} description={"Interiors"} />
            <ImageWrapper image={WoodenTray} description={"Interiors"} />
            <ImageWrapper image={Mirror2} description={"Interiors"} />
            <ImageWrapper image={PillowandDecanter} description={"Interiors"} />
            <ImageWrapper image={Mirror} description={"Interiors"} />
            <ImageWrapper image={HangingRack} description={"Interiors"} />
            <ImageWrapper image={HangingLight} description={"Interiors"} />
            <ImageWrapper image={Mirrors} description={"Interiors"} />
            <ImageWrapper image={EndTableDecor} description={"Interiors"} />
            <ImageWrapper image={CuttingBoard5} description={"Interiors"} />
            <ImageWrapper image={cuttingboard3} description={"Interiors"} />
            <ImageWrapper image={CuttingBoard1} description={"Interiors"} />
            <ImageWrapper image={Clock2} description={"Interiors"} />
            <ImageWrapper image={Follow} description={"Interiors"} />
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Interiors;
