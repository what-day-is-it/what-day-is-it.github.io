import React from 'react';
import { shallow } from 'enzyme';
import Body from '../body';

describe('Body', () => {
  const props = {
    size: 'large',
    children: <div>Body Text</div>,
    className: 'foobar',
    color: 'black'
  };
  const wrapper = shallow(<Body {...props} />);
  const noPropsWrapper = shallow(<Body />);

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
    expect(noPropsWrapper).toMatchSnapshot();
  });

  it('should render the props', () => {
    expect(wrapper.find('.foobar').exists()).toEqual(true);
    expect(wrapper.find('.body-large.black').exists()).toEqual(true);
  });
});
