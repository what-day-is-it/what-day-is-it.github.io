import React from 'react';
import { shallow } from 'enzyme';
import Button from '../button';

describe('Button', () => {
  const props = {
    onClick: jest.fn()
  };

  const wrapper = shallow(<Button {...props} />);

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default props', () => {
    expect(wrapper.text()).toEqual('');
    expect(wrapper.find('.dark-blue').exists()).toEqual(true);
  });

  it('should call onClick when clicked', () => {
    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should scroll to top and call onClick when clicked if props is set to top', () => {
    wrapper.setProps({ toTop: true });
    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should have the disabled style if disabled is true', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('.disabled').exists()).toEqual(true);
  });
});
