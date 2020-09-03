import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled, { css } from 'styled-components'
import { AvatarCircleStyledProps } from '../../../interfaces/components/avatarsInteface/avatar.interface'
import { useAvatarCircle } from './useAvatarCircle'

const AvatarCircleStyled = styled.div`
  .avatar-circle {
    img {
      width: ${(props: AvatarCircleStyledProps) => props.width};
      border-radius: ${(props: AvatarCircleStyledProps) => props.radius};
      border-image: -webkit-linear-gradient(left top, crimson 0%, #f90 100%);
      position: relative;
    }
  }
`

function AvatarCircle({
  urlAvatar,
  size,
  borderActive,
}: InferProps<typeof AvatarCircle.propTypes>) {
  const defaultImage =
    'https://instagram.feoh1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/17586968_692628400917167_3228496108602785792_a.jpg?_nc_ht=instagram.feoh1-1.fna.fbcdn.net&_nc_ohc=otaEZzB8vVsAX_Ucubm&oh=ca6f0fdfb41610a18e28c914679c7d1a&oe=5F786D9F'
  const {
    width,
    radius,
    externalCircleWidth,
    externalCircleRadius,
  } = useAvatarCircle(size)

  return (
    <AvatarCircleStyled
      width={width}
      radius={radius}
      externalCircleWidth={externalCircleWidth}
      externalCircleRadius={externalCircleRadius}
    >
      <div className="avatar-circle">
        <img src={urlAvatar ? urlAvatar : defaultImage} alt="avatar-perfil" />
      </div>

      {/**<div id="cont">
        <div id="box"></div>
  </div>*/}
    </AvatarCircleStyled>
  )
}
AvatarCircle.propTypes = {
  size: PropTypes.number,
  urlAvatar: PropTypes.string,
  borderActive: PropTypes.bool,
}
/*
text-align: center;
    height: ${(props: AvatarCircleStyledProps) => props.externalCircleWidth};
    width: ${(props: AvatarCircleStyledProps) => props.externalCircleWidth};
    background: -webkit-linear-gradient(left top, crimson 0%, #f90 100%);
    padding: 10px;
*/

/**
 * padding: 5px;
    text-align: center;
    width: ${(props: AvatarCircleStyledProps) => props.externalCircleWidth};
    border-radius: ${(props: AvatarCircleStyledProps) =>
      props.externalCircleRadius};
    background: -webkit-linear-gradient(left top, crimson 0%, #f90 100%);
 * 
 */
export default AvatarCircle
