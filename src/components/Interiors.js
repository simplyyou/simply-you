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
import wine_bottles from '../images/interiors/Wine_bottles.jpg';
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
import wine_pillows from '../images/interiors/Wine_pillows.jpg';
import Mirrors from '../images/interiors/mirrors.jpeg';
import Lanterns from '../images/interiors/lanterns.jpeg';
import WhiteLamp from '../images/interiors/WhiteLamp.jpeg';
import BlackLamp from '../images/interiors/BlackLamp.jpeg';
import Follow from '../images/interiors/Follow.jpeg';
import Lanterny from '../images/interiors/Lanterny.jpeg';
import GlassLamp from '../images/interiors/GlassLamp.jpeg';
import Clockworth from '../images/interiors/Clockworth.jpg';
import Crusty from '../images/interiors/Crusty.jpg';
import Blackshade from '../images/gifts/Blackshade.jpg';
import crochet from '../images/interiors/crochet.jpg';
import heartstone from '../images/interiors/heartstone.jpg';
import morelights from '../images/interiors/morelights.jpg';
import ropeholes from '../images/interiors/ropeholes.jpg';
import ropeshelf from '../images/interiors/ropeshelf.jpg';
import smalllight from '../images/interiors/smalllight.jpg';
import stuff from '../images/interiors/stuff.jpg';
import art from '../images/interiors/art.jpg';
import biglight from '../images/interiors/biglight.jpg';
import bowbox from '../images/interiors/bowbox.jpg';
import crochetballs from '../images/interiors/crochetballs.jpg';
import crochetbasket from '../images/interiors/crochetbasket.jpg';
import crochetstuff from '../images/interiors/crochetstuff.jpg';
import glassstuff from '../images/interiors/glassstuff.jpg';
import lakestuff from '../images/interiors/lakestuff.jpg';
import lightstuff from '../images/interiors/lightstuff.jpg';
import shotglass from '../images/interiors/shotglass.jpg';
import watercans from '../images/interiors/watercans.jpg';
import ballcage from '../images/interiors/ballcage.jpg';
import clocksome from '../images/interiors/clocksome.jpg';
import fakeplant from '../images/interiors/fakeplant.jpg';
import jugowater from '../images/interiors/jugowater.jpg';
import open from '../images/interiors/open.jpg';
import plantsfake from '../images/interiors/plantsfake.jpg';
import quack from '../images/interiors/quack.jpg';
import someclock from '../images/interiors/someclock.jpg';
import tweety from '../images/interiors/tweety.jpg';
import waterjug from '../images/interiors/waterjug.jpg';
import flowerbasket from '../images/interiors/flowerbasket.jpg';
import faucet from '../images/interiors/faucet.jpg';
import flowerbox from '../images/interiors/flowerbox.jpg';
import flowerpot from '../images/interiors/flowerpot.jpg';
import mirrorcorner from '../images/interiors/mirrorcorner.jpg';
import shortcan from '../images/interiors/shortcan.jpg';
import barrellid from '../images/interiors/barrellid.jpg';
import greenflower from '../images/interiors/greenflower.jpg';
import strawberry from '../images/interiors/strawberry.jpg';
import winedispenser from '../images/interiors/winedispenser.jpg';
import metalflower from '../images/interiors/winedispenser.jpg';
import prix from '../images/interiors/prix.jpg';
import wallcan from '../images/interiors/wallcan.jpg';
import canwall from '../images/interiors/canwall.jpg';
import woodenbox from '../images/interiors/woodenbox.jpg';
import gives from '../images/interiors/gives.jpg';
import greenmirror from '../images/interiors/greenmirror.jpg';
import jellywall from '../images/interiors/jellywall.jpg';
import jellycart from '../images/interiors/jellycart.jpg';
import shoreshells from '../images/interiors/shoreshells.jpg';
import birdcage from '../images/interiors/birdcage.jpg';
import vasebox from '../images/interiors/vasebox.jpg';
import gold from '../images/interiors/gold.jpg';
import Rhombus from '../images/home/Rhombus.jpg';
import Cow from '../images/interiors/Cow.jpg';
import Spade from '../images/interiors/Spade.jpg';
import Cowsetting from '../images/interiors/Cowsetting.jpg';
import Boathook from '../images/interiors/Boathook.jpg';
import Asparagus from '../images/interiors/Asparagus.jpg';
import Dumping from '../images/interiors/Dumping.jpg';
import Followdream from '../images/interiors/Dumping.jpg';
import Peas from '../images/interiors/Peas.jpg';
import Augustlantern from '../images/interiors/Augustlantern.jpg';
import Falllantern from '../images/interiors/Falllantern.jpg';
import Island from '../images/interiors/Island.jpg';
import Islander from '../images/interiors/Islander.jpg';
import i from '../images/interiors/i.jpeg';
import inner from '../images/interiors/inner.jpeg';
import easter1 from '../images/seasonal/easter1.jpeg';
import easter2 from '../images/seasonal/easter2.jpg';
import easter3 from '../images/seasonal/easter3.jpg';

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
        <p className="p-centered">Simply You is situated on the historic park square in Paola. We get new items in weekly so you are sure to find something unique and different each time you visit. Our home interiors collection includes items for each room in your home. We carry items that are timeless as well as some of the latest trends. Check out our new items for Summer and Fall!</p>
        </div>
        <Grid className="container-fluid">
          <Row>
            <ImageWrapper image={Peas} description={"Interiors"} />
            <ImageWrapper image={easter1} description={"Interiors"} />
            <ImageWrapper image={easter2} description={"Interiors"} />
            <ImageWrapper image={easter3} description={"Interiors"} />
            <ImageWrapper image={Boathook} description={"Interiors"} />
            <ImageWrapper image={plantsfake} description={"Interiors"} />
            <ImageWrapper image={birdcage} description={"Interiors"} />
            <ImageWrapper image={vasebox} description={"Interiors"} />
            <ImageWrapper image={wine_bottles} description={"Interiors"} />
            <ImageWrapper image={prix} description={"Interiors"} />
            <ImageWrapper image={wallcan} description={"Interiors"} />
            <ImageWrapper image={canwall} description={"Interiors"} />
            <ImageWrapper image={woodenbox} description={"Interiors"} />
            <ImageWrapper image={gives} description={"Interiors"} />
            <ImageWrapper image={greenmirror} description={"Interiors"} />
            <ImageWrapper image={flowerbasket} description={"Interiors"} />
            <ImageWrapper image={faucet} description={"Interiors"} />
            <ImageWrapper image={ballcage} description={"Interiors"} />
            <ImageWrapper image={quack} description={"Interiors"} />
            <ImageWrapper image={open} description={"Interiors"} />
            <ImageWrapper image={shoreshells} description={"Interiors"} />
            <ImageWrapper image={tweety} description={"Interiors"} />
            <ImageWrapper image={heartstone} description={"Interiors"} />
            <ImageWrapper image={crochet} description={"Interiors"} />
            <ImageWrapper image={morelights} description={"Interiors"} />
            <ImageWrapper image={ropeholes} description={"Interiors"} />
            <ImageWrapper image={ropeshelf} description={"Interiors"} />
            <ImageWrapper image={smalllight} description={"Interiors"} />
            <ImageWrapper image={stuff} description={"Interiors"} />
            <ImageWrapper image={Crusty} description={"Interiors"} />
            <ImageWrapper image={Rooster} description={"Interiors"} />
            <ImageWrapper image={Lanterny} description={"Interiors"} />
            <ImageWrapper image={Lanterns} description={"Interiors"} />
            <ImageWrapper image={EdisonLantern} description={"Interiors"} />
            <ImageWrapper image={CabinetLantern} description={"Interiors"} />
            <ImageWrapper image={Cabinet2} description={"Interiors"} />
            <ImageWrapper image={Cabinet} description={"Interiors"} />
            <ImageWrapper image={interior1} description={"Interiors"} />
            <ImageWrapper image={interior5} description={"Interiors"} />
            <ImageWrapper image={interior6} description={"Interiors"} />
            <ImageWrapper image={interior9} description={"Interiors"} />
            <ImageWrapper image={interior2} description={"Interiors"} />
            <ImageWrapper image={door} description={"Interiors"} />
            <ImageWrapper image={lantern8} description={"Interiors"} />
            <ImageWrapper image={milk_can} description={"Interiors"} />
            <ImageWrapper image={canister} description={"Interiors"} />
            <ImageWrapper image={art} description={"Interiors"} />
            <ImageWrapper image={metalflower} description={"Interiors"} />
            <ImageWrapper image={gold} description={"Interiors"} />
            <ImageWrapper image={mirrorcorner} description={"Interiors"} />
            <ImageWrapper image={barrellid} description={"Interiors"} />
            <ImageWrapper image={greenflower} description={"Interiors"} />
            <ImageWrapper image={winedispenser} description={"Interiors"} />
            <ImageWrapper image={shortcan} description={"Interiors"} />
            <ImageWrapper image={flowerpot} description={"Interiors"} />
            <ImageWrapper image={flowerbox} description={"Interiors"} />
            <ImageWrapper image={biglight} description={"Interiors"} />
            <ImageWrapper image={bowbox} description={"Interiors"} />
            <ImageWrapper image={crochetballs} description={"Interiors"} />
            <ImageWrapper image={crochetbasket} description={"Interiors"} />
            <ImageWrapper image={crochetstuff} description={"Interiors"} />
            <ImageWrapper image={glassstuff} description={"Interiors"} />
            <ImageWrapper image={lakestuff} description={"Interiors"} />
            <ImageWrapper image={lightstuff} description={"Interiors"} />
            <ImageWrapper image={watercans} description={"Interiors"} />
            <ImageWrapper image={shotglass} description={"Interiors"} />
            <ImageWrapper image={clocksome} description={"Interiors"} />
            <ImageWrapper image={jugowater} description={"Interiors"} />
            <ImageWrapper image={fakeplant} description={"Interiors"} />
            <ImageWrapper image={someclock} description={"Interiors"} />
            <ImageWrapper image={waterjug} description={"Interiors"} />
            <ImageWrapper image={interior20} description={"Interiors"} />
            <ImageWrapper image={lantern5} description={"Interiors"} />
            <ImageWrapper image={lantern6} description={"Interiors"} />
            <ImageWrapper image={tins2} description={"Interiors"} />
            <ImageWrapper image={vase} description={"Interiors"} />
            <ImageWrapper image={wall_hanging} description={"Interiors"} />
            <ImageWrapper image={frame} description={"Interiors"} />
            <ImageWrapper image={heart} description={"Interiors"} />
            <ImageWrapper image={tray} description={"Interiors"} />
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
            <ImageWrapper image={Blackshade} description={"Interiors"} />
            <ImageWrapper image={Clockworth} description={"Interiors"} />
            <ImageWrapper image={Rhombus} description={"Interiors"} />
            <ImageWrapper image={Cow} description={"Interiors"} />
            <ImageWrapper image={Spade} description={"Interiors"} />
            <ImageWrapper image={Cowsetting} description={"Interiors"} />
            <ImageWrapper image={Asparagus} description={"Interiors"} />
            <ImageWrapper image={Dumping} description={"Interiors"} />
            <ImageWrapper image={Followdream} description={"Interiors"} />
            <ImageWrapper image={i} description={"Interiors"} />
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Interiors;
