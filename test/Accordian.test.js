import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Accordion from '../src/components/Accordion';

describe('Accordion', () => {
  describe('basic', () => {
    const wrapper = shallow(<Accordion />);

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
