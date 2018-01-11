import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock,
         Grid, Row, Col } from 'react-bootstrap';
import GoogleMap from './GoogleMap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Contact extends Component {
  render() {
    return (
      <div className="div-centered">
        <Helmet>
            <meta name="description" content="Simply You Contact Information" />
            <meta name="robots" content="index,follow" />
            <title>Contact Information</title>
        </Helmet>
        <Grid>
          <h1>Contact Us</h1>
          <Row>
            <Col xs={12} md={4}>
              <form>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Name"
                  placeholder="Enter name"
                />
                <FieldGroup
                  id="formControlsEmail"
                  type="email"
                  label="Email address"
                  placeholder="Enter email"
                />
                <FieldGroup
                  id="formControlsPassword"
                  label="Subject"
                  type="subject"
                />

                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Message</ControlLabel>
                  <FormControl componentClass="textarea" />
                </FormGroup>

                <Button type="submit">
                  Send
                </Button>
              </form>
              <br></br>
            </Col>
            <Col xs={12} md={4}>
              <GoogleMap />
            </Col>
          </Row>
        </Grid>
        
      </div>
    );
  }
}

export default Contact;