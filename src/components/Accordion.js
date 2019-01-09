import React from 'react';
import options from '../data/project';

export default function Accordian() {
  return (
    <div className="project-info">
      <ul className="collapsible" data-collapsible="accordion">
        {options.map((item, key) => {
          return (
            <li key={key}>
              <div className="collapsible-header">
                <i className={item.icon} />
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
