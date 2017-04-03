import React, {Component} from 'react';
import Accordion from './Accordion.js';
import Button from './Button.js';
export default class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <Button/>
        <Accordion/>
      </section>
    );
  }
}
