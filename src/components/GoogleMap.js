import React, { Component } from 'react';

class GoogleMap extends Component {
  render() {
    return (
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.342873277193!2d-94.87989968463636!3d38.57195137962214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0b2be01c12d9b%3A0x499076ff0783f5df!2sSimply+You!5e0!3m2!1sen!2sus!4v1503369054489"
                width="100%" 
                height="300" 
                frameBorder="0" 
                allowFullScreen
                title="Simply You Map">
        </iframe>
      </div>
    );
  }
}

export default GoogleMap;