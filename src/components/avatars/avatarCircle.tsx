import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled, { css } from 'styled-components'
import { AvatarCircleStyledProps } from '../../interfaces/components/avatarsInteface/avatar.interface'
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
  size,
  borderActive,
}: InferProps<typeof AvatarCircle.propTypes>) {
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
        <img
          src="https://instagram.feoh1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/17586968_692628400917167_3228496108602785792_a.jpg?_nc_ht=instagram.feoh1-1.fna.fbcdn.net&amp;_nc_ohc=5oyNVD_OwpwAX_gOJOW&amp;oh=253073322c536055fe0c00d2ce8b4933&amp;oe=5F74791F"
          alt="avatar-perfil"
        />
      </div>

      <div id="cont">
        <div id="box"></div>
      </div>
    </AvatarCircleStyled>
  )
}
AvatarCircle.propTypes = {
  size: PropTypes.number,
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
