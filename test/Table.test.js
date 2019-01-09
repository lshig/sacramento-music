import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Table from '../src/components/Table';

describe('Table', () => {
  describe('basic', () => {
    const wrapper = shallow(<Table />);

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
