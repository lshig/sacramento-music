import React from 'react';
import {render} from 'react-dom';
import HeadingComponent from './components/HeadingComponent.jsx';
import IntroComponent from './components/IntroComponent.jsx';
import ChartComponent from './components/ChartComponent.jsx';
import TableComponent from './components/TableComponent.jsx';
class App extends React.Component {
  render() {
    return (
      <div>
        <HeadingComponent/>
        <IntroComponent/>
        <ChartComponent/>
        <TableComponent/>
      </div>
    );
  }
}
render(<App/>, document.getElementById('app'));
