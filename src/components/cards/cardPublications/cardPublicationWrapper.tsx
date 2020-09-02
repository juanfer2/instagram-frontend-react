import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

import {
  CardPublicationContext,
  CardPublicationContextTypes,
} from './cardPublicationContext'
import CardPublication from './cardPublication'

function CardPublicationWrapper({
  type,
  src,
  iconAvatar,
  username,
}: CardPublicationContextTypes) {
  return (
    <CardPublicationContext.Provider
      value={{ type, src, iconAvatar, username }}
    >
      <CardPublication />
    </CardPublicationContext.Provider>
  )
}

export default CardPublicationWrapper
