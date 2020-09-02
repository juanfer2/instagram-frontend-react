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
      <AvatarCircle size={22} />
    </div>
  )
}

export default MenuIcons
