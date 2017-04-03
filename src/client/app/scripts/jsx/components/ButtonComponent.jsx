import React from 'react';
class ButtonComponent extends React.Component {
  render() {
    return (
      <section className="code-info">
        <a href="https://lshig.github.io" target="_blank" className="btn-large liz-logo">
          <span>Liz Shigetoshi</span>
        </a>
        <a href="https://github.com/lshig/sacramento-music" target="_blank" className="btn-large">
          <i className="fa fa-github"></i>
          <span>View on GitHub</span>
        </a>
      </section>
    );
  }
}
export default ButtonComponent;
