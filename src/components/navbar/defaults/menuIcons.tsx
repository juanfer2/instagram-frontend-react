import React from 'react'
import Icons from '../../iconsCompents'
import { COMPASS, HOUSE, SEND, HEART } from '../../../contants/icons.api'
import AvatarCircle from '../../avatars/avatarCircle'
import CardNotificationNavbar from '../../cards/cardNotificationNavbar'
function MenuIcons() {
  return (
    <div className="menu-icons__container">
      <Icons name={HOUSE} active={false} />
      <Icons name={SEND} active={false} />
      <Icons name={COMPASS} active={false} />
      <Icons name={HEART} active={true} />
      <AvatarCircle
        size={22}
        urlAvatar={
          'https://instagram.feoh1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/17586968_692628400917167_3228496108602785792_a.jpg?_nc_ht=instagram.feoh1-1.fna.fbcdn.net&_nc_ohc=otaEZzB8vVsAX_Ucubm&oh=ca6f0fdfb41610a18e28c914679c7d1a&oe=5F786D9F'
        }
      />
    </div>
  )
}

export default MenuIcons
