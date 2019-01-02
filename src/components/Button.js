import React from 'react';

export default function Button() {
  return (
    <div className="code-info">
      <a
        className="button__large liz-logo"
        href="https://lshig.github.io"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>Liz Shigetoshi</span>
      </a>
      <a
        className="button__large"
        href="https://github.com/lshig/sacramento-music"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fa fa-github" />
        <span>View on GitHub</span>
      </a>
    </div>
  );
}
