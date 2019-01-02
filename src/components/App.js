import React from 'react';
import Charts from './Charts';
import Heading from './Heading';
import Intro from './Intro';
import Table from './Table';

export default function App () {
  return (
    <div>
      <Heading />
      <Intro />
      <Charts />
      <Table />
    </div>
  );
}
