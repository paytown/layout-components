import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog Component', () => {
  it('show that pup', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});
