import React, {Component} from 'react';
import Heading from './Heading.js';
import Intro from './Intro.js';
import Chart from './Chart.js';
import Table from './Table.js';
export default class App extends Component {
  render() {
    return (
      <div>
        <Heading/>
        <Intro/>
        <Chart/>
        <Table/>
      </div>
    );
  }
}
