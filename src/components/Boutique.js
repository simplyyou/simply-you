import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ImageWrapper from './ImageWrapper';
import {Helmet} from 'react-helmet';
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
import Purses from '../images/gifts/purses.jpeg';
import FriendsTowel from '../images/interiors/FriendsTowel.jpeg';
import JarLantern from '../images/gifts/JarLantern.jpg';
import EndWine from '../images/gifts/EndWine.jpg';
import BagPurse from '../images/gifts/BagPurse.jpg';
import Ropebags from '../images/gifts/Ropebags.jpg';
import Jewels from '../images/gifts/Jewels.jpg';
import Jewel from '../images/gifts/Jewel.jpg';
import Neckshelf from '../images/gifts/Neckshelf.jpg';
import Pearls from '../images/gifts/Pearls.jpg';
import Lotsabags from '../images/gifts/Lotsabags.jpg';
import morebags from '../images/home/morebags.jpg';
import another from '../images/gifts/another.jpg';
import bag5 from '../images/gifts/bag5.jpg';
import bag6 from '../images/gifts/bag6.jpg';
import bag7 from '../images/gifts/bag7.jpg';
import bag8 from '../images/gifts/bag8.jpg';
import bag9 from '../images/gifts/bag9.jpg';
import beads from '../images/gifts/beads.jpg';
import evenmore from '../images/gifts/evenmore.jpg';
import morebeads from '../images/gifts/morebeads.jpg';
import still from '../images/gifts/still.jpg';

class Boutique extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta name="description" content="Simply You Boutique Paola Kansas Jewelry Purses Gifts paola Gift ideas paola Gift baskets paola Clocks paola Custom gifts Personalized gifts paola Paola Panther gifts Paola High school gifts Paola Middle school gifts Christmas gifts paola Mothers day gifts paola Fathers day gifts paola Birthday gifts paola Shop local paola Gift cards paola Candles paola Picture frames paola Teenage rooms" />
            <meta name="robots" content="index,follow" />
            <title>Boutique</title>
        </Helmet>
        <div className="title-border">
        <h2 className="p-centered">Simply You Boutique</h2>
        <p className="p-centered">Find just the right purse or just piece of jewelry to accent your outfit. We have many boutique items that are one of kind.</p>
        </div>
        <Grid className="container-fluid">
          <Row>
            <ImageWrapper image={tea_towel_happily} description={"242x200"} />
            <ImageWrapper image={deliver} description={"242x200"} />
            <ImageWrapper image={another} description={"242x200"} />
            <ImageWrapper image={bag5} description={"242x200"} />
            <ImageWrapper image={bag6} description={"242x200"} />
            <ImageWrapper image={bag9} description={"242x200"} />
            <ImageWrapper image={beads} description={"242x200"} />
            <ImageWrapper image={morebeads} description={"242x200"} />
            <ImageWrapper image={evenmore} description={"242x200"} />
            <ImageWrapper image={still} description={"242x200"} />
            <ImageWrapper image={Jewel} description={"242x200"} />
            <ImageWrapper image={Jewels} description={"242x200"} />
            <ImageWrapper image={Pearls} description={"242x200"} />
            <ImageWrapper image={Neckshelf} description={"242x200"} />
            <ImageWrapper image={Ropebags} description={"242x200"} />
            <ImageWrapper image={BagPurse} description={"242x200"} />
            <ImageWrapper image={EndWine} description={"242x200"} />
            <ImageWrapper image={JarLantern} description={"242x200"} />
            <ImageWrapper image={Purses} description={"242x200"} />
            <ImageWrapper image={FriendsTowel} description={"242x200"} />
            <ImageWrapper image={tea_towel_teaching} description={"242x200"} />
            <ImageWrapper image={tea_towel_pilates} description={"242x200"} />
            <ImageWrapper image={tea_towel_outdoorsy} description={"242x200"} />
            <ImageWrapper image={tea_towel_looking_good} description={"242x200"} />
            <ImageWrapper image={dog_frame} description={"242x200"} />
            <ImageWrapper image={small_frame} description={"242x200"} />
            <ImageWrapper image={initial_necklaces} description={"242x200"} />
            <ImageWrapper image={tea_towel_mon_tues} description={"242x200"} />
            <ImageWrapper image={frames} description={"242x200"} />
            <ImageWrapper image={morebags} description={"242x200"} />
            <ImageWrapper image={Lotsabags} description={"242x200"} />
            <ImageWrapper image={bag7} description={"242x200"} />
            <ImageWrapper image={bag8} description={"242x200"} />
          </Row>
        </Grid>
      </div>
  );
  }
}

export default Boutique;
