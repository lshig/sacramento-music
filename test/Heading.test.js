import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Heading from '../src/components/Heading';

describe('Heading', () => {
  describe('basic', () => {
    const wrapper = shallow(<Heading />);

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
