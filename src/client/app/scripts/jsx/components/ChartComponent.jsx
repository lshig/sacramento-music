import React from 'react';
import options from '../constants/ChartData.jsx';
import 'jquery/dist/jquery.js';
import 'materialize-css/bin/materialize.js';
const ReactHighcharts = require('react-highcharts');
class ChartComponent extends React.Component {
  render() {
    return (
      <section className="data-vis">
        {options.map(function(item) {
          return (
            <div key={item.container} className='chart' id={item.container}>
              <div className='chart-title-container'>
                <div className="chart-title">
                  <h1 className="chart-title-heading">{item.title}</h1>
                </div>
              </div>
              <ReactHighcharts config={item.options}></ReactHighcharts>
              <div className="collapsible-wrapper">
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
export default ChartComponent;
