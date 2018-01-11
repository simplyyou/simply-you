import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import kathy from '../images/team/Kathy_pic.jpg';
import jenifer from '../images/team/Jeni_pic.jpg';
import mary from '../images/team/Mary_pic.jpg';

class Team extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta name="description" content="Simply You Team Members Kathy Kane Simply You Jenifer Darling Hair salon paola Haircut paola Hair stylist paola Cut and color paola Highlights paola Hair Salon paola Pureology paola Redken paola Home decor paola Home interiors paola Boutique paola Paola Park Square" />
            <meta name="robots" content="index,follow" />
            <title>Team Members</title>
        </Helmet>
        <PageHeader>Simply You Team Members</PageHeader>
        <Grid fluid>
          <Row>
            <Col xs={12} md={4}>
              <img src={kathy} className="img-circle" alt="Cinque Terre"></img>
              <h3>Kathy Kane</h3>
              <p><strong>Owner & American Board Certified Haircolorist</strong></p>
              <p>Kathy has been a hairstylist for 21 years. She has been an American board certified haircolorist for 15 years and a salon owner for over 9 years. She strives to make everyone comfortable and beautiful while visiting Simply You. Kathy is also dedicated to continuing education and keeps her guests feeling trendy!</p>
            </Col>
            <Col xs={12} md={4}>
              <img src={jenifer} className="img-circle" alt="Cinque Terre"></img>
              <h3>Jenifer Darling</h3>
              <p><strong>Hairstylist</strong></p>
              <p>Jenifer wants to prove to her clients that they are beautiful. From cuts and color to make-up and eyebrow waxing, she'll work with you to create your perfect look, whether your style be conservative or more daring. Her clients love her laid back personality and her genuine desire to ensure they leave her chair feeling their best!</p>
            </Col>
            <Col xs={12} md={4}>
              <img src={mary} className="img-circle" alt="Cinque Terre"></img>
              <h3>Mary Green</h3>
              <p><strong>Receptionist</strong></p>
              <p>Mary is the wonderful voice you will hear when calling Simply You. She is so nice and friendly and will do her best to get you in when it fits into your schedule. Mary also does a wonderful job of helping you find that perfect accessory for you or your home.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Team;
