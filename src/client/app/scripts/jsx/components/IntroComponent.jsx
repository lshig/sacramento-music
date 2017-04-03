import React from 'react';
import 'jquery/dist/jquery.js';
import 'materialize-css/bin/materialize.js';
import AccordionComponent from './AccordionComponent.jsx';
import ButtonComponent from './ButtonComponent.jsx';
class IntroComponent extends React.Component {
  render() {
    return (
      <section className="intro">
        <ButtonComponent/>
        <AccordionComponent/>
      </section>
    );
  }
}
export default IntroComponent;
