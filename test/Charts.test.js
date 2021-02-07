import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Charts from '../src/components/Charts';

jest.mock('react-highcharts', () => {
  return {
    Highcharts: {
      setOptions: jest.fn(),
    },
  };
});

describe('Charts', () => {
  describe('basic', () => {
    const wrapper = shallow(<Charts />);

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
