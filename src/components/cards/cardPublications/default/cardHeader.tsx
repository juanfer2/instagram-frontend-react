import React, { useContext } from 'react'
import { CardPublicationContext } from '../cardPublicationContext'
import { MENU } from '../../../../contants/icons.api'
import AvatarCircle from '../../../avatars/avatarCircle'
import IconComponent from '../../../iconsCompents'
function CardHeader({}) {
  const context: any = useContext(CardPublicationContext)

  const {
    username,
    iconAvatar,
  }: { username: string; iconAvatar: string } = context

  return (
    <div className="card-head">
      <div className="avatar">
        <AvatarCircle
          size={40}
          urlAvatar={
            'https://instagram.feoh1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/17586968_692628400917167_3228496108602785792_a.jpg?_nc_ht=instagram.feoh1-1.fna.fbcdn.net&_nc_ohc=otaEZzB8vVsAX_Ucubm&oh=ca6f0fdfb41610a18e28c914679c7d1a&oe=5F786D9F'
          }
        />
        <div className="username">
          {' '}
          {username} {iconAvatar}{' '}
        </div>
      </div>
      <div className="menu">
        <IconComponent name={MENU} />
      </div>
    </div>
  )
}

export default CardHeader
