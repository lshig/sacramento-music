import React, {Component} from 'react';
import options from '../constants/ChartData.js';
const ReactHighcharts = require('react-highcharts');
export default class Chart extends Component {
  render() {
    return (
      <section className="data-vis">
        {options.map(function(item) {
          return (
            <div key={item.container} className='chart' id={item.container}>
              <div className='chart-title-wrapper'>
                <h1 className="chart-title-header">{item.title}</h1>
              </div>
              <ReactHighcharts config={item.options}></ReactHighcharts>
              <div className="chart-info-collapsible-wrapper">
                <ul className="collapsible" data-collapsible="expandable">
                  <li>
                    <div className="collapsible-header active">
                      <i className="fa fa-info-circle"></i>Graph Information</div>
                    <div className="collapsible-body">
                      <pre className="pre-wrap">{item.description}</pre>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
