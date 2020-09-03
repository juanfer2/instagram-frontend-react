import React from 'react'
import { shallow } from 'enzyme'

import Card from '../../../components/cards'

describe('Pruebas en <Card />', () => {
  test('must be render component <AvatarCircle />', () => {
    const message = 'Card Component'
    const children = <p>{message}</p>
    const wrapper = shallow(<Card> {children} </Card>)
    expect(wrapper).toMatchSnapshot()
  })

  test('must be component <Card />', () => {
    const message = 'Card Component'
    const children = <p>{message}</p>
    const wrapper = shallow(<Card> {children} </Card>)
    const validateChildren = wrapper.find('p').text()

    expect(message).toBe(validateChildren)
  })
})
