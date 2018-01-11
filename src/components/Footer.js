import React, { Component } from 'react';
import Social from './Social';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="text-center">
          <p>15 S Pearl, Paola, KS 66071 &nbsp; 913.294.2252 &nbsp; simply-you-salon@att.net</p>
          <p>© 2016 Simply You Salon and Boutique</p>
          <Social />
        </div>
      </footer>
    );
  }
}

export default Footer;


