import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Intro from '../src/components/Intro';

describe('Intro', () => {
  describe('basic', () => {
    const wrapper = shallow(<Intro />);

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
