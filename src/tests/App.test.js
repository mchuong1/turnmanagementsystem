import React from 'react'

import { mount } from 'enzyme'
import App from '../App'
import { findByTestAttr } from '../../test/testUtils'
import BrowserRouter from 'react-router'

const setup = () => {
  return mount(<App />)
}
describe('it renders', () => {
  const mockUseRouteMatch = {
    path: '',
    location: ''
  }

  test('renders without crashing', () => {
    const wrapper = setup()
    const app = findByTestAttr(wrapper, 'component-app')
    expect(app.exists()).toBe(true)
  })
})