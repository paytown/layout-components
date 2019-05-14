import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('color test', () => {
  it('testing for color', () => {
    const wrapper = shallow(<Color />);
    expect(wrapper).toMatchSnapshot();
  });
});
