import React, { Fragment } from 'react';
import Charts from './Charts';
import Heading from './Heading';
import Intro from './Intro';
import SEO from './SEO';
import Table from './Table';

export default function App() {
  return (
    <Fragment>
      <SEO />
      <Heading />
      <Intro />
      <Charts />
      <Table />
    </Fragment>
  );
}
