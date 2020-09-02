import React, { useContext } from 'react'
import { CardPublicationContext } from '../cardPublicationContext'

import AvatarCircle from '../../../avatars/avatarCircle'

function CardHeader({}) {
  const context: any = useContext(CardPublicationContext)

  const {
    username,
    iconAvatar,
  }: { username: string; iconAvatar: string } = context

  return (
    <div className="card-head">
      <div className="avatar">
        <AvatarCircle size={40} />
        <div className="username">
          {' '}
          {username} {iconAvatar}{' '}
        </div>
      </div>
      <div>---</div>
    </div>
  )
}

export default CardHeader
