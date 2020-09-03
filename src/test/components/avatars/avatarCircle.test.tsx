import React from 'react'
import { shallow } from 'enzyme'

import AvatarCircle from '../../../components/avatars/avatarCircle'

describe('Test in <AvatarCircle />', () => {
  test('must be render component <AvatarCircle />', () => {
    const wrapper = shallow(<AvatarCircle size={55} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('component <AvatarCircle /> must be image src', () => {
    const imgUrl =
      'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/12/06113250/Eruca-por-Agust%C3%ADn-Dusserre-DSC_2338.jpg'
    const wrapper = shallow(<AvatarCircle size={55} urlAvatar={imgUrl} />)
    const validateImage = wrapper.find('img').prop('src')
    expect(imgUrl).toEqual(validateImage)
  })

  test('component <AvatarCircle /> must be image src are default', () => {
    const imgUrl =
      'https://instagram.feoh1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/17586968_692628400917167_3228496108602785792_a.jpg?_nc_ht=instagram.feoh1-1.fna.fbcdn.net&_nc_ohc=otaEZzB8vVsAX_Ucubm&oh=ca6f0fdfb41610a18e28c914679c7d1a&oe=5F786D9F'
    const wrapper = shallow(<AvatarCircle size={55} />)
    const validateImage = wrapper.find('img').prop('src')
    expect(imgUrl).toEqual(validateImage)
  })
})
