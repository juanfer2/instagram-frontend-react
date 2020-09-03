import React from 'react'
import PropTypes from 'prop-types'
import Card from '../'
import AvatarCircle from '../../avatars/avatarCircle'
import Avatar from '../../avatars/avatar'
function CardAvatarList({}) {
  return (
    <Card>
      <div className="card-list-avatars">
        <Avatar size={55} username={'Juanfer'} />
        <Avatar size={55} username={'Juanfer'} />
        <Avatar size={55} username={'Juanfer'} />
        <Avatar size={55} username={'Juanfer'} />
      </div>
    </Card>
  )
}

CardAvatarList.propTypes = {}

export default CardAvatarList
