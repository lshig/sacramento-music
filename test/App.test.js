import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import App from '../src/components/App';

jest.mock('react-highcharts', () => {
  return {
    Highcharts: {
      setOptions: jest.fn(),
    },
  };
});

describe('App', () => {
  describe('basic', () => {
    const wrapper = shallow(<App />);

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
