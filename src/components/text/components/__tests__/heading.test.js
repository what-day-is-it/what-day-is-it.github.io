import React from 'react';
import { shallow } from 'enzyme';
import Heading from '../heading';

describe('Heading', () => {
  const props = {
    level: 5,
    children: <div>Heading</div>,
    className: 'foobar'
  };
  const wrapper = shallow(<Heading {...props} />);
  const noPropsWrapper = shallow(<Heading />);

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
    expect(noPropsWrapper).toMatchSnapshot();
  });

  it('should render the props', () => {
    expect(wrapper.find('.foobar').exists()).toEqual(true);
    expect(wrapper.find('.heading-5').exists()).toEqual(true);
  });
});
