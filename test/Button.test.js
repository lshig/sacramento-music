import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Button from '../src/components/Button';

describe('Button', () => {
  describe('basic', () => {
    const wrapper = shallow(<Button />);

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
