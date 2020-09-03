import { useState } from 'react'
import { AvatarCircleStyledProps } from '../../../../interfaces/components/avatarsInteface/avatar.interface'

export const useAvatarCircle = (size: number | null | undefined) => {
  const sizeCircle: number = size ? size : 50
  const sizeRadius: number = sizeCircle / 2

  const sizeExternalCircle: number = sizeCircle + 10
  const sizeExternalCircleRadius: number = sizeCircle / 1

  const [state, setState] = useState<AvatarCircleStyledProps>({
    width: `${sizeCircle}px`,
    radius: `${sizeRadius}px`,
    externalCircleWidth: `${sizeExternalCircle}px`,
    externalCircleRadius: `${sizeExternalCircleRadius}px`,
  })

  return state
}
