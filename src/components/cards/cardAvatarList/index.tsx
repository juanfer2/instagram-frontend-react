import React from 'react'
import PropTypes from 'prop-types'
import Card from '../'
import AvatarCircle from '../../avatars/avatarCircle'
function CardAvatarList({}) {
  return (
    <Card>
      <div className="card-list-avatars">
        <div className="item-avatar">
          <AvatarCircle size={55} />
          <span>juanfer</span>
        </div>
        <div className="item-avatar">
          <AvatarCircle size={55} />
          <span>juanfer</span>
        </div>
        <div className="item-avatar">
          <AvatarCircle size={55} />
          <span>juanfer</span>
        </div>
        <div className="item-avatar">
          <AvatarCircle size={55} />
          <span>juanfer</span>
        </div>
      </div>
    </Card>
  )
}

CardAvatarList.propTypes = {}

export default CardAvatarList
