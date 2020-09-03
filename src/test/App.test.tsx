import React from 'react'
import { shallow } from 'enzyme'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { HealtState } from '../types/flux/healt.type'

import App from '../App'

test('renders learn react link', () => {
  const initialState: HealtState = {
    healt: null,
    loandingHealt: false,
    errorHealt: null,
  }
  const mockStore = configureStore()
  let store = mockStore(initialState)
  const wrapper = shallow(
    <Provider store={store}>
      {' '}
      <App />{' '}
    </Provider>,
  )
  // const linkElement = getByText(/learn react/i)
  expect(wrapper).toMatchSnapshot()
})
