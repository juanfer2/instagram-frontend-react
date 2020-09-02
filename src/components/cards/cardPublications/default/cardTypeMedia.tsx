import React, { useContext } from 'react'
import {
  CardPublicationContext,
  CardPublicationContextTypes,
} from '../cardPublicationContext'
import { IMAGE, VIDEO } from '../../../../contants/card.constant'

function CardTypeMedia() {
  const context: any = useContext(CardPublicationContext)

  const { type, url }: { type: string; url: string } = context

  const rederMedia = (type: string) => {
    switch (type) {
      case VIDEO:
        return (
          <div>
            <video src={url}></video>
          </div>
        )
      case IMAGE:
        return (
          <div>
            <img src={url}></img>
          </div>
        )

      default:
        return <div></div>
    }
  }

  return rederMedia(type)
}

export default CardTypeMedia
