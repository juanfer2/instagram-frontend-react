import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import {
  COMPASS,
  HOUSE,
  SEND,
  HEART,
  MENU,
  COMMENT,
} from '../../contants/icons.api'

/** Components */
import IconHouse from './defaults/iconHouse'
import IconSend from './defaults/iconSend'
import IconCompass from './defaults/iconCompass'
import IconHeart from './defaults/iconHeart'
import IconMenu from './defaults/iconMenu'
import IconComment from './defaults/iconComment'

function Icons({ name, active }: InferProps<typeof Icons.propTypes>) {
  const showIcon = (): any => {
    switch (name) {
      case HOUSE:
        return (
          <div className={'icon-container ' + (active && 'active-icon')}>
            <IconHouse />
          </div>
        )
      case SEND:
        return (
          <div className={'icon-container ' + (active && 'active-icon')}>
            <IconSend />
          </div>
        )
      case COMPASS:
        return (
          <div className={'icon-container ' + (active && 'active-icon')}>
            <IconCompass />
          </div>
        )
      case HEART:
        return (
          <div className={'icon-container ' + (active && 'active-icon')}>
            <IconHeart />
          </div>
        )
      case MENU:
        return (
          <div className={'icon-container ' + (active && 'active-icon')}>
            <IconMenu />
          </div>
        )
      case COMMENT:
        return (
          <div className={'icon-container ' + (active && 'active-icon')}>
            <IconComment />
          </div>
        )
      default:
        return <></>
    }
  }

  return <div>{showIcon()}</div>
}

Icons.propTypes = {
  name: PropTypes.oneOf([COMPASS, HOUSE, SEND, HEART, MENU, COMMENT])
    .isRequired,
  active: PropTypes.bool,
}

export default Icons
