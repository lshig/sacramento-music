import React, {Component} from 'react';
export default class Button extends Component {
  render() {
    return (
      <div className="code-info">
        <a href="https://lshig.github.io" target="_blank" className="button__large liz-logo">
          <span>Liz Shigetoshi</span>
        </a>
        <a href="https://github.com/lshig/sacramento-music" target="_blank" className="button__large">
          <i className="fa fa-github"></i>
          <span>View on GitHub</span>
        </a>
      </div>
    );
  }
}
