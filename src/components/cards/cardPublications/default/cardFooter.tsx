import React from 'react'
import PropTypes from 'prop-types'
import { HEART, COMMENT, SEND } from '../../../../contants/icons.api'
import IconComponent from '../../../iconsCompents'

function CardFooter({}) {
  return (
    <div className="card-footer">
      <div className="actions-icons">
        <IconComponent name={HEART} />
        <IconComponent name={COMMENT} />
        <IconComponent name={SEND} />
      </div>
      <div>menu</div>
    </div>
  )
}

CardFooter.propTypes = {}

export default CardFooter
