import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { Grid, Row } from 'react-bootstrap';
import ImageWrapper from './ImageWrapper';
import dog_frame from '../images/gifts/frame_dog_accent.JPG';
import frames from '../images/gifts/frames.jpg';
import initial_necklaces from '../images/gifts/initial_necklaces.JPG';
import small_frame from '../images/gifts/small_frame.JPG';
import tea_towel_happily from '../images/gifts/tea_towel_happily.JPG';
import tea_towel_looking_good from '../images/gifts/tea_towel_looking_good.JPG';
import tea_towel_mon_tues from '../images/gifts/tea_towel_mon_tues.jpg';
import tea_towel_outdoorsy from '../images/gifts/tea_towel_outdoorsy.JPG';
import tea_towel_teaching from '../images/gifts/tea_towel_teaching.JPG';
import tea_towel_pilates from '../images/gifts/tea_towel_pilates.JPG';
import deliver from '../images/interiors/deliver_items.jpg';
import BaconSign from '../images/gifts/BaconSign.jpg';
import Bracelets from '../images/gifts/Bracelets.jpg';
import Buscardholder from '../images/gifts/Buscardholder2(1).jpg';
import Cabinet from '../images/gifts/Cabinet.jpg';
import Cabinet2 from '../images/gifts/Cabinet(2).jpg';
import Clock2 from '../images/gifts/Clock2.jpg';
import CrossNecklace from '../images/gifts/CrossNecklace.jpg';
import CuttingBoard1 from '../images/gifts/CuttingBoard1.jpg';
import cuttingboard3 from '../images/gifts/cuttingboard3.jpg';
import CuttingBoard5 from '../images/gifts/Cuttingboard5.jpg';
import Doorknobsign from '../images/gifts/Doorknobsign.jpg';
import HangingLantern from '../images/gifts/HangingLantern.jpg';
import Mirror from '../images/gifts/Mirror.jpg';
import Mirror2 from '../images/gifts/Mirror2.jpg';
import Necklace1 from '../images/gifts/Necklace1.jpg';
import Necklace2 from '../images/gifts/Necklace2.jpg';
import Necklace3 from '../images/gifts/Necklace3.jpg';
import Necklace4 from '../images/gifts/Necklace4.jpg';
import PillowandDecanter from '../images/gifts/PillowandDecanter.jpg';
import Pillows from '../images/gifts/Pillows.jpg';
import Purse from '../images/gifts/Purse.jpg';
import Purse2 from '../images/gifts/Purse2.jpg';
import Purse3 from '../images/gifts/Purse3.jpg';
import Purse4 from '../images/gifts/Purse4.jpg';
import Purse5 from '../images/gifts/Purse5.jpg';
import Purse6 from '../images/gifts/Purse6.jpg';
import Purse7 from '../images/gifts/Purse7.jpg';
import Ringb from '../images/gifts/Ringb.jpg';
import Rings from '../images/gifts/Rings.jpg';
import Rooster1 from '../images/gifts/Rooster1.jpg';
import Scarf from '../images/gifts/Scarf.jpg';
import SimplySign from '../images/gifts/SimplySign.jpg';
import Watch2 from '../images/gifts/Watch2.jpg';
import Winemakingmeawesome from '../images/gifts/Winemakingmeawesome.jpg';
import PlaidScarf from '../images/gifts/PlaidScarf.jpg';
import JarLantern from '../images/gifts/JarLantern.jpg';
import EndWine from '../images/gifts/EndWine.jpg';
import BagPurse from '../images/gifts/BagPurse.jpg';
import Cupboard from '../images/seasonal/Cupboard.jpg';
import Jewels from '../images/gifts/Jewels.jpg';
import Jewel from '../images/gifts/Jewel.jpg';
import Neckshelf from '../images/gifts/Neckshelf.jpg';
import Pearls from '../images/gifts/Pearls.jpg';
import Chicken from '../images/gifts/Chicken.jpg';
import Salsa from '../images/gifts/Salsa.jpg';
import Setting from '../images/gifts/Setting.jpg';
import Blackshade from '../images/gifts/Blackshade.jpg';
import Lotsabags from '../images/gifts/Lotsabags.jpg';
import jellywall from '../images/interiors/jellywall.jpg';
import jellycart from '../images/interiors/jellycart.jpg';
import Followdream from '../images/interiors/Followdream.jpg';
import Augustlantern from '../images/interiors/Augustlantern.jpg';
import Falllantern from '../images/interiors/Falllantern.jpg';
import Island from '../images/interiors/Island.jpg';
import Islander from '../images/interiors/Islander.jpg';
import yy from '../images/seasonal/Towels.jpeg';
import yyyy from '../images/seasonal/wreath.JPEG';
import mmmmm from '../images/seasonal/mmmmm.jpg';
import mmmmmm from '../images/seasonal/mmmmmm.jpg';
import n from '../images/seasonal/n.jpg';
import o from '../images/seasonal/o.jpg';
import llllll from '../images/seasonal/llllll.jpg';
import zz from '../images/seasonal/rein.JPEG';
import gifts1 from '../images/gifts/gifts1.jpeg';
import necklaces1 from '../images/gifts/necklaces1.jpg';
import necklaces2 from '../images/gifts/necklaces2.jpg';
import showercap from '../images/gifts/showercap.jpg';
import towelz from '../images/gifts/towelz.jpg';
import g from '../images/gifts/g.jpg';
import gg from '../images/gifts/gg.jpg';
import ggg from '../images/gifts/ggg.jpg';
import gggg from '../images/gifts/gggg.jpg';
import ggggg from '../images/gifts/ggggg.jpg';
import g2 from '../images/gifts/g2.jpg';
import g3 from '../images/gifts/g3.jpg';
import gi from '../images/gifts/gi.jpg';
import igs from '../images/gifts/igs.jpg';
import cargifts1 from '../images/gifts/cargifts1.jpg';
import cargifts345 from '../images/gifts/cargifts345.jpg';
import cargifts123 from '../images/gifts/cargifts123.jpg';
import giftsint69 from '../images/interiors/giftsint69.jpg';
import giftsint68 from '../images/interiors/giftsint68.jpg';
import ig1v from '../images/interiors/ig1v.jpg';
import ig2v from '../images/interiors/ig2v.jpg';
import i1h from '../images/interiors/i1h.jpg';
import ig3v from '../images/interiors/ig3v.jpg';
import ig4v from '../images/interiors/ig4v.jpg';
import bg1v from '../images/gifts/bg1v.jpg';
import bg2h from '../images/gifts/bg2h.jpg';
import ig5h from '../images/interiors/ig5h.jpg';


class Gifts extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta name="description" content="Simply You Gifts paola Gift ideas Gift baskets Clocks paola Custom gifts Personalized gifts Panther gifts Paola High school gifts Paola Middle school gifts Christmas gifts Mothers day gifts Fathers day gifts Birthday gifts Shop local Gift cards paola Candles paola Picture frames paola Lamps paola Lanterns paola Interior design paola Kathy Kane Simply You Paola Park Square Lighting Edison bulbs Teenage rooms Jewelry" />
            <meta name="robots" content="index,follow" />
            <title>Gifts</title>
        </Helmet>
        <div className="title-border">
        <h2 className="p-centered">Simply You Gifts</h2>
        <p className="p-centered">Let us help you with just the right item for a gift whether it’s for a friend or family member or for a special occasion. We have many budget friendly items such as one of a kind picture frames, inspiring and whimsical kitchen towels, to trendy Edison lighting!</p>
        </div>
        <Grid className="container-fluid">
          <Row>
            <ImageWrapper image={bg1v} description={"242x200"} />
            <ImageWrapper image={ig3v} description={"242x200"} />
            <ImageWrapper image={ig4v} description={"242x200"} />
            <ImageWrapper image={ig1v} description={"242x200"} />
            <ImageWrapper image={ig2v} description={"242x200"} />
            <ImageWrapper image={gi} description={"242x200"} />
            <ImageWrapper image={gifts1} description={"242x200"} />
            <ImageWrapper image={towelz} description={"242x200"} />
            <ImageWrapper image={JarLantern} description={"242x200"} />
            <ImageWrapper image={Purse2} description={"242x200"} />
            <ImageWrapper image={ggg} description={"242x200"} />
            <ImageWrapper image={gggg} description={"242x200"} />
            <ImageWrapper image={ggggg} description={"242x200"} />
            <ImageWrapper image={Purse3} description={"242x200"} />
            <ImageWrapper image={Purse4} description={"242x200"} />
            <ImageWrapper image={Purse5} description={"242x200"} />
            <ImageWrapper image={Purse6} description={"242x200"} />
            <ImageWrapper image={Purse7} description={"242x200"} />
            <ImageWrapper image={SimplySign} description={"242x200"} />
            <ImageWrapper image={i1h} description={"242x200"} />
            <ImageWrapper image={bg2h} description={"242x200"} />
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Gifts;
