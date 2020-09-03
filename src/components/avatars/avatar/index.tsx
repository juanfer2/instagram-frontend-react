import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

import AvatarCircle from '../avatarCircle'

function Avatar({
  size,
  urlAvatar,
  username,
}: InferProps<typeof Avatar.propTypes>) {
  return (
    <div className="item-avatar">
      <AvatarCircle size={size} urlAvatar={urlAvatar} />
      <span>{username}</span>
    </div>
  )
}
Avatar.propTypes = {
  size: PropTypes.number,
  urlAvatar: PropTypes.string,
  username: PropTypes.string.isRequired,
}

export default Avatar
