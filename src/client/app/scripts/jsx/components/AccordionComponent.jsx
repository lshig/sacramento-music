import React from 'react';
import options from '../constants/ProjectData.jsx';
import 'jquery/dist/jquery.js';
import 'materialize-css/bin/materialize.js';
class AccordianComponent extends React.Component {
  render() {
    return (
      <div className="project-info">
        <ul className="collapsible" data-collapsible="accordion">
          {options.map(function(item) {
            return (
              <li key={item.id + '-item'}>
                <div className="collapsible-header">
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </div>
                <div className="collapsible-body">
                  <pre className="pre-wrap">{item.description}</pre>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default AccordianComponent;
