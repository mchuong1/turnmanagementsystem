import React from 'react'

import { mount } from 'enzyme'
import App from '../App'
import { findByTestAttr } from '../../test/testUtils'

const setup = () => {
  return mount(<App />)
}
describe('it renders', () => {
  test('renders without crashing', () => {
    const wrapper = setup()
    const app = findByTestAttr(wrapper, 'component-app')
    expect(app.exists()).toBe(true)
  })
})