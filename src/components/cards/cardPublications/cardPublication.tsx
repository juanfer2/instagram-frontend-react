import React from 'react'
import PropTypes from 'prop-types'

/** Components */
import Card from '../index'
import CardHeader from './default/cardHeader'
import CardContent from './default/cardContent'
import CardFooter from './default/cardFooter'

function CardPublication() {
  return (
    <Card>
      <div className="card-publication">
        <CardHeader />
        <CardContent />
        <CardFooter />
      </div>
    </Card>
  )
}

CardPublication.propTypes = {}

export default CardPublication
