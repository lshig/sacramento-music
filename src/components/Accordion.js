import React from 'react';
import options from '../constants/ProjectData.js';
const Accordian = () => {
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
export default Accordian
