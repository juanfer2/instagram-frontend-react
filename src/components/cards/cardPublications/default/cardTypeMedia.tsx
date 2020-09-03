import React, { useContext } from 'react'
import {
  CardPublicationContext,
  CardPublicationContextTypes,
} from '../cardPublicationContext'
import { IMAGE, VIDEO } from '../../../../contants/card.constant'

function CardTypeMedia() {
  const context: any = useContext(CardPublicationContext)

  const { type, src }: { type: string; src: string } = context

  console.log(type)
  console.log(src)

  const rederMedia = (type: string) => {
    switch (type) {
      case VIDEO:
        return (
          <div>
            <video src={src}></video>
          </div>
        )
      case IMAGE:
        return (
          <div>
            <img src={src}></img>
          </div>
        )

      default:
        return <div></div>
    }
  }

  return rederMedia(type)
}

export default CardTypeMedia
