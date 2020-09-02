import React from 'react'

export type CardPublicationContextTypes = {
  type: string
  src: string
  iconAvatar: string
  username: string
}

export const CardPublicationContext = React.createContext({})
