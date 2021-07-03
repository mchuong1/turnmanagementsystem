import React from 'react';
import { mount } from 'enzyme';
import Login from '../Login';
import { findByTestAttr } from '../../../../test/testUtils';

const setup = () => mount(<Login />);
describe('it renders', () => {
  test('renders without crashing', () => {
    const wrapper = setup();
    const loginComponent = findByTestAttr(wrapper, 'component-login')
    expect(loginComponent.exists()).toBe(true);
  });
});
