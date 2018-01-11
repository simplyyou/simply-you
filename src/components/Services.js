import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

class Services extends Component {
  render() {
    return (
      <div className="services-centered">
        <Helmet>
            <meta name="description" content="Simply You Services Kathy Kane Jenifer Darling Hair salon paola Haircut paola Hair stylist paola Cut and color paola Highlights paola Hair Salon paola Pureology paola Redken paola Home decor paola Home interiors paola Boutique paola Paola Park Square" />
            <meta name="robots" content="index,follow" />
            <title>Services</title>
        </Helmet>
        <div className="title-border">
        <h2 className="p-centered">Simply You Services</h2>
        <p className="p-centered">Visit our salon for a fresh new look whether it be a haircut or a new hairstyle.  Our services range from highlights, full color to hair extensions. Browse our full list of services below and then contact us to schedule an appointment. We strive to take special care of our clients and earn your business. Through continuing professional education we keep up on industry trends. We offer only the finest hair care products in order to provide our clients with the ultimate salon experience.</p>
        </div>
        <table className="table table-colored table-borderless">
          <tbody>
            <tr>
              <td>Women's haircut and style</td>
              <td>Starting at $30</td>
            </tr>
            <tr>
              <td>Men's haircut</td>
              <td>Starting at $18</td>
            </tr>
            <tr>
              <td>Children's haircut</td>
              <td>Starting at $15</td>
            </tr>
            <tr>
              <td>Shampoo and blow dry</td>
              <td>Starting at $20</td>
            </tr>
            <tr>
              <td>Special Occasions</td>
              <td>Starting at $50</td>
            </tr>
            <tr>
              <td>Hair coloring</td>
              <td>Starting at $57</td>
            </tr>
            <tr>
              <td>Partial foil</td>
              <td>Starting at $62</td>
            </tr>
            <tr>
              <td>Full foil</td>
              <td>Starting at $72</td>
            </tr>
            <tr>
              <td>Highlighting</td>
              <td>Starting at $79</td>
            </tr>
            <tr>
              <td>Highlighting and coloring</td>
              <td>Starting at $89</td>
            </tr>
            <tr>
              <td>Hair extensions</td>
              <td>Priced upon consulation</td>
            </tr>
            <tr>
              <td>Hair smoothing treatment</td>
              <td>Starting at $150</td>
            </tr>
            <tr>
              <td>Eyebrow waxing</td>
              <td>$15</td>
            </tr>
            <tr>
              <td>Upper lip waxing</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>Nasal Waxing</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>Chin waxing</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>Full face</td>
              <td>$35</td>
            </tr>
          </tbody>
        </table>
        <p className="p-centered">We use and recommend Redken and Pureology products.</p>
        <br></br>
      </div>
  );
  }
}

export default Services;
